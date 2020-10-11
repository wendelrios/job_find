import path from 'path';
import fs from 'fs';

module.exports = app => {
  fs.readdirSync(__dirname)
  .filter(file => ((file.indexOf('.')!==0) && (file!=='index.js')))
  .forEach(file => require(path.join(__dirname, file))(app))
}
