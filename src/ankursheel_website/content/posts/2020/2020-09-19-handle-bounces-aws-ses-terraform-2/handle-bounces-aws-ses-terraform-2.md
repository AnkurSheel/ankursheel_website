---
title: 'How to use terraform to process SQS messages in a lambda'
excerpt: 'In this post, we will set up a lambda to process the messages that are available on the queue'
coverImage: './cover.jpg'
category: "programming"
tags:
    - 'terraform'
    - 'devops'
    - 'AWS'
series: Handle email bounce notifications
---

In the last post, we saw [how to create an SNS topic to publish the bounce notification to an SQS queue](./handle-bounces-ses-terraform). In this post, we will set up a lambda to process the available messages on the queue.

## Step 1: Create an AWS lambda

We will create the lambda function using [Resource: aws_lambda_function](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function).

```hcl
resource "aws_lambda_function" "SESBouncesLambda" {
  filename         = "./zips/lambda.zip"
  function_name    = "SESBouncesLambda"
  role             = aws_iam_role.ses_bounces_lambda_role.arn
  handler          = "Lambda::Lambda.Function::FunctionHandler"
  source_code_hash = filebase64sha256("./zips/lambda.zip")
  runtime          = "dotnetcore3.1"
}
```

-   Set the file name (including the path) for the deployment package. _Create a temporary zip file. We will look at the actual lambda in a later post_.
-   Set the unique name for the lambda.
-   Set the IAM role for the Lambda function so that we can give it permissions. _We will look at this below_.
-   Set the entry-point. _This is similar to the main function in a console app_.
-   Set the source code hash so that we can trigger updates for when the function changes.
-   Set the runtime to **.Net Core 3.1** so that AWS knows that the lambda function is built using .Net core 3.1.

## Step 2: Create an IAM role for the lambda

We will use [Data Source: aws_iam_policy_document](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) to allow the lambda service to assume an IAM role to get temporary credentials.

We will use [Resource: aws_iam_role](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) to set the IAM role for the lambda.

```hcl
data "aws_iam_policy_document" "ses_bounces_lambda_role_iam_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ses_bounces_lambda_role" {
  name               = "SESBouncesLambdaRole"
  assume_role_policy = data.aws_iam_policy_document.ses_bounces_lambda_role_iam_policy.json
}
```

-   Use _AssumeRole_, which allows AWS services to assume an IAM Role.
-   Constrain the policy so that only lambdas can assume an IAM role.
-   Attach the policy to the role.

## Step 3: Give the lambda access to read messages from SQS queues

We will use [Resource: aws_iam_role_policy_attachment](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) to attach an IAM policy to allow the lambda to read messages from the SQS queue.

```hcl
resource "aws_iam_role_policy_attachment" "lambda_sqs_role_policy" {
  role       = aws_iam_role.ses_bounces_lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaSQSQueueExecutionRole"
}
```

-   Set the role to which this policy should be attached
-   Add the AWS managed policy _AWSLambdaSQSQueueExecutionRole_ which has the permissions that the function needs to read items from Amazon SQS and write logs to CloudWatch Logs.

## Step 4: Give the lambda access to the queue

We will use [Resource: aws_lambda_event_source_mapping](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_event_source_mapping) to allow our lambda to get events from the SQS queue

```hcl
resource "aws_lambda_event_source_mapping" "event_source_mapping" {
  event_source_arn = aws_sqs_queue.ses_bounces_queue.arn
  function_name    = aws_lambda_function.SESBouncesLambda.arn
}
```

-   Set the queue to _ses_bounces_queue._
-   Set the lambda to _SESBouncesLambda_.

## Next Steps

You can see the [code here](https://github.com/AnkurSheel/ses-bounces).

So far, we have configured AWS to publish bounce notifications to an SQS queue. In the next post, we will see how to write a lambda function to send a custom message to a Slack channel.
