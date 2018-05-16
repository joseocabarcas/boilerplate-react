const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/App.jsx',
        './src/shared/styles/app.scss',
    ],
    output: {
        filename: './assets/js/bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        ["es2015", {"modules": false}],
                        'stage-1'
                    ],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        ["babel-plugin-root-import", [{
                            "rootPathPrefix": "@",
                            "rootPathSuffix": "src/react"
                        }, {
                            "rootPathPrefix": "#",
                            "rootPathSuffix": "src/react/stores"
                        }, {
                            "rootPathPrefix": "~",
                            "rootPathSuffix": "src/react/elements"
                        }]]
                    ]
                }
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            minimize: true,
            comments: false,
        }),

        new ExtractTextPlugin({
            filename: './assets/css/styles.css',
            allChunks: true
        })
    ],
    resolve: {
        extensions: [".jsx", ".js", ".json", "*"],
    },
};