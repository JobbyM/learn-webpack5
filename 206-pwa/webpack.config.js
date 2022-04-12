const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: '[name].bundle.js',

        // 输出文件夹必须定义为绝对路径
        path: path.resolve(__dirname, 'dist'),

        // 打包前清理 dist 文件夹
        clean: true,
    },

    mode: 'none',

    devServer: {
        devMiddleware: {
            index: true,
            writeToDisk: true,
        }
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new workboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true,
        })
    ]

}