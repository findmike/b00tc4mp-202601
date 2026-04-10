export function createLandingView() {

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

    return landingView
}

export function createLoginView() {
    
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
    var loginUsernameLabel = document.createElement('label')
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
    loginPasswordInput.type = 'password'
    loginForm.appendChild(loginPasswordInput)
    var loginSubmitButton = document.createElement('button')
    var loginSubmitButtonText = document.createTextNode('Login')
    loginSubmitButton.appendChild(loginSubmitButtonText)
    loginForm.appendChild(loginSubmitButton)
    loginView.appendChild(loginForm)

    var loginRegisterLink = document.createElement('a')
    loginRegisterLink.href = ''
    var loginRegisterText = document.createTextNode('Register')
    loginRegisterLink.appendChild(loginRegisterText)
    loginView.appendChild(loginRegisterLink)

    var loginFeedbackPanel = document.createElement('p')
    loginView.appendChild(loginFeedbackPanel)

    return loginView
}

export function createRegisterView() {

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
    registerEmailInput.type = 'email'
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
    registerPasswordInput.type = 'password'
    registerForm.appendChild(registerPasswordInput)
    var registerPasswordRepeatLabel = document.createElement('label')
    var registerPasswordRepeatLabelText = document.createTextNode('Repeat password')
    registerPasswordRepeatLabel.appendChild(registerPasswordRepeatLabelText)
    registerForm.appendChild(registerPasswordRepeatLabel)
    var registerPasswordRepeatInput = document.createElement('input')
    registerPasswordRepeatInput.type = 'password'
    registerForm.appendChild(registerPasswordRepeatInput)
    registerView.appendChild(registerForm)
    var registerSubmitButton = document.createElement('button')
    var registerSubmitButtonText = document.createTextNode('Register')
    registerSubmitButton.appendChild(registerSubmitButtonText)
    registerForm.appendChild(registerSubmitButton)

    var registerLoginLink = document.createElement('a')
    registerLoginLink.href = ''
    var registerLoginText = document.createTextNode('Login')
    registerLoginLink.appendChild(registerLoginText)
    registerView.appendChild(registerLoginLink)

    var registerFeedbackPanel = document.createElement('p')
    registerView.appendChild(registerFeedbackPanel)

    return registerView
}

export function createHomeView() {

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

    var homeProfileLink = document.createElement('a')
    homeProfileLink.href = ''
    homeProfileLink.textContent = 'Profile'
    homeView.appendChild(homeProfileLink)

    var homeLogoutButton = document.createElement('button')
    homeLogoutButton.textContent = 'Logout'
    homeView.appendChild(homeLogoutButton)
    
    var homeFeedbackPanel = document.createElement('p')
    homeView.appendChild(homeFeedbackPanel)

    return homeView
}

export function createProfileView() {

    var profileView = document.createElement('div')

    var profileHeader = document.createElement('header')
    var profileLogo = document.createElement('img')
    profileLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
    profileLogo.style.width = '100px'
    profileHeader.appendChild(profileLogo)
    var profileHeaderSpaceText = document.createTextNode(' ')
    profileHeader.appendChild(profileHeaderSpaceText)
    var profileTitle = document.createElement('h1')
    profileTitle.style.display = 'inLine-block' 
    var profileTitleText = document.createTextNode('App')
    profileTitle.appendChild(profileTitleText)
    profileHeader.appendChild(profileTitle)
    profileView.appendChild(profileHeader)

    var profileTitle = document.createElement('h2')
    var profileTitleText = document.createTextNode('Profile')
    profileTitle.appendChild(profileTitleText)
    profileView.appendChild(profileTitle)

    //TODO add back button (link) to go back to home view
    
    var profileHomeLink = document.createElement('a')
    profileHomeLink.href = ''
    profileHomeLink.textContent = 'Home'
    profileView.appendChild(profileHomeLink)

    var profileNameForm = document.createElement('form')
    var profileNameLabel = document.createElement('label')
    var profileNameLabelText = document.createTextNode('Name')
    profileNameLabel.appendChild(profileNameLabelText)
    profileNameForm.appendChild(profileNameLabel)
    var profileNameInput = document.createElement('input')
    profileNameForm.appendChild(profileNameInput)
    var profileNameSubmitButton = document.createElement('button')
    profileNameSubmitButton.textContent = 'Update name'
    profileNameForm.appendChild(profileNameSubmitButton)
    profileView.appendChild(profileNameForm)

    //TODO: add a new form to update the email in profileView
    
    var profileEmailForm = document.createElement('form')
    var profileEmailLabel = document.createElement('label')
    var profileEmailLabelText = document.createTextNode('Email')
    profileEmailLabel.appendChild(profileEmailLabelText)
    profileEmailForm.appendChild(profileEmailLabel)
    var profileEmailInput = document.createElement('input')
    profileEmailInput.type = 'email'
    profileEmailForm.appendChild(profileEmailInput)
    var profileEmailSubmitButton = document.createElement('button')
    profileEmailSubmitButton.textContent = 'Update email'
    profileEmailForm.appendChild(profileEmailSubmitButton)
    profileView.appendChild(profileEmailForm)

    //TODO: add a new form to update the password in profileView

    var profilePasswordForm = document.createElement('form')
    var profilePasswordLabel = document.createElement('label')
    profilePasswordLabel.textContent = 'Password'
    profilePasswordForm.appendChild(profilePasswordLabel)
    var profilePasswordInput = document.createElement('input')
    profilePasswordForm.appendChild(profilePasswordInput)
    var profilePasswordSubmitButton = document.createElement('button')
    profilePasswordSubmitButton.textContent = 'Update password'
    profilePasswordForm.appendChild(profilePasswordSubmitButton)
    profileView.appendChild(profilePasswordForm)
    
    var profileFeedbackPanel = document.createElement('p')
    profileView.appendChild(profileFeedbackPanel)

    return profileView
}