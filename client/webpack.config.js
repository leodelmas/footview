const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3000,
        proxy: { "/api/**": { target: 'http://localhost:3001', secure: false }}
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
                    { 
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [ require('autoprefixer') ];
                                }
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
        ]
    }
};