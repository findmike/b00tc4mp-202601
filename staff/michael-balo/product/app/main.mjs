import { createHomeView, createLandingView, createLoginView, createRegisterView } from "./views.mjs"
import { logic } from "./logic.mjs"

var titleText = document.createTextNode('App')
document.head.children[2].appendChild(titleText)

var landingView = createLandingView()
var loginView = createLoginView()
var registerView = createRegisterView()
var homeView = createHomeView()

document.body.appendChild(landingView)

var landingLoginLink = landingView.children[1].children[0] //Esta ruta la buscamos con el debugger
landingLoginLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(landingView)
    document.body.appendChild(loginView)
})

var landingRegisterLink = landingView.children[1].children[1]
landingRegisterLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(landingView)
    document.body.appendChild(registerView)
})

var loginRegisterLink = loginView.children[3]
loginRegisterLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(loginView)
    document.body.appendChild(registerView)
})

var registerLoginLink = registerView.children[3]
registerLoginLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(registerView)
    document.body.appendChild(loginView)
})

/* PARA QUE TE LLEVE A HOME DESDE REGISTER Y LOGIN 
var registerSubmitButton = registerView.children[2].children[8]
registerSubmitButton.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(registerView)
    document.body.appendChild(homeView)
})

var loginSubmitButton = loginView.children[2].children[4]
loginSubmitButton.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(loginView)
    document.body.appendChild(homeView)
})
*/

// SUBMIT EVENT

var registerForm = registerView.children[2]
registerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    var nameInput = registerForm.children[1]
    var emailInput = registerForm.children[3]
    var usernameInput = registerForm.children[5]
    var passwordInput = registerForm.children[7]

    var name = nameInput.value
    var email = emailInput.value 
    var username = usernameInput.value 
    var password = passwordInput.value 

    logic.registerUser(name, email, username, password)

    registerForm.reset()

    document.body.removeChild(registerView)
    document.body.appendChild(loginView)
})

//TODO implement login flow