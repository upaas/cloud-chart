const path = require("path");
const appRoot = path.resolve(__dirname);
module.exports = require('@beisen/talent-ui-jest-utils')({
    root: appRoot,
});