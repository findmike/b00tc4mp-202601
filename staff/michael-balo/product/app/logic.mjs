import { data } from "./data.mjs"

/*TODO check if user already exists

var user = data.findUserByEmail(email)

if (user) throw new Error ('user already exists')

user = data.findUserByUsername(username)

if (user) throw new Error ('user already exists')
*/

export var logic = {
    registerUser:  function(name, email, username, password) {

        var user = data.findUserByEmail(email)

        if (user) {
            return 'User already exists'
        } else {
            return null 
        }
        
            var user = {
                name: name,
                email: email,
                username: username,
                password: password
            }

            data.insertUser(user)
        }
}
