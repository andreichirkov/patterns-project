module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 2, { indentLogicalExpressions: true }],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", "tsx"] }],
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "warn",
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
    "no-underscore-dangle": "off"
  },
  globals: {
    __IS_DEV__: true
  }
}
