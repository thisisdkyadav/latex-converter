import js from "@eslint/js" // ESLint's recommended JavaScript rules
import globals from "globals" // Common global variables (e.g., browser, node)
import reactHooks from "eslint-plugin-react-hooks" // ESLint plugin for React Hooks rules
import reactRefresh from "eslint-plugin-react-refresh" // ESLint plugin for React Fast Refresh
import tseslint from "typescript-eslint" // ESLint tooling for TypeScript

// ESLint configuration using the flat config format
export default tseslint.config(
  // Ignores the 'dist' directory from linting
  { ignores: ["dist"] },
  // Configuration block for TypeScript and TSX files
  {
    // Extends recommended rules from ESLint and TypeScript-ESLint
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // Specifies the files this configuration applies to
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      // Sets the ECMAScript version for parsing
      ecmaVersion: 2020,
      // Defines global variables available in the code (browser environment)
      globals: globals.browser,
    },
    plugins: {
      // Enables the React Hooks plugin
      "react-hooks": reactHooks,
      // Enables the React Refresh plugin
      "react-refresh": reactRefresh,
    },
    rules: {
      // Includes the recommended rules from the React Hooks plugin
      ...reactHooks.configs.recommended.rules,
      // Configures the React Refresh rule to warn if components aren't correctly exported
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Allows exporting constants alongside components
      ],
    },
  }
)
