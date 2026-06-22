const fs = require('fs');

const file = process.argv[2];
const userJSON = process.argv[3];

let usersJSON = fs.readFileSync(file).toString(); // en lugar de toString, también puedes poner fs.reafFileSync(file, 'utf-8') para que te devuelva un string directamente

const users = JSON.parse(usersJSON);

const newUser = JSON.parse(userJSON);

users.push(newUser);

usersJSON = JSON.stringify(users, null, 2);

const json = fs.writeFileSync(file, usersJSON);
