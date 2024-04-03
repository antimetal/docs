---
title: AWS Permissions
description: Detailed breakdown of the AWS Permissions required by Antimetal.
hide_table_of_contents: true
sidebar_label: AWS Permissions
---

# AWS Permissions

Antimetal only collects metadata about your infrastructure and never attempts to read sensitive information from the underlying services. We can’t touch workloads, introspect on server state, or terminate/stop instances.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "application-autoscaling:Describe*",
        "autoscaling:Describe*",
        "ce:Describe*",
        "ce:Get*",
        "ce:List*",
        "cloudwatch:GetMetricData",
        "ec2:Describe*",
        "ec2:AcceptReservedInstancesExchangeQuote",
        "ec2:CancelReservedInstancesListing",
        "ec2:CreateReservedInstancesListing",
        "ec2:DeleteQueuedReservedInstances",
        "ec2:ModifyReservedInstances",
        "ec2:PurchaseHostReservation",
        "ec2:PurchaseReservedInstancesOffering",
        "rds:Describe*",
        "rds:List*",
        "rds:PurchaseReservedDbInstancesOffering",
        "elasticache:List*",
        "elasticache:Describe*",
        "elasticache:PurchaseReservedCacheNodesOffering",
        "es:Describe*",
        "es:List*",
        "es:PurchaseReservedInstanceOffering",
        "organizations:Describe*",
        "organizations:List*",
        "pricing:DescribeServices",
        "pricing:GetAttributeValues",
        "pricing:GetProducts",
        "savingsplans:Describe*",
        "savingsplans:List*",
        "servicequotas:Get*",
        "servicequotas:List*",
        "support:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

## IAM Permission Descriptions

Below is a list of AWS permissions and a brief description of what each permission does.

#### Our Cross-Account IAM Role Permissions:

| Permission                                         | Brief Description                                                                                                                                                                                                  |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"application-autoscaling:Describe*"`              | Determine EC2-related application autoscaling behavior and policies (for services like ECS and SageMaker) to make recommendation decisions.                                                                        |
| `"autoscaling:Describe*"`                          | Determine application EC2 autoscaling behavior and policies to make recommendation decisions.                                                                                                                      |
| `"aws-portal:ViewBilling"`                         | Allows viewing billing information in the AWS portal                                                                                                                                                               |
| `"aws-portal:ViewUsage"`                           | Allows viewing usage information in the AWS portal                                                                                                                                                                 |
| `"ce:Describe/Get/List*"`                          | Fetch historical spending data; list existing savings infrastructure across accounts (within an organization); and collect utilization information for on-demand instances, reserved instances, and savings plans. |
| `"cloudwatch:GetMetricData"`                       | Get per-instance metric data to make right-sizing recommendations and measure instance utilization.                                                                                                                |
| `"ec2:Describe*"`                                  | Fetch and store data related to EC2 on-demand and reserved instances. In particular, stores instance type, platform, tenancy, region, and how long instance has been on.                                           |
| `"ec2:AcceptReservedInstancesExchangeQuote"`       | Allows accepting exchange quotes for Reserved Instances in EC2                                                                                                                                                     |
| `"ec2:CancelReservedInstancesListing"`             | Allows canceling Reserved Instances listings in EC2                                                                                                                                                                |
| `"ec2:CreateReservedInstancesListing"`             | Allows creating Reserved Instances listings in EC2                                                                                                                                                                 |
| `"ec2:DeleteQueuedReservedInstances"`              | Allows deleting queued Reserved Instances in EC2                                                                                                                                                                   |
| `"ec2:ModifyReservedInstances"`                    | Allows modifying Reserved Instances in EC2                                                                                                                                                                         |
| `"ec2:PurchaseHostReservation"`                    | Allows purchasing host reservations in EC2                                                                                                                                                                         |
| `"ec2:PurchaseReservedInstancesOffering"`          | Allows purchasing Reserved Instances offerings in EC2                                                                                                                                                              |
| `"rds:Describe/List"`                              | Fetch and store data related to RDS on-demand and reserved instances. In particular, stores instance type, engine, multi-AZ, region, and how long instance has been on.                                            |
| `"rds:PurchaseReservedDbInstancesOffering"`        | Allows purchasing of RDS Reserved Instances                                                                                                                                                                        |
| `"elasticache:Describe/List"`                      | Fetch and store data related to ElastiCache on-demand and reserved instances.                                                                                                                                      |
| `"elasticache:PurchaseReservedCacheNodesOffering"` | Allows purchasing of ElastiCache on-demand and reserved instances.                                                                                                                                                 |
| `"es:Describe/List"`                               | Fetch and store data related to ElasticSearch and OpenSearch on-demand and reserved instances.                                                                                                                     |
| `"es:PurchaseReservedInstanceOffering"`            | Allows purchasing of ElasticSearch and OpenSearch on-demand and reserved instances.                                                                                                                                |
| `"organizations:Describe/List"`                    | See organization information to reconcile savings and savings opportunities for users with multi-account organizations.                                                                                            |
| `"pricing:DescribeServices"`                       | Allows describing services related to pricing                                                                                                                                                                      |
| `"pricing:GetAttributeValues"`                     | Allows getting attribute values related to pricing                                                                                                                                                                 |
| `"pricing:GetProducts"`                            | Allows getting products related to pricing                                                                                                                                                                         |
| `"savingsplans:Describe/List"`                     | Fetch and store type and spend commitment data for Compute and EC2 savings plans.                                                                                                                                  |
| `"servicequotas:Get/List*"`                        | Determine service quota limits for the number of reserved instances that can be purchased in a single month.                                                                                                       |
| `servicequotas:RequestServiceQuotaIncrease`        | Request a service quota increase. The only service quota Antimetal currently requests an increase for is the number of reserved instances that can be purchased per month.                                         |
| `"support:*"`                                      | Resolve support cases related to service quota increases. Antimetal only touches support cases that it created via a `RequestServiceQuotaIncrease` call.                                                           |
