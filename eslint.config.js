import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  ...eslintPluginAstro.configs.recommended, // usa las reglas built-in del plugin
  {
    files: ["**/*.{js,ts,astro}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "jsx-a11y": jsxA11y, // solo este necesita declararse
    },
    rules: {
      // reglas personalizadas
      "astro/no-set-html-directive": "error",
      "jsx-a11y/alt-text": "warn",
    },
  },
];
