'use strict'
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = new express();
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler,{
    publicPath:webpackConfig.output.publicPath
}))

app.listen('8079',function(){
    console.log('listening at port :8079');
})