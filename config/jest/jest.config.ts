/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from "path"

export default {
  globals: {
    // Переменная должна назваться так же как в webpack, чтобы не было путаницы
    __IS_DEV__: true,
    __API__: '',
  },
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"
  ],
  rootDir: "../../",
  modulePaths: ["<rootDir>src"],
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx")
  }
}
