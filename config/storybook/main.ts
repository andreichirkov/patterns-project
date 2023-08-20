module.exports = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript-plugin"
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
