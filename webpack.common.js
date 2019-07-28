
/**
 * Common Webpack configuration for the server- as well as the client side. 
 */
module.exports = {
  mode: 'development',
  stats: {
    colors: true,
    reasons: false,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}