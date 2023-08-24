module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "plugin:i18next/recommended", "airbnb"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}", "**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off"
      },
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 2, { indentLogicalExpressions: true }],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", "tsx"] }],
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn", // можно поставить off
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": "off",
    semi: "off",
    quotes: ["warn", "double"],
    "jsx-closing-bracket-location": "off",
    "react/jsx-closing-bracket-location": "off",
    "arrow-parens": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to"]
      }
    ],
    "max-len": ["error", {
      ignoreComments: true,
      code: 100
    }],
    "no-console": "off",
    "object-curly-newline": "off",
  },
  globals: {
    __IS_DEV__: true
  }
}
