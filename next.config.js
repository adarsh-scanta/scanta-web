/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // modifyVars: { '@primary-color': '#04f' }, // optional
  lessVarsFilePath: "./src/styles/variables.less", // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: "local",
    localIdentName: "[hash:base64:8]",
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents:
      true |
      {
        // Enabled by default in development, disabled in production to reduce file size,
        // setting this will override the default for all environments.
        //   displayName?: boolean,
        // Enabled by default.
        ssr: true,
        // Enabled by default.
        //   fileName?: boolean,
        // Empty by default.
        //   topLevelImportPaths?: string[],
        // Defaults to ["index"].
        //   meaninglessFileNames?: string[],
        // Enabled by default.
        //   cssProp?: boolean,
        // Empty by default.
        //   namespace?: string,
        // Not supported yet.
        //   minify?: boolean,
        // Not supported yet.
        //   transpileTemplateLiterals?: boolean,
        // Not supported yet.
        //   pure?: boolean,
      },
  },

  webpack(config) {
    return config;
  },
});
