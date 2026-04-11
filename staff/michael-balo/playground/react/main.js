var rootDiv = document.getElementById('root')
var root = ReactDOM.createRoot(rootDiv)

var title = React.createElement('h1', { children: 'Hello, React!'})

var subtitle = React.createElement('h2', { children: 'The most cool component library!'})

var colorList = React.createElement('ul', {
    children: [
        React.createElement('li', { children: 'Red'}),
        React.createElement('li', { children: 'Green'}),
        React.createElement('li', { children: 'Blue'})
    ]
})

//TODO: create the register form which includes name, email, username, password and repeat password

var registerForm = React.createElement('form', {
    children: [
        React.createElement('label', { type: 'submit', children: 'Name'}),
        React.createElement('input', { id: 'name', type: 'text', placeholder: 'Name'}),
        React.createElement('label', { type: 'submit', children: 'Email'}),
        React.createElement('input', { id: 'email', type: 'text', placeholder: 'Email'}),
        React.createElement('label', { type: 'submit', children: 'Username'}),
        React.createElement('input', { id: 'username', type: 'text', placeholder: 'Username'}),
        React.createElement('label', { type: 'submit', children: 'Password'}),
        React.createElement('input', { id: 'password', type: 'text', placeholder: 'Password'}),
        React.createElement('label', { type: 'submit', children: 'Repeat password'}),
        React.createElement('input', { id: 'repeatPassword', type: 'text', placeholder: 'Repeat password'}),

        React.createElement('button', { type: 'submit', children: 'Register' })
    ],
    onSubmit: function(event) {
        event.preventDefault()

        var name = event.target.name.value
        var email = event.target.email.value
        var username = event.target.username.value
        var password = event.target.password.value
        var repeatPassword = event.target.repeatPassword.value 

        console.log(name, email, username, password, repeatPassword)
    }
})

root.render([title, subtitle, colorList, registerForm])