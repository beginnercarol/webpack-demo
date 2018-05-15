const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const Autoprefixer = require('autoprefixer')();
module.exports = {
    // mode: 'development',
    node: {
        __dirname: false
    },
    entry:{
        app:path.join(__dirname,'/src/index.js'),
    },
    devtool:'inline-source-map',
    output:{
        filename:'[name].[chunkhash:8].bundle.js',
        path:path.join(__dirname,'/src/dist')
    },
    module:{
        rules:[
            {
                test: /\.tsx?$|\.ts?$/,
                include:path.join(__dirname,'/src'),
                use: 'ts-loader',
            }, {
                test: /\.js$/,
                include:path.join(__dirname,'/src'),
                use: [{
                    loader: 'happypack/loader'
                }]
            }, 
            
        {
            test:/\.(js|jsx)$/,
            include:path.join(__dirname,'/src'),
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['react','babel-preset-env'],
                }
            }
        },{
            test:/\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [ 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            Autoprefixer
                        ]
                    }
                }, 'sass-loader']
              })
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'url-loader'
            ]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
        }]
    },
    plugins:[
        // new CleanWebpackPlugin(['dist/'],{
        //     root:path.join(__dirname,'/src/dist'),
        //     // exclude:'index.css',
        //     dry:false,
        //     verbose:true,
        //     watch:true
        // }),
        new ExtractTextPlugin(
            '[name].[contenthash:8].css',
        ),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "[name].[chunkhash:8].css",
        //     chunkFilename: "[id].css"
        //   }),
        new HtmlWebpackPlugin({
            title: 'app',
            filename: 'index.html',
            template: path.join(__dirname, './server/views/index.template.html'),
        }),
        // new HtmlWebpackPlugin({
        //     title: 'mob',
        //     filename: 'mob.html',
        //     template: path.join(__dirname, './server/views/mob.template.html'),
        // }),
        new HappyPack({
            loaders: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            "env",
                            {
                                "modules": false
                            }
                        ],
                        "stage-0",
                        "react"
                    ],
                   
                    cacheDirectory: true,
                }
            }],
            threads: 4
        }),
        
    ]
}