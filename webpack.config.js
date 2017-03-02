var path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src') + '/app/js/index.js',

    output: {
        path: path.resolve(__dirname,'dist') + '/app',
        filename: 'bundle.min.js',
        publicPath: '/app/'
    },

    module: {
        loaders:[
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
//            {
//                test: /\.js$/,
//                loaders: ['babel'],
//                exclude: /node_modules/
//            },
//            {
//                test: /\.scss/,
//                loader: 'style-loader!css-loader!sass-loader'
//            }
        ]
    }
};
