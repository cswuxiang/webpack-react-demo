const path = require("path");
const DemoPlugin = require("./plugins/DemoPlugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [

        {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',  // Remove this if you're not using JSX
          target: 'es2020'  // Syntax to compile to (see options below for possible values)
        }
      },
       {
        test: /\.jsx$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',  // Remove this if you're not using JSX
          target: 'es2020'  // Syntax to compile to (see options below for possible values)
        }
      },
       {
       test: /\.tsx?$/,
         loader: 'esbuild-loader',
         options: {
           loader: 'tsx',  // Or 'ts' if you don't need tsx
           target: 'es2020'
         }       },
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: "babel-loader"
    //     }
    //   }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3000,
    publicPath: "/build/",
    open: true,
    overlay: true
  },
   plugins: [
    new DemoPlugin.DemoPlugin({
      name: 'Jay'
    })
  ]
};
