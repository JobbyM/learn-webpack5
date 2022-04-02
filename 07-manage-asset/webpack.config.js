const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");
// 压缩CSS，并将CSS文件抽离成一个单独的文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩CSS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

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
            
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        }),
        new CssMinimizerPlugin()
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
            // {
            //     test: /\.txt/,
            //     type: 'asset/source'
            // },
            {
                test: /\.jpg/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024// 4kb
                    }
                }

            },
            // 使用loader 加载txt
            {
                test: /\.txt/,
                use: 'raw-loader'
            },
            // 使用loader 处理css
            // 模块loader 可以链式调用，链会逆序执行。
            // 第一个loader 将其结果（被转化后的资源）传递给下一个loader，
            // 以此类推。
            // 最后，webpack 期望链中的最后的loader 返回JavaScript
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            // 压缩css文件并抽离成单独文件
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // fonts 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
            // 自定义JSON模块parser
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    }
}