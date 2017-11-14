module.exports = require("@beisen/talent-ui-webpack-config")({
  entry: {
    main: "./example/index.js"
  },
  root: require("path").resolve(__dirname),
  // ,alias: {
  //   "react": "preact-compat",
  //   "react-dom": "preact-compat"
  // }
  transformInclude: [
    "es6.object.assign",
    "es6.promise",
    "es6.symbol",
    "es6.array.find",
    "es6.array.find-index",
    "es7.array.includes",
    "es7.object.values",
    "es6.number.is-nan",
    "es6.regexp.match",
    "es6.regexp.replace",
    "es6.regexp.search",
    "es6.regexp.split"
  ]
});
