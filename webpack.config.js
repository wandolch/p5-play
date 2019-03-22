const path = require('path');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
          
                    }
                }]
            }
        ]
    }
};