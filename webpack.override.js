var webpack = require('webpack');
module.exports = (config, { env }) => {
    return {
        ...config,
        plugins: [
            ...(config.plugins || []),
            new webpack.ProvidePlugin({
                'React': 'react'
            })
        ]
    }
};
