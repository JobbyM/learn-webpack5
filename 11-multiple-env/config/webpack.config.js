const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common.js')

const productionConfig = require('./webpack.config.prod.js')

const developmentConfig = require('./webpack.config.dev.js')

module.exports = (env) => {
    console.log('env')
    console.log(env)
    console.log('env.development')
    console.log(env.development)
    console.log('env.production')
    console.log(env.production)
    switch(true) {
        case env.development:
            return merge(commonConfig, developmentConfig)
        case env.production:
            return merge(commonConfig, productionConfig)
        default:
            throw new Error('No matching configuration was found!')
    }
}