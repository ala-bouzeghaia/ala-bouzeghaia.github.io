import {
  defineConfig,
  defineTextStyles,
  defineGlobalStyles,
} from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    // scrollbarGutter: "stable",
    // fontFamily: "body",
  },
  h1: {
    fontSize: "2.25rem", // 36px
    fontWeight: "700", // bold
    lineHeight: "2.5rem", // 40px
  },
  h2: {
    fontSize: "1.875rem", // 30px
    fontWeight: "600", // semibold
    lineHeight: "2.25rem", // 36px
  },
  h3: {
    fontSize: "1.5rem", // 24px
    fontWeight: "600", // semibold
    lineHeight: "2rem", // 32px
  },
  h4: {
    fontSize: "1.25rem", // 20px
    fontWeight: "600", // semibold
    lineHeight: "1.75rem", // 28px
  },
  h5: {
    fontSize: "1.125rem", // 18px
    fontWeight: "500", // medium
    lineHeight: "1.75rem", // 28px
  },
  h6: {
    fontSize: "1rem", // 16px
    fontWeight: "500", // medium
    lineHeight: "1.5rem", // 24px
  },
  p: {
    fontSize: "1rem", // 16px
    lineHeight: "1.5rem", // 24px
    // marginBottom: '1rem', // 16px spacing below paragraphs
  },
  code: {
    padding: "2px 5px",
    borderRadius: "0.5rem",
  },
  pre: {
    padding: "1.5rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    "& > code": {
      all: "unset",
    },
  },
});

const textStyles = defineTextStyles({
  heading1: {
    value: {
      fontSize: "2.75rem",
      lineHeight: "140%",
      fontWeight: "bold",
    },
  },
  heading2: {
    value: {
      fontSize: "2.5rem",
      lineHeight: "140%",
      fontWeight: "bold",
    },
  },
  heading3: {
    value: {
      fontSize: "2.25rem",
      lineHeight: "140%",
    },
  },

  heading4: {
    value: {
      fontSize: "2rem",
      lineHeight: "140%",
    },
  },

  body: {
    value: {
      fontSize: "1.125rem",
      lineHeight: "150%",
    },
  },

  label: {
    value: {
      fontSize: "0.75rem",
      lineHeight: "150%",
    },
  },
});

export default defineConfig({
  presets: ["@pandacss/preset-panda"],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,html,astro,md,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        sizes: {
          containerWidth: {
            value: "1000px",
            description: "Max width of the content",
          },
          contentWidth: {
            value: "820px",
            description: "Width of the content",
          },
        },
        shadows: {
          cardShadow: {
            value: "0 2px 6px var(--colors-gray-500)",
            description: "Shadow for cards",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  importMap: {
    css: "styled-system/css",
    recipes: "styled-system/recipes",
    patterns: "styled-system/patterns",
    jsx: "styled-system/jsx",
  },
});
