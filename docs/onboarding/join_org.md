---
title: Join Our Organization
description: Join Antimetal's organization to get started.
hide_table_of_contents: true
sidebar_label: Join Our Organization
---

# Join Antimetal's Organization

The final step in the onboarding process is to join Antimetal's organization.

If you have a single account that is not in an organization, you can skip directly to [Step 3](#step-3-accept-antimetal-organization-invites).

If you already have your own AWS organization, you will have to destructure it to join Antimetal's organization.

:::info
Learn more about the implications of destructuring your organization [here](/faq).
:::

### Step 1: Remove Sub-Accounts

To delete your organization, you have to first remove all sub-accounts. A sub-account is just a non-management account. You can do this by following these steps:

- Login to each sub-account.
- Go the AWS Organizations console.

At times, you may encounter a message indicating that you cannot exit the organization. This usually occurs when your account is reliant on the management account and lacks the necessary details to operate as an independent AWS account.

![image](/img/screenshots/leave_organization.png "image")

#### 1. Your sub-account does not have a billing method attached.

Since your sub-account is leaving the organization, it needs its own billing method. As a result, you might have to insert a billing method—typically a credit card.

You can add a billing method by following these steps:

- Go to the AWS Billing and Cost Management console.
- Click on "Payment methods" in the left-hand menu.
- Click on "Add payment method" and follow the instructions.

:::info
Antimetal will be managing your billing when you join our organization, so this payment method will not be used.
:::

#### 2. Your AWS Account is missing contact information

If your AWS account was created without contact information, you will have to add it before you can leave the organization. You will typically be asked for:

- Contact name and address
- Phone number verification

### Step 2: Delete Organization

Once all sub-account have been removed, you will just have the management account left in the organization. At this stage you will be deleting the organization—since there's only a single account, removing it is equivalent to deleting the organization.

- Login to the management account.
- Go to the AWS Organizations console.
- Click on the "Delete organization" button.

![image](/img/screenshots/delete_org.png "image")

### Step 3: Accept Antimetal Organization Invites

Shortly after you complete Steps 1 and 2, each of your accounts will receive an invite to the Antimetal organization. You will have to accept these invites to join our organization.

To accept an invite:

- Login to each account.
- Go to the AWS Organizations console.
- Click on the "Invitations" tab.
- Accept the invite from Antimetal. It should be from groups@antimetal.com.
