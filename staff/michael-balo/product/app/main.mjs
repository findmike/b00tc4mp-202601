import './populate.mjs'
import { createHomeView, createLandingView, createLoginView, createRegisterView, createProfileView } from "./views.mjs"
import { logic } from "./logic.mjs"

var titleText = document.createTextNode('App')
document.head.children[2].appendChild(titleText)

var landingView = createLandingView()
var loginView = createLoginView()
var registerView = createRegisterView()
var homeView = createHomeView()
var profileView = createProfileView()

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

    loginForm.reset()
    loginFeedbackPanel.textContent = ''

    document.body.removeChild(loginView)
    document.body.appendChild(registerView)
})

var registerLoginLink = registerView.children[3]
registerLoginLink.addEventListener('click', function(event) {
    event.preventDefault()

    registerForm.reset()
    registerFeedbackPanel.textContent = ''

    document.body.removeChild(registerView)
    document.body.appendChild(loginView)
})

// SUBMIT EVENT

var registerFeedbackPanel = registerView.children[4]

var registerForm = registerView.children[2]
registerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    var nameInput = registerForm.children[1]
    var emailInput = registerForm.children[3]
    var usernameInput = registerForm.children[5]
    var passwordInput = registerForm.children[7]
    var passwordRepeatInput = registerForm.children[9]

    var name = nameInput.value
    var email = emailInput.value 
    var username = usernameInput.value 
    var password = passwordInput.value 
    var passwordRepeat = passwordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)
        
        registerForm.reset()
        registerFeedbackPanel.textContent = ''

        document.body.removeChild(registerView)
        document.body.appendChild(loginView)

    } catch (error) {
        registerFeedbackPanel.textContent = error.message
    }
})

//TODO implement login flow

var loginFeedbackPanel = loginView.children[4]

var loginForm = loginView.children[2]
loginForm.addEventListener('submit', function(event) {
    event.preventDefault()

     var usernameInput = loginForm.children[1]
     var passwordInput = loginForm.children[3]
     
     var username = usernameInput.value
     var password = passwordInput.value 

     try {
        logic.loginUser(username, password)

        loginForm.reset()
        loginFeedbackPanel.textContent = ''

        var userName = logic.getLoggedInUserName()

        //TODO set user name in home title salutation 
        //TODO call logic getLoggedInUser()
        var homeTitle = homeView.children[1]
        homeTitle.textContent = 'Hello, ' + userName + '!'

        document.body.removeChild(loginView)
        document.body.appendChild(homeView)

     } catch (error) {
        loginFeedbackPanel.textContent = error.message
     }
})

var homeProfileLink = homeView.children[2]
homeProfileLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(homeView)
    document.body.appendChild(profileView)
})

var homeFeedbackPanel = homeView.children[4]

var homeLogoutButton = homeView.children[3]
homeLogoutButton.addEventListener('click', function(event) {
 // no hace falta el preventDefault en botones simples

    try {
        logic.logoutUser()

        document.body.removeChild(homeView)
        document.body.appendChild(loginView)

    } catch (error){
        homeFeedbackPanel.textContent = error.message
    }

})

var profileHomeLink = profileView.children[2]
profileHomeLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(profileView)
    document.body.appendChild(homeView)
})

/*TODO implement profile name form submit behavior to catch new user name and call 
logic.updateUserName(newName), if fine then show 'user name sucsessfully updated' 
in profile feedback panel */

var profileFeedbackPanel = profileView.children[7]

var profileNameForm = profileView.children[3]
profileNameForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var nameInput = profileNameForm.children[1]

    var name = nameInput.value

    try {
        logic.modifyUserName(name)

        // TODO estando en la homeView, que se muestre el nuevo nombre que hemos actualizado

        var homeTitle = homeView.children[1]
        homeTitle.textContent = 'Hello ' + name + '!'

        profileNameForm.reset()
        profileFeedbackPanel.textContent = 'User name successfully updated'
    } catch (error) {
        profileFeedbackPanel.textContent = error.message
    }
})

var profileEmailForm = profileView.children[4]
profileEmailForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var emailInput = profileEmailForm.children[1]

    var email = emailInput.value

    try {
        logic.modifyUserEmail(email)
        
        profileEmailForm.reset()
        profileFeedbackPanel.textContent = 'User email successfully updated'
    } catch (error) {
        profileFeedbackPanel.textContent = error.message
    }
})

// TODO: implement username form 11/04

var profileUsernameForm = profileView.children[5]
profileUsernameForm.addEventListener('submit', function(event) {
    event.preventDefault()

    var usernameInput = profileUsernameForm.children[1]

    var username = usernameInput.value

    try {
        logic.modifyUserUsername(username)

        profileUsernameForm.reset()
        profileFeedbackPanel.textContent = 'Username successfully updated'
    } catch {
        profileFeedbackPanel.textContent = error.message
    }
})



 // TODO: implement password form (habra que pedir current password, new password
 //  y repeat new password)

 var profilePasswordForm = profileView.children[6]
 profilePasswordForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var passwordInput = profilePasswordForm.children[1]
    var profileNewPasswordInput = profilePasswordForm.children[3]
    var profileRepeatNewPasswordInput = profilePasswordForm.children[5]

    var password = passwordInput.value
    var newPassword = profileNewPasswordInput.value
    var newPasswordRepeat = profileRepeatNewPasswordInput.value


    try {
        logic.modifyUserPassword(password, newPassword, newPasswordRepeat)

        profilePasswordForm.reset()
        profileFeedbackPanel.textContent = 'User password successfully updated'

    } catch (error) {
        profilePasswordForm.textContent = error.message
    }


 })