import { logic } from './logic.mjs'
import { createLandingView, createLoginView, createRegisterView, createHomeView, createProfileView } from './views.jsx'

var rootDiv = document.getElementById('root')
var root = ReactDOM.createRoot(rootDiv)

var landingView = createLandingView()
var loginView = createLoginView()
var registerView = createRegisterView()
var homeView = createHomeView()
var profileView = createProfileView()

root.render([landingView, loginView, registerView, homeView, profileView])
