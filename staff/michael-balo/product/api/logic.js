import { data } from './data.js'

export const logic = {
    registerUser: function (name, email, username, password, passwordRepeat) {

        if (name.trim() === '') throw new Error('name is empty')
        if (email.trim() === '') throw new Error('email is empty')
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')
        if (passwordRepeat.trim() === '') throw new Error('passwordRepeat is empty')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        let user = data.findUserByEmail(email)

        if (user) throw new Error('User with email already exists')

        user = data.findUserByUsername(username)

        if (user) throw new Error('user with username already exists')

        user = {
            name: name,
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    },

    authenticateUser: function (username, password) {

        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')

        const user = data.findUserByUsername(username)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong password')

        data.setLoggedInUserId(user.id)

        return user.id
    },

    getLoggedInUserName: function (userId) {
        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        return user.name
    },

    modifyUserName: function (userId, name) {
        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        data.updateUserName(userId, name)
    },

    modifyUserEmail: function (userId, email) {
        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        data.updateUserEmail(userId, email)
    },

    modifyUserUsername: function (userId, username) {
        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        data.updateUserUsername(userId, username)
    },

    modifyUserPassword: function (userId, password, newPassword, newPasswordRepeat) {

        if (password.trim() === '') throw new Error('password is empty')
        if (newPassword.trim() === '') throw new Error('new password is empty')
        if (newPasswordRepeat.trim() === '') throw new Error('new password repeat is empty')
        if (newPassword !== newPasswordRepeat) throw new Error('new passwords do not match')

        const user = data.findUserById(userId)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong password')

        data.updateUserPassword(userId, newPassword)
    }

}