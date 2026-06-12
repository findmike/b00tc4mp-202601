const users = []
let loggedInUserId = null

export const data = {
    insertUser: function (user) {
        user.id = 'ID' + Math.random().toString().slice(2)
        users.push(user)
    },

    findUserByEmail: function (email) {
        return users.find(function (user) {
            return user.email === email
        }) || null
    },

    findUserByUsername: function (username) {
        return users.find(function (user) {
            return user.username === username
        }) || null

    },

    findUserById: function (userId) {
        return users.find(function (user) {
            return user.id === userId
        }) || null

    },

    setLoggedInUserId: function (userId) {
        loggedInUserId = userId

    },

    getLoggedInUserId: function () {
        return loggedInUserId
    },

    updateUserName: function (userId, name) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.name = name 
    },

    updateUserEmail: function (userId, email) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.email = email 
    },

    updateUserPassword: function (userId, newPassword) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.password = newPassword
    },

    updateUserUsername: function(userId, username) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.username = username
    }
}