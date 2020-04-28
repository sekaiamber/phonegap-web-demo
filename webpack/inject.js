const fs = require('fs');

const js = fs.readFileSync('./dist/inject.js').toString();
const css = fs.readFileSync('./dist/inject.css').toString();

const json = {
  js, css,
};

fs.writeFileSync('./dist/inject.json', JSON.stringify(json));

