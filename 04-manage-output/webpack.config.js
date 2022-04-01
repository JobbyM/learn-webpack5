const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',

        // 输出文件夹必须定义为绝对路径
        path: path.resolve(__dirname, 'dist'),

        // 打包前清理 dist 文件夹
        clean: true
    },

    mode: 'none',

    plugins: [
        // 实例化 html-webpack-plugin
        new HtmlWebpackPlugin({
            template: './index.html', // 打包生成的文件模板
            filename: 'app.html', // 打包生成的文件名称，默认为index.html
            inject: 'body' // 设置所有资源文件注入模板的位置。可以设置的值 true|'head'|'body'|false, 默认为true
            
        })
    ]
}