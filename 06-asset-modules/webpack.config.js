const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',

        // 输出文件夹必须定义为绝对路径
        path: path.resolve(__dirname, 'dist'),

        // 打包前清理 dist 文件夹
        clean: true,

        // 自定义输出文件名
        assetModuleFilename: 'images/[contenthash][ext][query]'
    },

    // 开发模式
    mode: 'development',
    
    // 在开发模式下追踪代码
    devtool: 'inline-source-map',

    plugins: [
        // 实例化 html-webpack-plugin
        new HtmlWebpackPlugin({
            template: './index.html', // 打包生成的文件模板
            filename: 'app.html', // 打包生成的文件名称，默认为index.html
            inject: 'body' // 设置所有资源文件注入模板的位置。可以设置的值 true|'head'|'body'|false, 默认为true
            
        })
    ],

    // dev-server
    devServer: {
        static: './dist'
    },

    // 配置资源文件
    // asset/resource 发送一个单独的文件并导出 URL
    // asset/inline 导出一个资源的 data URI
    // asset/source 导出资源的源代码
    // asset 在导出一个资源的 data URI 和 发送一个单独的文件之剑自动选择
    // 小于8kb 的文件，将会视为inline 模块，否则视为resource
    module: {
        rules: [
            {
                test: /\.png/,
                type: 'asset/resource',


                // 优先级高于 assetModuelFilename
                generator: {
                    filename: 'images/[contenthash][ext][query]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
                generator: {
                    dataUrl: content => {
                        content = content.toString();
                        return svgToMiniDataURI(content);
                    }
                }
            },
            // 资源文件配置txt
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.jpg/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024// 4kb
                    }
                }

            }
        ]
    }
}