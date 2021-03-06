const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')
const NotifierPlugin = require('webpack-notifier')
const merge = require('webpack-merge')
const loaderConfig = require('./webpack.loader.config.js')
const { publicPath, alwaysNotify } = require('../config.js')

const config = merge(loaderConfig, {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: {
    'client-bundle': ['@babel/polyfill', join(__dirname, '../src/', 'index.js')]
  },
  output: {
    filename: '[name].js',
    path: join(__dirname, '../dist'),
    publicPath
  },
  performance: {
    hints: false
  },
  resolve: {},
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(__dirname, '../index.html')
    }),
    new NotifierPlugin({
      title: '编译完成...',
      alwaysNotify,
      contentImage: join(__dirname, '../logo.png')
    })
  ]
})

module.exports = config
