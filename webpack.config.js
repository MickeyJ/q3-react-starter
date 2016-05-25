
const config = {
  entry: './src',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

module.exports = config;