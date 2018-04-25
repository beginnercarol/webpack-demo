const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Autoprefixer = require('autoprefixer')();
module.exports = {
    entry:{
        app:'./src/index.js'
    },
    devtool:'inline-source-map',
    output:{
        filename:'[name].[chunkhash:8].bundle.js',
        path:path.resolve(__dirname,'src/dist')
    },
    module:{
        rules:[{
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
            use: [ MiniCssExtractPlugin.loader,'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: (loader) => [
                        Autoprefixer
                    ]
                }
            }, 'sass-loader']
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['app.*.css','app.*.css.map'],{
            root:path.join(__dirname,'/src/dist/'),
            exclude:'index.css',
            dry:false,
            verbose:true,
            watch:true
        }),
        new ExtractTextPlugin(
            '[name].[contenthash:8].css',
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './server/views/index.template.html'),
        }),
        
    ]
}