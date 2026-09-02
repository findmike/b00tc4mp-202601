import fs from 'fs/promises'

let loggedInUserId = null

export const data = {
    insertUser: function (user) {
        user.id = 'ID' + Math.random().toString().slice(2)

        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {

                const users = JSON.parse(usersJSON)

                users.push(user)

                return fs.writeFile('users.json', JSON.stringify(users, null, 2))
                    .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                    .then(() => user)
            })
    },

    findUserByEmail: function (email) {
        return fs.readFile('users.json', 'utf-8')

            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.email === email
                }) || null

                return user
            })
    },

    findUserByUsername: function (username) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.username === username
                }) || null

                return user
            })
    },

    findUserById: function (userId) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.id === userId
                }) || null

                return user
            })
    },

    updateUserName: function (userId, name) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.id === userId

                }) || null

                if (user) {
                    user.name = name

                    usersJSON = JSON.stringify(users, null, 2)

                    return fs.writeFile('users.json', usersJSON)
                        .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                        .then(() => user)
                }
            })
    },

    updateUserEmail: function (userId, email) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.id === userId

                }) || null

                if (user) {
                    user.email = email

                    usersJSON = JSON.stringify(users, null, 2)

                    return fs.writeFile('users.json', usersJSON)
                        .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                        .then(() => user)
                }
            })
    },

    updateUserPassword: function (userId, newPassword) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.id === userId

                }) || null

                if (user) {
                    user.password = newPassword

                    usersJSON = JSON.stringify(users, null, 2)
                    return fs.writeFile('users.json', usersJSON)
                        .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                        .then(() => user)
                }
            })
    },

    updateUserUsername: function (userId, username) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const user = users.find(function (user) {
                    return user.id === userId

                }) || null

                if (user) {
                    user.username = username

                    usersJSON = JSON.stringify(users, null, 2)
                    return fs.writeFile('users.json', usersJSON)
                        .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                        .then(() => user)
                }
            })
    },

    deleteUserById: function (userId) {
        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                const userIndex = users.findIndex(function (user) {
                    return user.id === userId

                })

                if (userIndex !== -1) {
                    users.splice(userIndex, 1)

                    usersJSON = JSON.stringify(users, null, 2)
                    
                    return fs.writeFile('users.json', usersJSON)
                        .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                        .then(() => {})
                }
            })
    },
}