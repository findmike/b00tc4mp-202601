const fs = require('fs');

const file = process.argv[2];

const content = fs.readFileSync(file).toString();

console.log(content);
