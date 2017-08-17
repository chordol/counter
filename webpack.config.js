var path = require('path');
module.exports = {
    devtool: "eval-source-map",
    entry: "./client/app.js",
    output: {
        path: path.join(__dirname, 'public', 'javascripts'),
        filename: "app.js",
        publicPath: '/javascripts/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
