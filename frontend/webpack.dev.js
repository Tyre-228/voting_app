const path = require('path')
const common = require('./webpack.common.js')
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        compress: true,
        devMiddleware: {
            index: true,
            mimeTypes: { phtml: 'text/html' },
            publicPath: '/publicPathForDevServe',
            serverSideRender: true,
            writeToDisk: true,
        },
  },
});