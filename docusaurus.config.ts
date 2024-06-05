import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Antimetal Documentation",
  // tagline: "cool tagline",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.antimetal.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Antimetal", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/antimetal/docs/blob/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.svg",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "Antimetal",
      logo: {
        alt: "Antimetal Logo",
        src: "img/logo.svg",
        href: "https://antimetal.com"
      },
      items: [
        {
          href: "/",
          label: "Docs",
          position: "left"
        },

        {
          href: "https://app.antimetal.com",
          label: "Sign Up",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `© ${new Date().getFullYear()} Antimetal Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "KBUWZBJ6QU",

      // Public API key: it is safe to commit it
      apiKey: "f6a9f2beb61290b814aaad436c9ff4ef",

      indexName: "antimetal",

      contextualSearch: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
