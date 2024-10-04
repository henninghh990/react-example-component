const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
    library: 'MyComponent', 
    libraryTarget: 'umd', 
    clean: true, 
  },
  mode: 'development', 
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    port: 3000, 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/, 
        use: [
          'style-loader',
          'css-loader',   
          'sass-loader', 
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
