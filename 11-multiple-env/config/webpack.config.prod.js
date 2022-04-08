const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    
    // 生产环境需要缓存
    output: {
        filename: 'scripts/[name].[contenthash].js',
        publicPath: 'http://localhost:8081/'
    },

    // 生产环境模式
    mode: 'production',


    // 生产环境 css 压缩
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
}

