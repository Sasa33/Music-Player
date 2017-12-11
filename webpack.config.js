require("babel-polyfill");

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry:['webpack-hot-middleware/client?reload=true', 'babel-polyfill', path.resolve(__dirname, './client/index.js')],
    output: {
        publicPath: 'http://127.0.0.1:3000/',
        path: __dirname + "/public",
        filename: 'js/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',//es6转es5
            query: {
                presets: ['es2015','react']
            }
        }, {
            test: /\.js?$/,
            exclude: /node_modules/, 
            loader: 'babel-loader',//es6转es5
            query: {
                presets: ['es2015','react']
            }
        },{
            test: /\.css$/, 
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:[
                    'css-loader','less-loader'
                ]
            })
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/main.css'),
        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
