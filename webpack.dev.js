const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    https: true,
    http2: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    liveReload: true,
  },
  plugins: [new MiniCssExtractPlugin()],
});
