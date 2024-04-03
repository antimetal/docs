---
title: Cross-Account IAM Roles, Explained
description: Understand the security measures Antimetal takes to connect to your AWS account.
hide_table_of_contents: true
sidebar_label: Cross-Account IAM Roles, Explained
---

# Cross-Account IAM Roles, Explained

To connect your AWS account, Antimetal uses a Cross-Account IAM Role. This is AWS’ preferred method for cross-account interactions, providing a secure and reliable connection.

Cross-Account IAM roles allow customers to securely grant access to AWS resources in their account to a third party, like Antimetal while retaining the ability to control and audit who is accessing your AWS account. Cross-account roles reduce the amount of sensitive information APN Partners need to store for their customers so that they can focus on their product instead of managing keys.

The creation of an IAM role means that Antimetal will never require sensitive access credentials, account logins, passwords, or other information.

### Trust Relationship

The role’s trust relationship specifies that Antimetal (account ID: `984606353847`) is the only AWS account that can assume this role.

As a further security measure, the role requires an `ExternalID` that is unique to each client. Here is an example of what the role trust relationship looks like:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::984606353847:root"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "XXXXXXXXXXXXX"
        }
      }
    }
  ]
}
```
