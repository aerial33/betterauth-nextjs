import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "prefer-arrow-callback": ["warn"],
      "prefer-template": ["error"],
      // Ajout de la règle pour 'any'
      "@typescript-eslint/no-explicit-any": ["warn"], // 'warn' au lieu de 'error'
      // Autres règles TypeScript que vous pourriez vouloir configurer
      "@typescript-eslint/no-unsafe-assignment": ["warn"],
      "@typescript-eslint/no-unsafe-member-access": ["warn"],
      "@typescript-eslint/no-unsafe-call": ["warn"],
      "@typescript-eslint/no-unsafe-return": ["warn"],
    },
  },
];

export default eslintConfig;
