//to be worked on --> transition from browserify to webpack --> dep. already in package.json

var webpack = require('webpack');

module.exports =  {
  entry: [
    './app/src/index.js'
  ],
  output: {
    path: "/dist/scripts/",
    publicPath: "/dist/",
    filename: "main.js"
  },
  // watch: true,
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
};
