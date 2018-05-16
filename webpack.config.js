const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
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
                        'react-hot-loader/babel',
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        ["babel-plugin-root-import", [{
                            "rootPathPrefix": "!",
                            "rootPathSuffix": "src/shared"
                        }]]
                    ]
                }
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: [".jsx", ".js", ".json", "*"],
    },
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        historyApiFallback: true,
        inline: true,
    }
};