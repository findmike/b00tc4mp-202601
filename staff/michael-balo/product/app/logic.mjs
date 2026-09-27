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

        //TODO llamar api para registrar usuario 

        return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Alvarico',
                email: 'alvarico@example.com',
                username: 'alvarico123',
                password: 'Alvarico123',
                passwordRepeat: 'Alvarico123'
            })
        })

            .then(response => {
                return response.json();
            })

            .then(body => {
                console.log(body);
            })
            // no estoy seguro de que el catch vaya aquí 
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            })
    },

    loginUser: function (username, password) {

        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')

        const user = data.findUserByUsername(username)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong password')

        data.setLoggedInUserId(user.id)
    },

    getLoggedInUserName: function () {
        const userId = data.getLoggedInUserId()

        const user = data.findUserById(userId)

        return user.name

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
