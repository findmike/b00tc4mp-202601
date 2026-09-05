import { logic } from './logic.js'
import { data } from './data.js'

// PROBE 1:register user fails (already exists)

// logic.registerUser('Michael Balo II', 'michael.balo2@example.com', 'michaelbaloII', 'password123', 'password123')
//     .then(() => {
//         console.log('User registered successfully')
//     })
//     .catch(error => {
//         console.error('Error registering user:', error.message)
//     })

// PROBE 2: authenticate user fails

// logic.authenticateUser('daniela', 'password456')
//     .then((userId) => {
//         console.log('User authenticated successfully', userId)
//     })
//     .catch(error => {
//         console.error('Error authenticating user:', error.message)
//     })

/* PROBE 4: authenticate user succeeds
const userId = logic.authenticateUser('michaelbalo', 'password123')
console.log(userId)
return: ID317...*/

/* PROBE 4.1: get logged in user name succeeds
const userName = logic.getLoggedInUserName('ID3177171518199474')
console.log(userName)
// return: Michael Balo */

/* PROBE 4.2: get logged in user name fails
const userName = logic.getLoggedInUserName('ID3177171518199479')
console.log(userName)
// return: Error: user not found */

// PROBE 5: modify user name

// logic.modifyUserName('ID5217957932078049', 'Mike Balo')
//     .then(() => {
//         console.log('User name modified successfully')
//     })
//     .catch(error => {
//         console.error('Error modifying user name:', error.message)
//     })


// PROBE 6: modify user email

/* logic.modifyUserEmail('ID5217957932078041', 'mikey@example.com')
.then(() => {
    console.log('User email modified successfully')
})
.catch(error => {
    console.error('Error modifying user email:', error.message)
}) */

// PROBE 7: modify user username

/* logic.modifyUserUsername('ID5217957932078041', 'mikey_updated')
.then(() => {
    console.log('User username modified successfully')
})
.catch(error => {
    console.error('Error modifying user username:', error.message)
}) */

// PROBE 8: modify user password

/* logic.modifyUserPassword('ID5217957932078041', 'password123', '111222', '111222')
.then(() => {
    console.log('User password modified successfully')
})
.catch(error => {
    console.error('Error modifying user password:', error.message)
}) */

// PROBE 9: delete user

/* logic.removeUser('ID3004214689521235', 'password456')
    .then(() => {
        console.log('User deleted successfully')
    })
    .catch(error => {
        console.error('Error deleting user:', error.message)
    }) */