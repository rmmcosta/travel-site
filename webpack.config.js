/*module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundle.js'
  }
};*/


const path = require("path");

module.exports = {
  entry: () => new Promise((resolve) => resolve(['./app/assets/scripts/App.js', './app/assets/scripts/TestWebpack.js'])),
  output: {
    path: path.resolve(__dirname,"./app/temp/scripts"),
    filename: "App.js"
  }
}