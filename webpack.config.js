const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        target: 'electron-main',
        entry: {
            app: './app/index.ts',
        },
        node: {
            __dirname: false,
            __filename: false,
        },
        module: {
            rules: [
                {
                    test: /\.node$/,
                    use: [
                        {
                            loader: 'native-ext-loader',
                            options: {},
                        },
                    ],
                },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader', // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, '.'),
        },
        watch: true,
        externals: nodeExternals(),
    },

    {
        target: 'electron-renderer',
        entry: {
            server: './src/typescript/index.ts',
        },
        node: {
            __dirname: false,
            __filename: false,
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader', // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'index.bundle.js',
            path: path.resolve(__dirname, 'public'),
        },
        watch: true,
        externals: nodeExternals(),
    },
];
