import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const environment = process.env.NODE_ENV || 'production';

const autoPrefixerCfg = 'autoprefixer-loader?{browsers:["last 10 version", "Firefox >= 15","ie >= 9"]}';
const sassLoaderCfg = `sass?indentedSyntax&precision=10&outputStyle=expanded&sourceMap=false&includePaths[]`;
const cssLoaderCfg = `css?importLoaders=1`;

const {version, homepage, license, author} = require('./package.json');
const banner =
`"Fork me on GitHub" CSS ribbon v${version} | ${license} License
Homepage: ${homepage}
Author: ${author}`;
const webpackConfig = {
  context: path.resolve(__dirname),
  debug: false,
  entry: {
    'gh-fork-ribbon-bem': [
      './src/gh-fork-ribbon-bem.js'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.sass', '.scss', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', `${cssLoaderCfg}!${autoPrefixerCfg}!${sassLoaderCfg}`)
      },
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.(html)$/,
        loader: 'file?name=[path][name].[ext]&context=./src'
      },

    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].min.css', { allChunks: true }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {
      warnings: false
    }, comments: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new webpack.BannerPlugin(banner)
  ]
};

export default webpackConfig;