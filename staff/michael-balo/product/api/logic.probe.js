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

/* PROBE 5: modify user name
logic.authenticateUser('michaelbalo', 'password123')
logic.modifyUserName('Michael Balo Updated')
const userAfterNameChange = data.findUserByEmail('michael.balo@example.com')
console.log(userAfterNameChange)
{ name: 'Michael Balo Updated', email: 'michael.balo@example.com', username: 'michaelbalo', password: 'password123' }*/

/* PROBE 6: modify user email
logic.authenticateUser('michaelbalo', 'password123')
logic.modifyUserEmail('m.balo@example.com')
const userAfterEmailChange = data.findUserById(data.getLoggedInUserId())
console.log(userAfterEmailChange)
{ name: 'Michael Balo', email: 'm.balo@example.com', username: 'michaelbalo', password: 'password123' }*/

/* PROBE 7: modify user password
logic.authenticateUser('michaelbalo', 'password123')
logic.modifyUserPassword('password123','newpass789','newpass789')
const userAfterPasswordChange = data.findUserById(data.getLoggedInUserId())
console.log(userAfterPasswordChange)
// { name: 'Michael Balo', email: 'michael.balo@example.com', username: 'michaelbalo', password: 'newpass789' }*/

// PROBE 8: modify user username

logic.authenticateUser('michaelbalo', 'newpass789')
logic.modifyUserUsername('michaelbalo_updated')
const userAfterUsernameChange = data.findUserById(data.getLoggedInUserId())
console.log(userAfterUsernameChange)

// { name: 'Michael Balo', email: 'michael.balo@example.com', username: 'michaelbalo_updated', password: 'password123' }*/
