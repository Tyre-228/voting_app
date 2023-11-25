const path = require('path')
module.exports = {
    entry: './src/app.js',
    devtool: 'inline-source-map',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public/assets/compiledJS"),
        clean: true,
    }
};