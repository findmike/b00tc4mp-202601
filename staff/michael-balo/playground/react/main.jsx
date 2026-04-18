// JSX = JavaScript + XML

import { logic } from './logic.mjs'

var rootDiv = document.getElementById('root')
var root = ReactDOM.createRoot(rootDiv)

var title = <h1>Hello, React!</h1>
var subtitle = <h2>The most cool component library!</h2>

var colorlist = <ul>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
</ul>

var handleSaluteSubmit = function(event) {
    event.preventDefault()

    var name = event.target.name.value

    alert(logic.salute(name))
}

// DUDA DE PORQUE SE CERRÓ ASÍ LA LINEA 29 !!!

var saluteForm = <form onSubmit={handleSaluteSubmit}>
    <input name ="name" type ="text" placeholder ="Name" />
    <button type="submit">Salute</button>
</form>

// TODO add register form (name, email, username, password, password-repeat)

var registerFormSubmit = function(event) {
    event.preventDefault()

    var name = event.target.name.value
    var email = event.target.email.value
    var username = event.target.username.value
    var password = event.target.password.value
    var repeatPassword = event.target.repeatPassword.value 

    logic.registerUser(name, email, username, password, repeatPassword)
}

var registerForm = <form onSubmit={registerFormSubmit}>

    <input id = "name" type = "text" placeholder= "Name" />
    <label htmlFor= "name">Name</label>

    <input id= "email" type="text" placeholder= "Email" />
    <label htmlFor= "email">Email</label>

    <input id= "username" type="text" placeholder= "Username" />
    <label htmlFor= "username">Username</label>

    <input id= "password" type="text" placeholder= "Password" />
    <label htmlFor= "password">Password</label>

    <input id= "repeatPassword" type="text" placeholder= "Repeat password" />
    <label htmlFor= "repeatPassword">Repeat password</label>

    <button type= "submit">Register</button>

</form>


root.render([title, subtitle,colorlist, saluteForm, registerForm])