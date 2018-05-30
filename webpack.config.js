module.exports = {
  entry: {
    index: "./public/scripts/titanic.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
}
}
