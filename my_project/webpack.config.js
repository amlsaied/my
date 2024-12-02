const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Import the plugin for extracting CSS
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // إعدادات تانية...
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/service-worker.js', to: 'service-worker.js' }, // تأكد إن المسار هنا صحيح
            ],
        }),
    ],
    // باقي الإعدادات...
};

//

module.exports = {
  entry: "./src/client/index.js", // الملف الرئيسي
  output: {
    filename: "bundle.js", // اسم ملف الخرج
    path: path.resolve(__dirname, "dist"), // مسار الملف النهائي
    libraryTarget: "var", // تصدير الكود كمتغير
    library: "Client", // اسم المتغير الذي سيحتوي على الكود
    clean: true, // تنظيف المجلد قبل إعادة البناء
  },
  mode: "development", // يمكنك تغييره إلى "production" للإصدار النهائي


  // Plugins section
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html', // Template HTML file
      filename: './index.html', // Output HTML file name
    }),
    new MiniCssExtractPlugin({ // Add MiniCssExtractPlugin for production CSS extraction
      filename: '[name].css', // Extracted CSS file name
    }),  new CleanWebpackPlugin({
        dry: true,
        verbose: true,
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: 'src/client/service-worker.js', to: 'service-worker.js' }, // تأكد إن المسار هنا صحيح
        ],
    }),
  ],

  mode: "development", // Development mode (for debugging)
  devtool: 'source-map', // Generate source maps for easier debugging

  module: {
    rules: [
      {
        // JavaScript file processing with Babel
        test: /\.js$/, // Check for .js files
        exclude: /node_modules/, // Exclude node_modules folder from Babel processing
        loader: "babel-loader", // Use Babel to transpile JavaScript
      },
      {
        // SCSS and CSS file processing
        test: /\.s[ac].ss$/i, // Target .scss and .sass files
        use: [
          process.env.NODE_ENV === 'production' // Conditionally use extract plugin in production
            ? MiniCssExtractPlugin.loader
            : 'style-loader', // Use style-loader in development for faster updates
          'css-loader',   // Load the CSS files
          'sass-loader',  // Compile SCSS to CSS
        ],
      },
      {
        // Regular CSS file processing
        test: /\.css$/i, // Target .css files
        use: [
          process.env.NODE_ENV === 'production' // Conditionally use extract plugin in production
            ? MiniCssExtractPlugin.loader
            : 'style-loader', // Use style-loader in development for faster updates
          'css-loader', // Load the CSS files
        ],
      },
    ],
 },
};