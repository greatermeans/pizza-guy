console.log('START karma.conf.js')

var webpackConfig = require('./webpack-dev-server.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai', 'sinon', 'sinon-chai' ],
    files: [
      'node_modules/mockfirebase/browser/mockfirebase.js',
      'tests.webpack.js'
    ],
    plugins: [
      'karma-babel-preprocessor',
      'karma-chai',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sinon',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap'] //,'coverage' ]
    },
    //exclude: [ 'node_modules/**'],
    reporters: [ 'mocha' ], //, 'coverage' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    autoWatch: true
  });
};

console.log('END karma.conf.js')