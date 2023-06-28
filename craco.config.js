const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        baaseUrl: "./",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
