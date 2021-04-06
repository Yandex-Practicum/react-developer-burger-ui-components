module.exports = function (api) {
    api.cache(true);
    var babelPlugins = [
        '@babel/plugin-transform-runtime',
        [
            'babel-plugin-typescript-to-proptypes',
            { implicitChildren: true, maxDepth: 5, maxSize: 30 },
        ],
        '@babel/plugin-transform-typescript',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-react-display-name',
        'babel-plugin-transform-object-assign',
        'babel-plugin-add-react-displayname',
    ];

    var babelPresets = [
        [
            '@babel/preset-env',
            {
                targets: '> 0.5%, last 2 versions, ie 10',
                useBuiltIns: 'usage',
                corejs: '3.1.3',
            },
        ],
        ['@babel/preset-typescript'],
        '@babel/preset-react',
    ];
    return {
        presets: babelPresets,
        plugins: babelPlugins,
        compact: true,
    };
};
