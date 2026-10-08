import { data } from './data.js'

import { User } from './data/index.js'

export const logic = {
    registerUser: function (name, email, username, password, passwordRepeat) {
        if (name.trim() === '') throw new Error('name is empty')
        if (email.trim() === '') throw new Error('email is empty')
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')
        if (passwordRepeat.trim() === '') throw new Error('passwordRepeat is empty')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        return User.findOne({ email: email })
            .catch(error => { throw new Error('Error finding user by email: ' + error.message) })
            .then(user => {
                if (user) throw new Error('User with email already exists')

                return User.findOne({ username: username })
                    .catch(error => { throw new Error('Error finding user by username: ' + error.message) })
                    .then(user => {
                        if (user) throw new Error('user with username already exists')

                        user = {
                            name: name,
                            email: email,
                            username: username,
                            password: password
                        }

                        return User.create(user)
                            .catch(error => { throw new Error('Error inserting user: ' + error.message) })
                            .then(() => { })
                    })
            })
    },

    authenticateUser: function (username, password) {
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')

        return User.findOne({ username: username })
            .catch(error => { throw new Error('Error finding user by username: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                if (user.password !== password) throw new Error('wrong password')

                return user.id
            })
    },

    getUserName: function (userId) {
        if (userId.trim() === '') throw new Error('userId is empty')

        return User.findById(userId)
            .catch(error => { throw new Error('Error finding user by ID: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                return user.name
            })
    },

    modifyUserName: function (userId, name) {
        if (userId.trim() === '') throw new Error('userId is empty')
        if (name.trim() === '') throw new Error('name is empty')

        return User.findById(userId)
            .catch(error => { throw new Error('Error finding user by ID: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                return User.findByIdAndUpdate(userId, { name: name })
                    .catch(error => { throw new Error('Error updating user name: ' + error.message) })
                    .then(() => { })
            })
    },

    modifyUserEmail: function (userId, email) {
        if (userId.trim() === '') throw new Error('userId is empty')
        if (email.trim() === '') throw new Error('email is empty')

        return User.findById(userId)
            .catch(error => { throw new Error('Error finding user by ID: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                return User.findByIdAndUpdate(userId, { email: email })
                    .catch(error => { throw new Error('Error updating user email: ' + error.message) })
                    .then(() => { })
                    .catch(error => { throw new Error('Error updating user email: ' + error.message) })
                    .then(() => { })
            })
    },

    modifyUserUsername: function (userId, username) {
        if (userId.trim() === '') throw new Error('userId is empty')
        if (username.trim() === '') throw new Error('username is empty')

        return User.findById(userId)
            .catch(error => { throw new Error('Error finding user by ID: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                return User.findByIdAndUpdate(userId, { username: username })
                    .catch(error => { throw new Error('Error updating user username: ' + error.message) })
                    .then(() => { })
            })
    },

    modifyUserPassword: function (userId, password, newPassword, newPasswordRepeat) {

        if (password.trim() === '') throw new Error('password is empty')
        if (newPassword.trim() === '') throw new Error('new password is empty')
        if (newPasswordRepeat.trim() === '') throw new Error('new password repeat is empty')
        if (newPassword !== newPasswordRepeat) throw new Error('new passwords do not match')

        return User.findById(userId)
            .catch(error => { throw new Error('Error finding user by ID: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                if (user.password !== password) throw new Error('wrong password')

                return User.findByIdAndUpdate(userId, { password: newPassword })
                    .catch(error => { throw new Error('Error updating user password: ' + error.message) })
                    .then(() => { })
            })
    },

    removeUser: function (userId, password) {
        if (userId.trim() === '') throw new Error('userId is empty')
        if (password.trim() === '') throw new Error('password is empty')

        return User.findById(userId)
            .catch(error => { throw new Error('Error finding user by ID: ' + error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                if (user.password !== password) throw new Error('wrong password')

                return User.findByIdAndDelete(userId)
                    .catch(error => { throw new Error('Error deleting user: ' + error.message) })
                    .then(() => { })
            })

    },
}