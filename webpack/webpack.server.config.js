const path = require('path');
const extract = require('mini-css-extract-plugin')
const webpack = require('webpack');

const config = {
  entry: ["@babel/polyfill", path.resolve(__dirname, '../source/server.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'server.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/(node_modules)/",
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [extract.loader, "css-loader?modules=true&localIdentName=[hash:base64:15]"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new extract({
      filename: "style.css"
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      BASE: JSON.stringify(process.env.NODE_ENV === 'production' ? 'https://tvmaze-ssr.now.sh' : 'http://localhost:3000'),
    })
  ],
  target: 'node',
}


module.exports = config;
