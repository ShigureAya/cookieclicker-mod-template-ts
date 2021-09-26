const path = require('path');
const modName = require('./package.json').modName;

const CopyPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: path.join(__dirname, 'src/main.ts'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist', modName)
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {from: path.join(__dirname, 'static'), to: path.join(__dirname, 'dist', modName)},
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};