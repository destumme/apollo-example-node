// @ts-ignore

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig(
  {
    ignores: ["**/*.config.js"]
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  eslintPrettier
);