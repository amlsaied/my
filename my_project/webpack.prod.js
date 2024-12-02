const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/client/index.js", // ملف الإدخال
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // مجلد الإخراج
  },
  mode: "development", // وضع التطوير
  module: {
    rules: [
      {
        test: /\.js$/, // تحقق من الملفات ذات الامتداد .js
        exclude: /node_modules/, // استثناء مجلد node_modules
        loader: "babel-loader", // استخدم Babel لتحويل الكود
      },
    ],
  },


  
};
