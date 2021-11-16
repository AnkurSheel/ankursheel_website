---
title: 'How to publish email bounce notifications to an SQS queue'
excerpt: 'In this post, I configure AWS to publish email bounce notifications to an SQS queue using terraform'
coverImage: './cover.jpg'
tags:
    - 'terraform'
    - 'devops'
    - 'AWS'
series: Handle email bounce notifications
---

Recently, I had to work on a task to notify us in slack whenever an email sent through Amazon Simple Email Service(SES) bounced. **Rohan Deshpande** has a great [article which shows how to handle bounces and complaints](https://aws.amazon.com/blogs/messaging-and-targeting/handling-bounces-and-complaints/). Since this article leans heavily on his approach, I recommend reading that first.

Go on, I will wait.

Oh, Good, you are back. So you might be wondering that if Rohan has already written the article, why am I writing this and more importantly, why should you spend your precious time reading this?

Well, although his solution solves the problem, it requires me to use the AWS Management Console. However, I want to leverage [terraform](https://www.terraform.io/) so that any changes I make can be easily deployed to all the environments.

## Step 1: Create an Amazon SQS queue

I will setup the SQS queue using [Resource: aws_sqs_queue](https://www.terraform.io/docs/providers/aws/r/sqs_queue.html)

```hcl
resource "aws_sqs_queue" "ses_bounces_queue" {
  name                      = "ses_bounces_queue"
  message_retention_seconds = 1209600
  redrive_policy            = "{\"deadLetterTargetArn\":\"${aws_sqs_queue.ses_dead_letter_queue.arn}\",\"maxReceiveCount\":4}"
}

resource "aws_sqs_queue" "ses_dead_letter_queue" {
  name = "ses_dead_letter_queue"
}
```

-   Set the human-readable name of the queue to _ses_bounces_queue_ so that terraform does not assign a random name to our queue.
-   Set the number of seconds SQS retains the message to 14 days(1209600 seconds).
-   Set up our dead letter queue to handle messages that could not be handled to help debug and isolate problems. Read more about [SQS Dead-Letter Queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html).

## Step 2: Create an Amazon SNS topic_arn

I will set up the SNS topic using [Resource: aws_sns_topic](https://www.terraform.io/docs/providers/aws/r/sns_topic.html)

```hcl
resource "aws_sns_topic" "ses_bounces_topic" {
  name     = "ses_bounces_topic"
}
```

-   Set the human-readable name of the queue to _ses_bounces_topic_ so that terraform does not assign a random name to our queue.

## Step 3: Configure the Amazon SNS topic to publish to the SQS queue

I will use [Resource: aws_sns_topic_subscription](https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html) to automatically place the messages sent to the SNS topic in the SQS queue.

```hcl
resource "aws_sns_topic_subscription" "ses_bounces_subscription" {
  topic_arn = aws_sns_topic.ses_bounces_topic.arn
  protocol  = "sqs"
  endpoint  = aws_sqs_queue.ses_bounces_queue.arn
}
```

-   Set the ARN of the SNS topic to subscribe to _ses_bounces_topic_.
-   Set the protocol to _sqs_ so that we can send the data to the SQS queue.
-   Set the endpoint to _ses_bounces_queue_.

## Step 4: Configure Amazon SES to publish bounce notifications using ses-bounces-topic to ses-bounces-queue

I will use [Resource: ses_identity_notification_topic](https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html) to set the SNS topic to use when delivering bounce notifications.

```hcl
resource "aws_ses_identity_notification_topic" "ses_bounces" {
  topic_arn                = aws_sns_topic.ses_bounces_topic.arn
  notification_type        = "Bounce"
  identity                 = email_domain
  include_original_headers = true
}
```

-   Set the Amazon SNS topic to _ses_bounces_topic_.
-   Set the notification type to _Bounce_.
-   Set the identity to the email domain, e.g. setting to _example.com_ will set it for emails in the _example.com_ domain.
-   Include the original email headers in the SNS notifications.

## Step 5: Ensure that IAM policies are in place so that Amazon SNS has access to publish to the appropriate SQS queues

I will use [Data Source: aws_iam_policy_document](https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html) to configure the IAM policy to allow the SNS topic to send messages to the SQS queue and use [Resource: aws_sqs_queue_policy](https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html) to set the policy of the queue.

```hcl
data "aws_iam_policy_document" "ses_bounces_queue_iam_policy" {
  policy_id = "SESBouncesQueueTopic"
  statement {
    sid       = "SESBouncesQueueTopic"
    effect    = "Allow"
    actions   = ["SQS:SendMessage"]
    resources = ["${aws_sqs_queue.ses_bounces_queue.arn}"]
    principals {
      identifiers = ["*"]
      type        = "*"
    }
    condition {
      test     = "ArnEquals"
      values   = ["${aws_sns_topic.ses_bounces_topic.arn}"]
      variable = "aws:SourceArn"
    }
  }
}

resource "aws_sqs_queue_policy" "ses_queue_policy" {
  queue_url = aws_sqs_queue.ses_bounces_queue.id
  policy    = data.aws_iam_policy_document.ses_bounces_queue_iam_policy.json
}
```

-   Set an id for the policy document.
-   Allow the sending of a message to the _ses_bounces_queue_ SQS queue.
-   Allow it on all principles. _We can probably lock it down to just AWS ARN's_.
-   Constrain the policy so that access is allowed only when the request originates from _ses_bounces_topic_.
-   Set the URL of the SQS queue to _ses_bounces_queue_.
-   Set the policy.

## Next Steps

You can see the [code here](https://github.com/AnkurSheel/ses-bounces).

So far, we have configured AWS to publish bounce notifications to an SQS queue. In the next post(s), we will see how we can configure an AWS Lambda to process the messages in the queue and send a custom message to a Slack channel.

Read [Part2](./handle-bounces-aws-ses-terraform-2)
