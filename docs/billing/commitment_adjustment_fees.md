---
title: Commitment Adjustment Fees
description: What are Commitment Adjustment Fees
hide_table_of_contents: true
sidebar_label: Commitment Adjustment Fees
---

# Commitment Adjustment Fees

After joining Antimetal, costs from AWS Cost Explorer will largely reflect what the Antimetal bill will be at the end of each [<u>**billing cycle**</u>](/billing/billing_cycle). If the costs differ, they will be denoted in the Antimetal Invoice as <strong>Commitment Adjustment Fees</strong>.

### What are Commitment Adjustment Fees
Most AWS accounts under the Antimetal organization have commitments. These can be Savings Plans, Reserved Instances, CloudFront Security Bundles, etc. Commitments are applied first to the `owner account` but will flow to others accounts in the organization if they go underutilized - thereby generating savings for other accounts. This is great for both parties, the `owner account` that purchased the commitments don't have to pay for their underutilized commitments while other accounts, let's call them the `beneficiary accounts`, get a discount from a commitment they didn't purchase. The official AWS explanation can be found at this [<u>**AWS documenation**</u>](https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-applying.html). 

This is great for both parties but it does introduce an extra layer of billing complexity since the account that purchased the commitment is no longer the same account that is using it.
AWS doesn't support this billing redistribution natively so Antimetal handles this redistribution by referencing [<u>**Cost And Usage Report 2.0**</u>](https://docs.aws.amazon.com/cur/latest/userguide/table-dictionary-cur2.html).

Antimetal ingests the Cost And Usage Report and resdistributes the `effective-cost` of a commitment (the fees of the commitment) when it flows across the organization to another account.

**To demistify this with an example:** if `owner account` has a commitment of **$100** in Compute Savings Plans and it flows cross-organization to negate **$130** from the compute workload of a `beneficiary account`, Antimetal will redistribute the `effective-cost` of the Savings Plans by reimbursing the `owner account` **$100** and passing this commitment fee to the `beneficiary account`. On net, the `beneficiary account` saved **$30** they otherwise wouldn't have and the `owner account` recoups **$100** they otherwise would've lost. 

To emphasize, Antimetal **does not take a fee from savings**. This redistribution system is simply put in place for the advantage of our customers. 



References:
- [<u>**Cost And Usage Report 2.0**</u>](https://docs.aws.amazon.com/cur/latest/userguide/table-dictionary-cur2.html)
- [<u>**Reservation effective cost**</u>](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#:~:text=reservation/EffectiveCost)
- [<u>**Savings Plans effective cost**</u>](https://docs.aws.amazon.com/cur/latest/userguide/savingsplans-columns.html#:~:text=savingsPlan/SavingsPlanEffectiveCost)
