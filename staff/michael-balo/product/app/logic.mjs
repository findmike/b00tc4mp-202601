import { data } from "./data.mjs"

export const logic = {
    registerUser: function (name, email, username, password, passwordRepeat) {

        // TODO improve input validation: solucionado con trim()

        if (name.trim() === '') throw new Error('name is empty')
        if (email.trim() === '') throw new Error('email is empty')
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')
        if (passwordRepeat.trim() === '') throw new Error('passwordRepeat is empty')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        //TODO llamar api para registrar usuario, utilizamos fetch para hacer la llamada a la api, y luego devolvemos una promesa

        return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                username,
                password,
                passwordRepeat
            })
        })
            .catch(error => {
                throw new Error(error.message);
            })

            .then(response => {
                if (response.ok) return

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    loginUser: function (username, password) {

        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')

        return fetch('http://localhost:3000/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

            .catch(error => {
                throw new Error(error.message);
            })

            .then(response => {
                if (response.ok) return response.json()
                    .then(body => data.setLoggedInUserId(body.userId))

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    getLoggedInUserName: function () {
        const userId = data.getLoggedInUserId()

        return fetch(`http://localhost:3000/users/${userId}/username`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                throw new Error(error.message);
            })
            .then(response => {
                if (response.ok) return response.json()
                    .then(body => body.userName)

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    logoutUser: function () {
        data.setLoggedInUserId(null)
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
