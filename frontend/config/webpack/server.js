const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*

 test: /\.css$/,
 use: [ 'style-loader', 'css-loader?modules', ],
 */

module.exports = {
    context: resolve(__dirname, '../../src'),

    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:9090',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './app.js'
        // the entry point of our app
    ],

    output: {
        path: resolve(__dirname, '../../dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
        sourceMapFilename: '[name].map'
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(ttf|svg|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },
        ],
        loaders: [
            {
                test: /\.css$/,
              loader: "style-loader!css-loader"
            }
          ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new HtmlWebpackPlugin({
            template: '../public/index.html',
            chunksSortMode: 'dependency'
        })
    ],
};
