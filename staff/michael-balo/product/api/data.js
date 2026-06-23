import fs from 'fs'

export const data = {
    insertUser: function (user) {
        user.id = 'ID' + Math.random().toString().slice(2)

        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        users.push(user)

        usersJSON = JSON.stringify(users, null, 2)
        fs.writeFileSync('users.json', usersJSON)

    },

    findUserByEmail: function (email) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        return users.find(function (user) {
            return user.email === email
        }) || null
    },

    findUserByUsername: function (username) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        return users.find(function (user) {
            return user.username === username
        }) || null
    },

    findUserById: function (userId) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        return users.find(function (user) {
            return user.id === userId
        }) || null
    },

    updateUserName: function (userId, name) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        const user = users.find(function (user) {
            return user.id === userId
        }) || null
        if (user) user.name = name
        usersJSON = JSON.stringify(users, null, 2)
        fs.writeFileSync('users.json', usersJSON)
    },

    updateUserEmail: function (userId, email) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        const user = users.find(function (user) {
            return user.id === userId
        }) || null
        if (user) user.email = email
        usersJSON = JSON.stringify(users, null, 2)
        fs.writeFileSync('users.json', usersJSON)
    },

    updateUserPassword: function (userId, newPassword) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        const user = users.find(function (user) {
            return user.id === userId
        }) || null
        if (user) user.password = newPassword
        usersJSON = JSON.stringify(users, null, 2)
        fs.writeFileSync('users.json', usersJSON)
    },

    updateUserUsername: function (userId, username) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)
        const user = users.find(function (user) {
            return user.id === userId
        }) || null
        if (user) user.username = username
        usersJSON = JSON.stringify(users, null, 2)
        fs.writeFileSync('users.json', usersJSON)
    },
}