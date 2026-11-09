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
                    .then(body => data.setToken(body.token))

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    getLoggedInUserName: function () {
        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/username`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
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

    getLoggedInUserAvatar: function () {
        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/avatar`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                throw new Error(error.message);
            })
            .then(response => {
                if (response.ok) return response.json()
                    .then(body => body.avatar)

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    logoutUser: function () {
        data.setToken(null)
    },

    modifyUserName: function (name) {
        if (name.trim() === '') throw new Error('name is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/name`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
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

    modifyUserEmail: function (email) {
        if (email.trim() === '') throw new Error('email is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/email`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
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

    modifyUserUsername: function (username) {
        if (username.trim() === '') throw new Error('username is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/username`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username
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

    modifyUserPassword: function (password, newPassword, newPasswordRepeat) {
        if (newPassword !== newPasswordRepeat) throw new Error('new passwords do not match')
        if (newPassword.trim() === '') throw new Error('new password is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/password`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password,
                newPassword,
                newPasswordRepeat
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

    modifyUserAvatar: function (avatar) {
        if (avatar.trim() === '') throw new Error('avatar is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/avatar`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar
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

    addMemo: function (subject, body) {
        if (subject.trim() === '') throw new Error('subject is empty')
        if (body.trim() === '') throw new Error('body is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/memos`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject,
                body
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

    getMemos: function () {
        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/memos`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                throw new Error(error.message);
            })

            .then(response => {
                if (response.ok) return response.json()
                    .then(body => body.memos)

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    getMemo: function (memoId) {
        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/memos/${memoId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .catch(error => {
                throw new Error(error.message);
            })

            .then(response => {
                if (response.ok) return response.json()
                    .then(body => body.memo)

                return response.json()
                    .then(body => {
                        throw new Error(body.message)
                    })
            })
    },

    modifyMemo: function (memoId, subject, body) {
        if (subject.trim() === '') throw new Error('subject is empty')
        if (body.trim() === '') throw new Error('body is empty')

        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/memos/${memoId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject,
                body
            })
        })
            .catch(error => {
                throw new Error(error.message);
            })
            .then(response => {
                if (response.ok) return

                return response.json()
                    .then(body => {
                        throw new Error(body)
                    })
            })
    },

    removeMemo: function (memoId) {
        const token = data.getToken()

        const payload = JSON.parse(atob(token.split('.')[1]))

        const userId = payload.sub

        return fetch(`http://localhost:3000/users/${userId}/memos/${memoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
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
    }
}
