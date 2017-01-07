var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: './src/js/App.js',
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },{
                test: /\.jsx$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: [/node_modules/]
            },{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" }

        ]
    },
    plugins: [
		new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]
}