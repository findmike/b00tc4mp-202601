const fs = require('fs');

const file = process.argv[2];   
const text = process.argv[3];

const content = fs.writeFileSync(file, text);

console.log(content);