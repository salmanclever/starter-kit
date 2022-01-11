

module.exports = function config(env) {
    


    const commonConfig = {
        mode: "development",
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html',
                inject: 'body',
                hash: true,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                }
            })
        ]
    }

    return commonConfig;
}