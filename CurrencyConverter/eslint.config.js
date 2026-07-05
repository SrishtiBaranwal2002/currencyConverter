import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { 
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2020, // Ye ensure karein
        sourceType: 'module' 
      },
    },
    // Yahan rules add karein
    rules: {
      "no-unused-vars": ["error", { "varsIgnorePattern": "^React$" }],
      "react/react-in-jsx-scope": "off" // React 17+ ke liye zaroori nahi
    }
  },
])