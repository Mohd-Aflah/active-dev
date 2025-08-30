export default [
 {
  files: ["**/*.{js,ts,tsx}"],
  languageOptions: {
   ecmaVersion: "latest",
   sourceType: "module",
  },
  rules: {
   "no-unused-vars": "warn",
   "no-console": "off",
   "prefer-const": "error",
   "no-var": "error",
   "semi": ["error", "always"],
   "quotes": ["error", "double"],
  },
 },
];
