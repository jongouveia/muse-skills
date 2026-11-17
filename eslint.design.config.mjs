// Design-system lint (@shadcn/lint). `npm run lint:design` is the gate.
// Tokens live in src/styles/global.css (@theme). Raw colours and arbitrary
// values fail; add a token there instead. Arbitrary LAYOUT values (w-[37px],
// grid-cols-[...]) are allowed on purpose.
// Baseline: eslint-design-suppressions.json (not the default
// eslint-suppressions.json, which a bare `eslint` run would read and fail on).
// Linted: class attributes, including template literals and constants used
// in them. Not linted: inline style="" colours, and class strings in .ts
// modules that never reach a class attribute in the same file. Check by hand.
import { plugin as shadcn } from "@shadcn/lint";
import tsParser from "@typescript-eslint/parser";
import * as astroParser from "astro-eslint-parser";
import { defineConfig, globalIgnores } from "eslint/config";

const rules = {
  "shadcn/no-raw-colors": "error",
  "shadcn/no-arbitrary-values": ["error", { allow: ["layout"] }],
};

export default defineConfig([
  globalIgnores(["dist/**", ".astro/**", "node_modules/**"]),
  {
    files: ["src/**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: { parser: tsParser, extraFileExtensions: [".astro"] },
    },
    plugins: { shadcn },
    rules,
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: { parser: tsParser, parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { shadcn },
    rules,
  },
]);
