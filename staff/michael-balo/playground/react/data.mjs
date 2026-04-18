
var users = []

export var data = {
    insertUser: function(user) {
        user.id = 'ID' + Math.random().toString().slice(2)
        users.push(user)
    }
}