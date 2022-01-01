---
title: 'How to Upload Multiple Files to AWS S3 using Terraform'
excerpt: 'A snippet to upload multiples files from a specific folder (recursively) to AWS S3 using terraform'
tags:
    - snippet
    - AWS
    - S3
    - terraform
---

## Problem

I want to upload multiple files from a specific folder to an AWS S3 bucket.

### Assumptions

The S3 bucket name is **test**.

The directory structure is as follows.

```txt
documents
|- file_1
|- subdirectory1
|  |- file_1_1
|  |- file_1_2
|  |- subdirectory2
|  |  |- file_1_2_1
```

We want to end up with the following S3 objects.

-   s3://test/file_1
-   s3://test/subdirectory1/file_1_1
-   s3://test/subdirectory1/file_1_2
-   s3://test/subdirectory1/subdirectory2/file_1_2_1

## Solution

```hcl
resource "aws_s3_bucket_object" "test" {
  for_each = fileset("./documents/", "**")
  bucket = "test"
  key = each.value
  source = "./documents/${each.value}"
  etag = filemd5("./documents/${each.value}")
}
```

-   **_Line 1_:**: Create an S3 bucket object resource.
-   **_Line 2_:**: Use a **_for_each_** argument to iterate over the documents returned by the **_fileset_** function. **_for_each_** identifies each resource instance by its S3 path, making it easy to add/remove files. The fileset function enumerates over a set of filenames for a given path. It uses **_\*\*_** as the pattern for a recursive search.
-   **_Line 3_:**: The name of the bucket to put the files in.
-   **_Line 4_:**: The object's name once it's in the bucket. In the example above, it is the same as the path.
-   **_Line 5_:**: the Path to the file to be uploaded.
-   **_Line 6_:**: Triggers an update only if the file changes. The eTag of each object is an MD5 hash of that object.

## References

-   [Resource: aws_s3_bucket_object](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_object)
-   [for_each](https://www.terraform.io/docs/language/meta-arguments/for_each.html)
-   [fileset](https://www.terraform.io/docs/language/functions/fileset.html)
