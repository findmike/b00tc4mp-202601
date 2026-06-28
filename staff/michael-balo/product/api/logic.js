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

    modifyUserName: function (name) {
        const userId = data.getLoggedInUserId()

        data.updateUserName(userId, name)
    },

    modifyUserEmail: function (email) {
        const userId = data.getLoggedInUserId()

        data.updateUserEmail(userId, email)
    },


    modifyUserPassword: function (password, newPassword, newPasswordRepeat) {
        const userId = data.getLoggedInUserId()

        const user = data.findUserById(userId)

        if (password !== user.password) throw new Error('password is wrong')
        if (newPassword !== newPasswordRepeat) throw new Error('New passwords do not match')

        data.updateUserPassword(userId, newPassword)
    },

    modifyUserUsername: function (username) {
        const userId = data.getLoggedInUserId()

        data.updateUserUsername(userId, username)
    }
}