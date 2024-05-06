---
title: Frequently Asked Questions
description: FAQ
hide_table_of_contents: true
sidebar_label: AWS
---

# AWS


**Why am I getting permission denied when trying to enable the resource cost group in the cost explorer?**  

Enable the following setting from AWS in the company account requested. Please note that this change will be enabled within 48 hours  

<br></br>

**How do I create new cost allocation tags?**  

All tags that you apply to any resource become cost-allocation tags as soon as they are approved. After you create any new tags, Antimetal will approve these tags as cost allocation tags so you can view them in the cost explorer/CUR/etc.  

<br></br>

**What are the implications of leaving my AWS organization?**  

We do not create an “OrganizationAccountAccessRole” in your account when you join our organization, preventing us from getting admin access to any parts of your account. Any administrative changes would need to be explicitly accepted by you via a “handshake”. Read the [<u>**AWS documentation here**</u>](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html#:~:text=However%2C%20unlike%20created%20accounts%2C%20the%20OrganizationAccountAccessRole%20IAM%20role%20is%20not%20automatically%20created%20in%20the%20member%20account%20with%20permissions%20for%20the%20management%20account%20to%20assume.).
