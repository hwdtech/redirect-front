module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './static/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'react' ] }
      },
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint-loader'
    // },
    ]
  },
  //watch: true, //for dev
  watchOptions: {
    aggregateTimeout: 100
  }
};