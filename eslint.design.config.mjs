// Design-system lint (@shadcn/lint). `npm run lint:design` is the gate.
// Tokens live in src/styles/global.css (@theme). Raw colours and arbitrary
// values fail; add a token there instead. Arbitrary LAYOUT values (w-[37px],
// grid-cols-[...]) are allowed on purpose.
// Blind spot: classes inside template literals or plain string constants, and
// inline style="" colours, are not checked. Review those by hand.
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
