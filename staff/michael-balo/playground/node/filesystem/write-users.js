const fs = require('fs');

const file = process.argv[2];
const userJSON = process.argv[3];

const usersJSON = fs.readFileSync(file).toString();

const users = JSON.parse(usersJSON);

const newUser = JSON.parse(userJSON);

users.push(newUser);

const usersJSON2 = JSON.stringify(users);

const json = fs.writeFileSync(file, usersJSON2);

