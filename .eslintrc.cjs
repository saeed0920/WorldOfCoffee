/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react", "@typescript-eslint", , "react-refresh"],
  rules: {
    "no-unused-vars": ["warn"],
    "@typescript-eslint/ban-ts-comment": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
  settings: {
    react: {
      version: "18.3.1",
    },
  },
};
