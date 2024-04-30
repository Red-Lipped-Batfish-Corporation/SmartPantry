const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/, 
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader' 
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ],
  devServer: {
    historyApiFallback: false,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    open: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

//  @Author: Abel xabelpenguin@gmail.com donated this code
// @Date: 2024-04-27 5:40 pm
// @Last Modified by:Abel xabelpenguin@gmail.com
// @Last Modified time: 2024-04-27 10:30 PM 

