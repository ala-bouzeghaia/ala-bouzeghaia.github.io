// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://ala-bouzeghaia.github.io",
  base: "/",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        mdi: ["linkedin", "github", "email"],
      },
    }),
  ],
});
