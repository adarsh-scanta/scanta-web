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
  reactStrictMode: true,
  swcMinify:false,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },

  webpack(config) {
    return config;
  },
});
