export default {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    libraryTarget: 'umd',
    library: 'jQ',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'expose-loader?jQ!expose-loader?jQuery!babel-loader' },
    ],
  },
};
