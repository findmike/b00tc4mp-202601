import { logic } from './logic.js'
import { data } from './data.js'
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log('Connected to MongoDB with Mongoose')

        // PROBE 1:register user fails (already exists)

        // logic.registerUser('Michael Balo II', 'michael.balo2@example.com', 'michaelbaloII', 'password123', 'password123')
        //     .then(() => {
        //         console.log('User registered successfully')
        //     })
        //     .catch(error => {
        //         console.error('Error registering user:', error.message)
        //     })

        // PROBE 2: authenticate user fails

        // logic.authenticateUser('michaelbaloII', 'password123')
        //     .then((userId) => {
        //         console.log('User authenticated successfully', userId)
        //     })
        //     .catch(error => {
        //         console.error('Error authenticating user:', error.message)
        //     })


        // // // PROBE 4.1: get logged in user name succeeds
        // const userName = logic.getUserName('6ac7acd7cb0685e9345ebc3c')
        // .then((name) => {
        //     console.log('Logged in user name:', name)
        // })
        // .catch(error => {
        //     console.error('Error getting logged in user name:', error.message)
        // })



        // PROBE 5: modify user name

        // logic.modifyUserName('6ac7acd7cb0685e9345ebc3c', 'Michael Balo III')
        //     .then(() => {
        //         console.log('User name modified successfully')
        //     })
        //     .catch(error => {
        //         console.error('Error modifying user name:', error.message)
        //     })


        // PROBE 6: modify user email

        //  logic.modifyUserEmail('6ac7acd7cb0685e9345ebc3c', 'mikey@example.com')
        // .then(() => {
        //     console.log('User email modified successfully')
        // })
        // .catch(error => {
        //     console.error('Error modifying user email:', error.message)
        // })

        // PROBE 7: modify user username

        //  logic.modifyUserUsername('6ac7acd7cb0685e9345ebc3c', 'mikey_updated')
        // .then(() => {
        //     console.log('User username modified successfully')
        // })
        // .catch(error => {
        //     console.error('Error modifying user username:', error.message)
        // })

        // // PROBE 8: modify user password

        // logic.modifyUserPassword('6ac7acd7cb0685e9345ebc3c', 'password123', 'NewPassword123', 'NewPassword123')
        // .then(() => {
        //     console.log('User password modified successfully')
        // })
        // .catch(error => {
        //     console.error('Error modifying user password:', error.message)
        // })

        // PROBE 9: delete user

        // logic.removeUser('6ac7aa2288dce7e2d802ef54', 'securepassword')
        //     .then(() => {
        //         console.log('User deleted successfully')
        //     })
        //     .catch(error => {
        //         console.error('Error deleting user:', error.message)
        //     })

    })