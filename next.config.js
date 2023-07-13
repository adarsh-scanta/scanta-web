/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
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
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  redirects() {
    return [
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/departments",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demorequest",
        destination: "/request-demo",
        permanent: true,
      },
      {
        source: "/blog/post/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
      {
        source: "/press.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/avatars",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ml-security",
        destination: "/",
        permanent: true,
      },
      {
        source: "/arvr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/scanta/EndUserLicenseAgreement.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/EndUserLicenseAgreement.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/icon",
        destination: "/",
        permanent: true,
      },
      {
        source: "/q2-2-png",
        destination: "/",
        permanent: true,
      },
      {
        source: "/press",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/company#Our-Team",
        permanent: true,
      },
      {
        source: "/under-construction",
        destination: "/",
        permanent: true,
      },
      {
        source: "/va-shield",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cropped-logo-png",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ardunk/privacypolicy.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/512x512bb",
        destination: "/",
        permanent: true,
      },
      {
        source: "/polygoons",
        destination: "/",
        permanent: true,
      },
      {
        source: "/logo_06",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/attacks",
        destination: "/",
        permanent: true,
      },
      {
        source: "/press",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "/request-demo",
        permanent: true,
      },
      {
        source: "/blog/using-passive-listening-to-measure-morale",
        destination: "/blog/employee-morale",
        permanent: true,
      },
      {
        source:
          "/blog/how-employee-insights-software-can-help-you-improve-your-company-culture",
        destination: "/blog/employee-insights-software",
        permanent: true,
      },
    ];
  },

  webpack(config) {
    return config;
  },
});
