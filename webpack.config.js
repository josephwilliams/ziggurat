var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/ziggurat_app.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /.node$/,
        loader: "node-loader",
      },
      {
        test: /masonry-layout/,
        loader: 'imports?define=>false&this=>window'
      }
    ]
  },
  devtool: "source-maps"
};
