const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    externals: {},
    amd: {
      toUrlUndefined: true,
    },
    module: {
      unknownContextCritical: false,
    },
    plugins: [],
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
    },
  },
};
