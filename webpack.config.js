const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      state: path.resolve(__dirname, 'src/state')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  }
};
