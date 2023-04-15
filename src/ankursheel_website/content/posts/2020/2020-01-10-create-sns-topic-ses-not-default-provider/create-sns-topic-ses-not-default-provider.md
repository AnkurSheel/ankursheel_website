---
title: 'Terraform: Create an SNS topic for SES in a different region'
excerpt: 'How can we create SNS topics to access SES created in a different region to the rest of our infrastructure'
category: "programming"
tags:
    - 'terraform'
    - 'devops'
    - 'AWS'
---

Let us assume that most of our infrastructure is in _ap-southeast-2 (Sydney)_. But, our Amazon Simple Email Service(SES) is set up in _us-west-2 (Oregon)_. We also want to create Amazon Simple Notification Service(SNS) topics, and Amazon Simple Queue Service (SQS) queues to handle bounce notifications.

Since SES is in a different region, our SNS topics also need to be in that region. So how do we tell terraform to create the topics in the SES region?

## Solution

### Step 1

Create providers.

```hcl
provider "aws" {
  region = "ap-southeast-2"
}

provider "aws" {
  region = "us-west-2"
  alias  = "ses_aws"
}
```

-   **ap-southeast-2**: The default provider configuration.
-   **us-west-2**: This is the additional provider configuration. Setting the **_Alias_** allows us to create more than 1 provider.

## Step 2

For the resources we want to use the _us-west-2_ region, we specify the _provider_ parameter and set it equal to the _alias_.

If a _provider_ parameter is not specified, it will fall back to using the provider that doesn't have an alias.

```hcl
resource "aws_sqs_queue" "example-queue" {
  name                      = "example_queue"
}

resource "aws_sns_topic" "example-topic" {
  name     = "example_topic"
  provider = aws.ses_aws
}
```

In the above snippet, _example-queue_ will be created in _ap-southeast-2_ but, _example-topic_ will be created in _us-west-2_.

## Conclusion

We can change the region by creating additional providers and specifying the _provider_ parameter in a resource.
