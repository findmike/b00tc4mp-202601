var landingView = document.createElement('div')

var landingHeader = document.createElement('header')
var landingLogo = document.createElement('img')
landingLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
landingLogo.style.width = '100px'
landingHeader.appendChild(landingLogo) // comentar tema de posición, orden de los factores si altera el producto
var landingHeaderSpaceText = document.createTextNode(' ')
landingHeader.appendChild(landingHeaderSpaceText)
var landingTitle = document.createElement('h1') // para cambiar al h1 el comportamiento, le tenemos que añadir estilos
landingTitle.style.display = 'inLine-block' 
var landingTitleText = document.createTextNode('App')
landingTitle.appendChild(landingTitleText)
landingHeader.appendChild(landingTitle)
landingView.appendChild(landingHeader)


var landingParagraph = document.createElement('p')
var landingLoginLink = document.createElement('a')
landingLoginLink.href = ''
var landingLoginText = document.createTextNode('Login')
landingLoginLink.appendChild(landingLoginText)
landingParagraph.appendChild(landingLoginLink)
var landingParagraphSpaceOrText = document.createTextNode(' or ')
landingParagraph.appendChild(landingParagraphSpaceOrText)
var landingRegisterLink = document.createElement('a')
landingRegisterLink.href = ''
var landingRegisterText = document.createTextNode('Register')
landingRegisterLink.appendChild(landingRegisterText)
landingParagraph.appendChild(landingRegisterLink)
landingView.appendChild(landingParagraph)

document.body.appendChild(landingView)

// TO DO implement login view

var loginView = document.createElement('div')

var loginHeader = document.createElement('header')
var loginLogo = document.createElement('img')
loginLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
loginLogo.style.width = '100px'
loginHeader.appendChild(loginLogo)
var loginHeaderSpaceText = document.createTextNode(' ')
loginHeader.appendChild(loginHeaderSpaceText)
var loginTitle = document.createElement('h1')
loginTitle.style.display = 'inLine-block' 
var loginTitleText = document.createTextNode('App')
loginTitle.appendChild(loginTitleText)
loginHeader.appendChild(loginTitle)
loginView.appendChild(loginHeader)

var loginTitle = document.createElement('h2')
var loginTitleText = document.createTextNode('Login')
loginTitle.appendChild(loginTitleText)
loginView.appendChild(loginTitle)

var loginForm = document.createElement('form')
var loginUsernameLabel = document.createElement('label') // siempre que hay form hay label ??
var loginUsernameLabelText = document.createTextNode('Username')
loginUsernameLabel.appendChild(loginUsernameLabelText)
loginForm.appendChild(loginUsernameLabel)
var loginUsernameInput = document.createElement('input')
loginForm.appendChild(loginUsernameInput)
var loginPasswordLabel = document.createElement('label')
var loginPasswordLabelText = document.createTextNode('Password')
loginPasswordLabel.appendChild(loginPasswordLabelText)
loginForm.appendChild(loginPasswordLabel)
var loginPasswordInput = document.createElement('input')
loginForm.appendChild(loginPasswordInput)
var loginSubmitButton = document.createElement('button')
var loginSubmitButtonText = document.createTextNode('Login')
loginSubmitButton.appendChild(loginSubmitButtonText)
loginForm.appendChild(loginSubmitButton)
loginView.appendChild(loginForm)

var logingRegisterLink = document.createElement('a')
logingRegisterLink.href = ''
var logingRegisterText = document.createTextNode('Register')
logingRegisterLink.appendChild(logingRegisterText)
loginView.appendChild(logingRegisterLink)

document.body.appendChild(loginView)

// TODO implement register view (name, email, username n password) 

var registerView = document.createElement('div')

var registerHeader = document.createElement('header')
var registerLogo = document.createElement('img')
registerLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
registerLogo.style.width = '100px'
registerHeader.appendChild(registerLogo)
var registerHeaderSpaceText = document.createTextNode(' ')
registerHeader.appendChild(registerHeaderSpaceText)
var registerTitle = document.createElement('h1')
registerTitle.style.display = 'inLine-block' 
var registerTitleText = document.createTextNode('App')
registerTitle.appendChild(registerTitleText)
registerHeader.appendChild(registerTitle)
registerView.appendChild(registerHeader)

var registerTitle = document.createElement('h2')
var registerTitleText = document.createTextNode('Register')
registerTitle.appendChild(registerTitleText)
registerView.appendChild(registerTitle)

var registerForm = document.createElement('form')
var registerNameLabel = document.createElement('label')
var registerNameLabelText = document.createTextNode('Name')
registerNameLabel.appendChild(registerNameLabelText)
registerForm.appendChild(registerNameLabel)
var registerNameInput = document.createElement('input')
registerForm.appendChild(registerNameInput)
var registerEmailLabel = document.createElement('label')
var registerEmailLabelText = document.createTextNode('Email')
registerEmailLabel.appendChild(registerEmailLabelText)
registerForm.appendChild(registerEmailLabel)
var registerEmailInput = document.createElement('input')
registerForm.appendChild(registerEmailInput)
var registerUsernameLabel = document.createElement('label')
var registerUsernameLabelText = document.createTextNode('Username')
registerUsernameLabel.appendChild(registerUsernameLabelText)
registerForm.appendChild(registerUsernameLabel)
var registerUsernameInput = document.createElement('input')
registerForm.appendChild(registerUsernameInput)
var registerPasswordLabel = document.createElement('label')
var registerPasswordLabelText = document.createTextNode('Password')
registerPasswordLabel.appendChild(registerPasswordLabelText)
registerForm.appendChild(registerPasswordLabel)
var registerPasswordInput = document.createElement('input')
registerForm.appendChild(registerPasswordInput)
registerView.appendChild(registerForm)
var registerSubmitButton = document.createElement('button')
var registerSubmitButtonText = document.createTextNode('Register')
registerSubmitButton.appendChild(registerSubmitButtonText)
registerForm.appendChild(registerSubmitButton)

document.body.appendChild(registerView)

// TODO implement homw view (a title with "Hello, Home!")

var homeView = document.createElement('div')

var homeHeader = document.createElement('header')
var homeLogo = document.createElement('img')
homeLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
homeLogo.style.width = '100px'
homeHeader.appendChild(homeLogo)
var homeHeaderSpaceText = document.createTextNode(' ')
homeHeader.appendChild(homeHeaderSpaceText)
var homeTitle = document.createElement('h1')
homeTitle.style.display = 'inLine-block' 
var homeTitleText = document.createTextNode('App')
homeTitle.appendChild(homeTitleText)
homeHeader.appendChild(homeTitle)
homeView.appendChild(homeHeader)

var homeTitle = document.createElement('h1')
var homeTitleText = document.createTextNode('Hello, Home!')
homeTitle.appendChild(homeTitleText)
homeView.appendChild(homeTitle)









document.body.appendChild(homeView)