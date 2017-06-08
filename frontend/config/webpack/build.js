const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, '../../src'),

    entry:[
      './app.js',
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:9090',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch'
    ],
    output: {
        path: resolve(__dirname, '../../dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
        sourceMapFilename: '[name].map'
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
                use: [ 'style-loader', 'css-loader?modules', ],
            },
            {
                test: /\.(ttf|svg|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },
        ],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ],
};
