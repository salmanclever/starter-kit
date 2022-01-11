const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("dotenv").config();


module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.ts",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body"
        })
    ],
    devServer: {
        port: process.env.PORT || 3000,
        open: true,
        hot: true
    }
}