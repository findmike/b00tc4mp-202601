import { data } from './data.js'

// insert a user

/* data.insertUser({
    name: 'Torettoo',
    email: 'torettoo@example.com',
    username: 'torett00',
    password: 'password000'
}) 

.then ((user) => {
    console.log('User inserted', user)
})
.catch ((error) => {
    console.error('Error inserting user', error)
}) */

// find a user by email

/* data.findUserByEmail('torettoo@example.com')
.then(user => {
    console.log('User found by email:', user)
})
.catch(error => {
    console.error('Error finding user by email:', error)
})

*{ name: 'Torettoo', email: 'torettoo@example.com', username: 'torett00', password: 'password000', id: 'ID...' } */

// find a user by username

/* data.findUserByUsername('torett00')
.then(user => {
    console.log('User found by username:', user)
})
.catch(error => {
    console.error('Error finding user by username:', error)
})  */

// find a user by id

/*data.findUserById('ID4981009895937265')
    .then(user => {
        console.log('User found by id:', user)
    })
    .catch(error => {
        console.error('Error finding user by id:', error)
    })*/

// update a user's name

/* data.updateUserName('ID4981009895937265', 'Vin Diesel')
.then(user => {
    console.log('User name updated:', user)
})
.catch(error => {
    console.error('Error updating user name:', error)
}) */

// update user's email

/* data.updateUserEmail('ID4981009895937265', 'vin.diesel@example.com')
.then(user => {
    console.log('User name updated:', user)
})
.catch(error => {
    console.error('Error updating user name:', error)
}) */

// update user's password

/* data.updateUserPassword('ID4981009895937265', 'FamilyFirst')
.then(user => {
    console.log('User name updated:', user)
})
.catch(error => {
    console.error('Error updating user name:', error)
}) */

// update user's username

/* data.updateUserUsername('ID4981009895937265', 'Torett00')
.then(user => {
    console.log('User name updated:', user)
})
.catch(error => {
    console.error('Error updating user name:', error)
}) */

// delete user by id

/* data.deleteUserById('ID4981009895937265')
.then(user => {
    console.log('User deleted:', user)
})
.catch(error => {
    console.error('Error deleting user:', error)
}) */ 
