const path = require('path')
const cracoLessPlugin = require('craco-less')

module.exports = {
    style: {
        postcss: {
            mode: "extends",
            loaderOptions: {
                postcssOptions: {
                    ident: "postcss",
                    plugins: [
                        ['postcss-pxtorem', {
                            rootValue: 16,
                            propList: ['*'],
                            replace: true,
                            mediaQuery: false,
                            minPixelValue: 0,
                        }]
                    ],
                }
            }
        }

    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        {
            plugin: cracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            }
        }, {
            plugin: require("craco-cesium")()
        }
    ]
}