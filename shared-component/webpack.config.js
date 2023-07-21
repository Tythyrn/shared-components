const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'shared-component.js',
    library: 'SharedComponent',
    libraryTarget: 'umd',
    globalObject: 'this', // Add this option to fix "window is not defined" issue in Node.js
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      // Specify the Preact alias for React in order to dynamically import the correct createElement function
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
};