const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin=require('mini-css-extract-plugin')
const optimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin')
const terserPlugin=require("terser-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    optimization:{
     minimizer:[new terserPlugin({}),new optimizeCssAssetsPlugin({})]
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ miniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new miniCssExtractPlugin({filename:"[name].css"}),
        new WorkboxPlugin.GenerateSW()
    ]
}
