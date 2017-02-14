// Webpack builds/instantiates the app locally, so we must add CICD config support to both webpack config files
require('dotenv').config({path: './config.env'});

const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const testPath = path.resolve(__dirname, 'test');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {

  // resolves webpack + dotenv issue
  node: {
    fs: "empty"
  },

  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'),
  ],
  // Server Configuration options
  devServer: {
    contentBase: 'src/www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: process.env.PORT || 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server,
    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
  },
  plugins: [
    // CICD support for dynamically setting process variables to represent the environment config
    new webpack.DefinePlugin({
      'process.env' : JSON.stringify({
        BACKEND_SERVICE_BASE_URL: process.env.BACKEND_SERVICE_BASE_URL,
        PROJECT_ID: process.env.PROJECT_ID,
        PROJECT_ID_FOR_BUCKET: process.env.PROJECT_ID_FOR_BUCKET,
        API_KEY: process.env.API_KEY,
        GOOGLE_SCOPES: process.env.GOOGLE_SCOPES,
      })
    }),
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['eslint'],
        exclude: [ nodeModulesPath, testPath ],
      }
    ],
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.(png|jpg)$/,
        loaders: ['url-loader']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
  },
};

module.exports = config;
