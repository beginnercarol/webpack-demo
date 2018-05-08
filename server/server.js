'use strict'
const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const json = require('koa-json');
const render = require('koa-views');
const serve = require('koa-static');
const cors = require('kcors');
const etag = require('koa-etag');
const compress = require('koa-compress');
const conditional = require('koa-conditional-get');
const bodyParser = require('koa-body');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const Route = require('koa-router');

const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

let router = new Router();
let app = new koa();
let routerConfig = require('./routes');

app.use(compress());
app.use(conditional());
app.use(etag());
app.use(cors());
app.use(json());
app.use(bodyParser({multipart:true}));

app.use(webpackDevMiddleware(compiler,{
    publicPath:webpackConfig.output.publicPath,
    historyApiFallback: true,
    compress: true,
    stats: "minimal",
    headers: { "X-Custom-Header": "yes" },
    port: 8079
}))

// serve files
app.use(serve(path.join(__dirname, '../')));
app.use(render(path.join(__dirname, "../")));

routerConfig(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen('8079',()=>{
    console.log('listening at port :8079');
})