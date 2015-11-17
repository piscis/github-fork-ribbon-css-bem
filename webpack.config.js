var babel = require('babel-core/register');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var Webpack = require('webpack');

var TARGET = process.env.npm_lifecycle_event;

if(TARGET === 'release') {
  module.exports = require('./webpack.config.production.js').default;
} else {

  console.log('RUNNING DEVELOP RUN');

  var config = require('./webpack.config.development.js').default;
  var host = '127.0.0.1';
  var port = 8080;
  var server = new WebpackDevServer(Webpack(config), config.devServer).listen(port, host, function(err) {

    if (err) {
      throw new Error('Plugin Error '+ err);
    }

    console.log('[webpack-dev-server]', 'http://' + host + ':' + port + '/');
  });


}