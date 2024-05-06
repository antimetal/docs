import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Getting Started",
      items: [
        "index",
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Onboarding",
          items: [
            "onboarding/overview",
            "onboarding/account_creation",
            "onboarding/iam_role_creation",
            "onboarding/csv",
            "onboarding/payment",
            "onboarding/join_org",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Product",
      items: [
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Savings",
          items: [
            "product/savings/volume_discounts",
            "product/savings/savings_plans",
            "product/savings/reserved_instances",
            "product/savings/tax",
            "product/savings/schedule",
            "product/savings/autopilot",
          ],
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Guardrails",
          items: [
            "product/guardrails/anomalies",
            "product/guardrails/rightsizing",
          ],
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Visibility",
          items: ["product/visibility/dashboard", "product/visibility/budgets"],
        },
        {
          type: "category",
          collapsible: true,
          collapsed: true,
          label: "Settings",
          items: [
            "product/settings/workspace",
            "product/settings/accounts",
            "product/settings/members",
            "product/settings/billing",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Security and Access Control",
      items: [
        "security/iam_roles_explained",
        "security/aws_permissions",
        "security/organization_changes",
      ],
    },
    {
      type: "category",
      collapsible: false,
      label: "Billing",
      items: ["billing/invoicing"],
    },
    {
      type: "category",
      collapsible: false,
      label: "FAQ",
      items: ["faq/onboarding", "faq/savings", "faq/billing", "faq/aws"],
    },
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
