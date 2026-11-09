const users = []
let _token = null

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

    setToken: function (token) {
        _token = token

    },

    getToken: function () {
        return _token
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

     updateUserUsername: function(userId, username) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.username = username
    },

    updateUserPassword: function (userId, newPassword) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.password = newPassword
    },

    updateUserAvatar: function (userId, avatar) {
        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) user.avatar = avatar
    }

}