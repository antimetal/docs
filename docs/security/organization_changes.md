---
title: Organization Security
description: Understand what changes are made to your organization when you connect Antimetal.
hide_table_of_contents: true
sidebar_label: Organization Security and Access Control
---

# Organization Security and Access Control

As you consider joining our AWS Organization, it's essential to understand the various security, access, and operational implications that come with this transition, especially if it involves deleting your existing AWS Organization. This doc aims to provide you with a comprehensive overview to help you make an informed decision.

## 1. Organizational Policies

Although you are within the Antimetal organization, our permissions to your account are limited to the billing level. The only resource we create is a cross-account IAM role to see your billing and usage. As you can see, we do not create an **OrganizationAccountAccessRole** in your account when you join our organization, preventing us from getting admin access to any parts of your account. Any administrative changes would need to be explicitly accepted by you via a **handshake**. Read the [<u>**AWS documentation here**</u>](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html#:~:text=However%2C%20unlike%20created%20accounts%2C%20the%20OrganizationAccountAccessRole%20IAM%20role%20is%20not%20automatically%20created%20in%20the%20member%20account%20with%20permissions%20for%20the%20management%20account%20to%20assume.).

## 2. Permissions

The file where you can find a full list of the IAM role permissions linked [here](security/iam_roles_explained.md)—none have admin access.

## 3. Access Control

Our default SCP only denies you access to see other members of the organization (for privacy reasons). That means it is impossible a service, role, user, etc. will suddenly lose the permissions it once had upon joining the organization. However, it does mean if you had a more restrictive SCP, for a small amount of time, your SCP will be much more permissive. During onboarding, we will work with you to replicate your SCPs in the Antimetal organization.

## 4. Consolidated Billing and Financial Visibility

Your billing details will be integrated into our consolidated billing structure. We have confidentiality and data privacy practices in place to handle this information. We require this billing information to redistribute the cost of saving instruments among customers and to send you invoices at the end of the month.

## 5. Organizational Structure

When you join our organization, we’ll replicate your OU to mirror the structure and permissions of your previous organization, including the SCPs. This will mirror the configuration of your old organization as closely as possible.

## 6. Leaving the Org

There are no fees or penalties to leaving the Antimetal organization, we just ask for a 60 day grace period in order to make sure you do not affect the savings of any other members within the group. In the event of insolvency, you would be automatically removed from the organization - your accounts would be unaffected.
