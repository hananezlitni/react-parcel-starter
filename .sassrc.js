const path = require("path");
const cwd = process.cwd();

module.exports = {
  data: '@import "src/styles/variables.scss";',
  includePaths: [path.resolve(cwd, "static", "scss")],
};
