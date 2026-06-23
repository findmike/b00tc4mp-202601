import { data } from './data.js' 

// insert a user

data.insertUser({
    name: 'Michael Balo',
    email: 'michael.balo@example.com',
    username: 'michaelbalo',
    password: 'password123'
})

data.insertUser({
    name: 'Dani La',
    email: 'dani.la@example.com',
    username: 'daniela',
    password: 'password456'
})

// find a user by email


const userByEmail = data.findUserByEmail('michael.balo@example.com')
console.log(userByEmail)
// { name: 'Manuel Barzi', email: 'manuel.barzi@example.com', username: 'manuel', password: '123123123', id: 'ID8765902459775687' }

// find a user by username

const userByUsername = data.findUserByUsername('johndoe')
console.log(userByUsername)
// { name: 'John Doe', email: 'john.doe@example.com', username: 'johndoe', password: '123123123', id: 'ID7849513284636278' }

// find a user by id

const userById = data.findUserById('ID8765902459775687')
console.log(userById)
// { name: 'Manuel Barzi', email: 'manuel.barzi@example.com', username: 'manuel', password: '123123123', id: 'ID8765902459775687' }

// update a user's name

data.updateUserName('ID3177171518199474', 'Manuel Barzi Updated')