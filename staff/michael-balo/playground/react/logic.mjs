import { data } from './data.mjs'
export var logic = {
    salute: function(name) {
        return 'Hello, ' + name + '!'
    },

    registerUser: function(name, email, username, password, repeatPassword) {
        // TODO implement me (call data.insertUser(...))

        var user = {

            name: name,
            email: email,
            username: username,
            password: password,
        }

        data.insertUser(user)



        console.log(name, email, username, password, repeatPassword)
    }
}