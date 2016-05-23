

const config ={
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
  devtools: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;