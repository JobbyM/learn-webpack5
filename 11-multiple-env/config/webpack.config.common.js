const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },

    output: {
        // 注意这个dist 的路径设置成上一级
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.jpg$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/i,
                use: 'xml-loader'
            },
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
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime'
                            ]
                        ]
                    }
                }
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    // 关闭 webpack 的性能提示
    performance: {
        hints: false
    }
}

