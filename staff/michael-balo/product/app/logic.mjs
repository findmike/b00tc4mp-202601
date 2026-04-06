import { data } from "./data.mjs"

export var logic = {
    registerUser: function (name, email, username, password, passwordRepeat) {

        // TODO improve input validation: solucionado con trim()

        if (name.trim() === '') throw new Error('name is empty')
        if (email.trim() === '') throw new Error('email is empty')
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')
        if (passwordRepeat.trim() === '') throw new Error('passwordRepeat is empty')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        var user = data.findUserByEmail(email)

        if (user) throw new Error('User with email already exists')

        user = data.findUserByUsername(username)

        if (user) throw new Error('user with username already exists')

        // TODO use constructor function UserData

        user = {
            name: name,
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    },

    loginUser: function (username, password) {

        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')

        var user = data.findUserByUsername(username)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong password')

        data.setLoggedInUserId(user.id)
    },

    getLoggedInUserName: function () {
        var userId = data.getLoggedInUserId()

        var user = data.findUserById(userId)

        return user.name

    },

    logoutUser: function () {
        data.setLoggedInUserId(null)
    },

    modifyUserName: function(name) {
        var userId = data.getLoggedInUserId()

        data.updateUserName(userId, name)
    },

    modifyEmail: function(email) {
         var userId = data.getLoggedInUserId()

         data.updateUserEmail(userId, email)
    }
}
