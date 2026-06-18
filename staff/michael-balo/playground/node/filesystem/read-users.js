const fs = require('fs');

const file = process.argv[2];

const json = fs.readFileSync(file).toString();

// para convertir JSON a {} utilizamos JSON.parse:

const users = JSON.parse(json);

console.log(users);
