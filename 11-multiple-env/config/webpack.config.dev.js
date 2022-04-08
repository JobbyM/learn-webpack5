module.exports = {
    // 开发环境下不需要配置缓存
    output: {
        filename: 'scripts/[name].js',
    },

    // 开发模式
    mode: 'development',

    // 配置source-map
    devtool: 'inline-source-map',

    // 本地服务配置
    devServer: {
        static: './dist'
    }
}