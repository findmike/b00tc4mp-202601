import { logic } from './logic.js'
import { data } from './data.js'

/* PROBE 1:register user fails (already exists)

logic.registerUser('Michael Balo', 'michael.balo@example.com', 'michaelbalo', 'password123', 'password123')
throw error user already exists*/

/* PROBE 2:register new user

logic.registerUser('Lucia', 'lucia@example.com', 'lucia', 'password123', 'password123')
const userByEmail = data.findUserByEmail('lucia@example.com')
console.log(userByEmail)
{ name: 'Lucia', email: 'lucia@example.com' }*/

/* PROBE 3: authenticate user fails  
logic.authenticateUser('michaelbalo', 'wrongpassword')*/

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

/* PROBE 5: modify user name
logic.modifyUserName('ID3177171518199474', 'Mikey')
const userModified = data.findUserById('ID3177171518199474')
console.log(userModified)
// { name: 'Mikey'...

/* PROBE 6: modify user email
logic.modifyUserEmail('ID3177171518199474', 'mikey@example.com')
const emailModified = data.findUserById('ID3177171518199474')
console.log(emailModified)
// { email: 'mikey@example.com' } */

/* PROBE 7: modify user username
logic.modifyUserUsername('ID3177171518199474', 'mikey_updated')
const userUsernameModified = data.findUserById('ID3177171518199474')
console.log(userUsernameModified)
// { name: 'Michael Balo', email: 'michael.balo@example.com', username: 'mikey_updated', password: 'password123' }*/

// PROBE 8: modify user password

/* logic.modifyUserPassword('ID3177171518199474', '555888', '555777', '555777')
const userPasswordModified = data.findUserById('ID3177171518199474')
console.log(userPasswordModified) */
// { name: 'Michael Balo', email: 'michael.balo@example.com', username: 'michaelbalo', password: 'newpass789' }*/

// PROBE 9: delete user

logic.removeUser('ID3004214689521235', 'password456')
const userDeleted = data.findUserById('ID3004214689521235')
console.log(userDeleted)