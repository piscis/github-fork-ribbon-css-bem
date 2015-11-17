import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const environment = process.env.NODE_ENV || 'development';

const autoPrefixerCfg = 'autoprefixer-loader?{browsers:["last 10 version", "Firefox >= 15","ie >= 9"]}';
const sassLoaderCfg = `sass?indentedSyntax&precision=10&outputStyle=expanded&sourceMap=true&includePaths[]`;
const cssLoaderCfg = `css?sourceMap&importLoaders=1`;

const webpackConfig = {
  context: path.resolve(__dirname),
  debug: true,
  devtool: 'source-map',
  entry: {
    'gh-fork-ribbon-bem': [
      './src/gh-fork-ribbon-bem.js'
    ]
  },
  output: {
    path: path.resolve('./build'),
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    publicPath: '/',
    contentBase: `${__dirname}/build/`,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watchOptions: {
      aggregateTimeout: 1500,
      poll: 1000
    },
    inline: true,
    hot: false,
    stats: {
      colors: true,
      progress: true
    }
  }
};

export default webpackConfig;
