export function createLandingView() {

    const landingView = document.createElement('div')

    const landingHeader = document.createElement('header')
    const landingLogo = document.createElement('img')
    landingLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
    landingLogo.style.width = '100px'
    landingHeader.appendChild(landingLogo) // comentar tema de posición, orden de los factores si altera el producto
    const landingHeaderSpaceText = document.createTextNode(' ')
    landingHeader.appendChild(landingHeaderSpaceText)
    const landingTitle = document.createElement('h1') // para cambiar al h1 el comportamiento, le tenemos que añadir estilos
    landingTitle.style.display = 'inLine-block' 
    const landingTitleText = document.createTextNode('App')
    landingTitle.appendChild(landingTitleText)
    landingHeader.appendChild(landingTitle)
    landingView.appendChild(landingHeader)


    const landingParagraph = document.createElement('p')
    const landingLoginLink = document.createElement('a')
    landingLoginLink.href = ''
    const landingLoginText = document.createTextNode('Login')
    landingLoginLink.appendChild(landingLoginText)
    landingParagraph.appendChild(landingLoginLink)
    const landingParagraphSpaceOrText = document.createTextNode(' or ')
    landingParagraph.appendChild(landingParagraphSpaceOrText)
    const landingRegisterLink = document.createElement('a')
    landingRegisterLink.href = ''
    const landingRegisterText = document.createTextNode('Register')
    landingRegisterLink.appendChild(landingRegisterText)
    landingParagraph.appendChild(landingRegisterLink)
    landingView.appendChild(landingParagraph)

    return landingView
}

export function createLoginView() {
    
    const loginView = document.createElement('div')

    const loginHeader = document.createElement('header')
    const loginLogo = document.createElement('img')
    loginLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
    loginLogo.style.width = '100px'
    loginHeader.appendChild(loginLogo)
    const loginHeaderSpaceText = document.createTextNode(' ')
    loginHeader.appendChild(loginHeaderSpaceText)
    let loginTitle = document.createElement('h1')
    loginTitle.style.display = 'inLine-block'
    let loginTitleText = document.createTextNode('App')
    loginTitle.appendChild(loginTitleText)
    loginHeader.appendChild(loginTitle)
    loginView.appendChild(loginHeader)

    loginTitle = document.createElement('h2')
    loginTitleText = document.createTextNode('Login')
    loginTitle.appendChild(loginTitleText)
    loginView.appendChild(loginTitle)

    const loginForm = document.createElement('form')
    const loginUsernameLabel = document.createElement('label')
    const loginUsernameLabelText = document.createTextNode('Username')
    loginUsernameLabel.appendChild(loginUsernameLabelText)
    loginForm.appendChild(loginUsernameLabel)
    const loginUsernameInput = document.createElement('input')
    loginForm.appendChild(loginUsernameInput)
    const loginPasswordLabel = document.createElement('label')
    const loginPasswordLabelText = document.createTextNode('Password')
    loginPasswordLabel.appendChild(loginPasswordLabelText)
    loginForm.appendChild(loginPasswordLabel)
    const loginPasswordInput = document.createElement('input')
    loginPasswordInput.type = 'password'
    loginForm.appendChild(loginPasswordInput)
    const loginSubmitButton = document.createElement('button')
    const loginSubmitButtonText = document.createTextNode('Login')
    loginSubmitButton.appendChild(loginSubmitButtonText)
    loginForm.appendChild(loginSubmitButton)
    loginView.appendChild(loginForm)

    const loginRegisterLink = document.createElement('a')
    loginRegisterLink.href = ''
    const loginRegisterText = document.createTextNode('Register')
    loginRegisterLink.appendChild(loginRegisterText)
    loginView.appendChild(loginRegisterLink)

    const loginFeedbackPanel = document.createElement('p')
    loginView.appendChild(loginFeedbackPanel)

    return loginView
}

export function createRegisterView() {

    const registerView = document.createElement('div')

    const registerHeader = document.createElement('header')
    const registerLogo = document.createElement('img')
    registerLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
    registerLogo.style.width = '100px'
    registerHeader.appendChild(registerLogo)
    const registerHeaderSpaceText = document.createTextNode(' ')
    registerHeader.appendChild(registerHeaderSpaceText)
    let registerTitle = document.createElement('h1')
    registerTitle.style.display = 'inLine-block' 
    let registerTitleText = document.createTextNode('App')
    registerTitle.appendChild(registerTitleText)
    registerHeader.appendChild(registerTitle)
    registerView.appendChild(registerHeader)

    registerTitle = document.createElement('h2')
    registerTitleText = document.createTextNode('Register')
    registerTitle.appendChild(registerTitleText)
    registerView.appendChild(registerTitle)

    const registerForm = document.createElement('form')
    const registerNameLabel = document.createElement('label')
    const registerNameLabelText = document.createTextNode('Name')
    registerNameLabel.appendChild(registerNameLabelText)
    registerForm.appendChild(registerNameLabel)
    const registerNameInput = document.createElement('input')
    registerForm.appendChild(registerNameInput)
    const registerEmailLabel = document.createElement('label')
    const registerEmailLabelText = document.createTextNode('Email')
    registerEmailLabel.appendChild(registerEmailLabelText)
    registerForm.appendChild(registerEmailLabel)
    const registerEmailInput = document.createElement('input')
    registerEmailInput.type = 'email'
    registerForm.appendChild(registerEmailInput)
    const registerUsernameLabel = document.createElement('label')
    const registerUsernameLabelText = document.createTextNode('Username')
    registerUsernameLabel.appendChild(registerUsernameLabelText)
    registerForm.appendChild(registerUsernameLabel)
    const registerUsernameInput = document.createElement('input')
    registerForm.appendChild(registerUsernameInput)
    const registerPasswordLabel = document.createElement('label')
    const registerPasswordLabelText = document.createTextNode('Password')
    registerPasswordLabel.appendChild(registerPasswordLabelText)
    registerForm.appendChild(registerPasswordLabel)
    const registerPasswordInput = document.createElement('input')
    registerPasswordInput.type = 'password'
    registerForm.appendChild(registerPasswordInput)
    const registerPasswordRepeatLabel = document.createElement('label')
    const registerPasswordRepeatLabelText = document.createTextNode('Repeat password')
    registerPasswordRepeatLabel.appendChild(registerPasswordRepeatLabelText)
    registerForm.appendChild(registerPasswordRepeatLabel)
    const registerPasswordRepeatInput = document.createElement('input')
    registerPasswordRepeatInput.type = 'password'
    registerForm.appendChild(registerPasswordRepeatInput)
    registerView.appendChild(registerForm)
    const registerSubmitButton = document.createElement('button')
    const registerSubmitButtonText = document.createTextNode('Register')
    registerSubmitButton.appendChild(registerSubmitButtonText)
    registerForm.appendChild(registerSubmitButton)

    const registerLoginLink = document.createElement('a')
    registerLoginLink.href = ''
    const registerLoginText = document.createTextNode('Login')
    registerLoginLink.appendChild(registerLoginText)
    registerView.appendChild(registerLoginLink)

    const registerFeedbackPanel = document.createElement('p')
    registerView.appendChild(registerFeedbackPanel)

    return registerView
}

export function createHomeView() {

    const homeView = document.createElement('div')

    const homeHeader = document.createElement('header')
    const homeLogo = document.createElement('img')
    homeLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
    homeLogo.style.width = '100px'
    homeHeader.appendChild(homeLogo)
    const homeHeaderSpaceText = document.createTextNode(' ')
    homeHeader.appendChild(homeHeaderSpaceText)
    let homeTitle = document.createElement('h1')
    homeTitle.style.display = 'inLine-block' 
    let homeTitleText = document.createTextNode('App')
    homeTitle.appendChild(homeTitleText)
    homeHeader.appendChild(homeTitle)
    homeView.appendChild(homeHeader)

    homeTitle = document.createElement('h1')
    homeTitleText = document.createTextNode('Hello, Home!')
    homeTitle.appendChild(homeTitleText)
    homeView.appendChild(homeTitle)

    const homeProfileLink = document.createElement('a')
    homeProfileLink.href = ''
    homeProfileLink.textContent = 'Profile'
    homeView.appendChild(homeProfileLink)

    const homeLogoutButton = document.createElement('button')
    homeLogoutButton.textContent = 'Logout'
    homeView.appendChild(homeLogoutButton)
    
    const homeFeedbackPanel = document.createElement('p')
    homeView.appendChild(homeFeedbackPanel)

    return homeView
}

export function createProfileView() {

    const profileView = document.createElement('div')

    const profileHeader = document.createElement('header')
    const profileLogo = document.createElement('img')
    profileLogo.src = 'https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png'
    profileLogo.style.width = '100px'
    profileHeader.appendChild(profileLogo)
    const profileHeaderSpaceText = document.createTextNode(' ')
    profileHeader.appendChild(profileHeaderSpaceText)
    let profileTitle = document.createElement('h1')
    profileTitle.style.display = 'inLine-block' 
    let profileTitleText = document.createTextNode('App')
    profileTitle.appendChild(profileTitleText)
    profileHeader.appendChild(profileTitle)
    profileView.appendChild(profileHeader)

    profileTitle = document.createElement('h2')
    profileTitleText = document.createTextNode('Profile')
    profileTitle.appendChild(profileTitleText)
    profileView.appendChild(profileTitle)

    //TODO add back button (link) to go back to home view
    
    const profileHomeLink = document.createElement('a')
    profileHomeLink.href = ''
    profileHomeLink.textContent = 'Home'
    profileView.appendChild(profileHomeLink)

    const profileNameForm = document.createElement('form')
    const profileNameLabel = document.createElement('label')
    const profileNameLabelText = document.createTextNode('Name')
    profileNameLabel.appendChild(profileNameLabelText)
    profileNameForm.appendChild(profileNameLabel)
    const profileNameInput = document.createElement('input')
    profileNameForm.appendChild(profileNameInput)
    const profileNameSubmitButton = document.createElement('button')
    profileNameSubmitButton.textContent = 'Update name'
    profileNameForm.appendChild(profileNameSubmitButton)
    profileView.appendChild(profileNameForm)

    //TODO: add a new form to update the email in profileView
    
    const profileEmailForm = document.createElement('form')
    const profileEmailLabel = document.createElement('label')
    const profileEmailLabelText = document.createTextNode('Email')
    profileEmailLabel.appendChild(profileEmailLabelText)
    profileEmailForm.appendChild(profileEmailLabel)
    const profileEmailInput = document.createElement('input')
    profileEmailInput.type = 'email'
    profileEmailForm.appendChild(profileEmailInput)
    const profileEmailSubmitButton = document.createElement('button')
    profileEmailSubmitButton.textContent = 'Update email'
    profileEmailForm.appendChild(profileEmailSubmitButton)
    profileView.appendChild(profileEmailForm)

    //TODO: add a new form to update the username in profileView

    const profileUsernameForm = document.createElement('form')
    const profileUsernameLabel = document.createElement('label')
    profileUsernameLabel.textContent = 'Username'
    profileUsernameForm.appendChild(profileUsernameLabel)
    const profileUsernameInput = document.createElement('input')
    profileUsernameForm.appendChild(profileUsernameInput)
    const profileUsernameSubmitButton = document.createElement('button')
    profileUsernameSubmitButton.textContent = 'Update username'
    profileUsernameForm.appendChild(profileUsernameSubmitButton)
    profileView.appendChild(profileUsernameForm)

    //TODO: add a new form to update the password in profileView

    const profilePasswordForm = document.createElement('form')

    const profilePasswordLabel = document.createElement('label')
    profilePasswordLabel.textContent = 'Password'
    profilePasswordForm.appendChild(profilePasswordLabel)
    const profilePasswordInput = document.createElement('input')
    profilePasswordForm.appendChild(profilePasswordInput)

    const profileNewPasswordLabel = document.createElement('label')
    profileNewPasswordLabel.textContent = 'New password'
    profilePasswordForm.appendChild(profileNewPasswordLabel)
    const profileNewPasswordInput = document.createElement('input')
    profilePasswordForm.appendChild(profileNewPasswordInput)

    const profileRepeatNewPasswordLabel = document.createElement('label')
    profileRepeatNewPasswordLabel.textContent = 'Repeat new password'
    profilePasswordForm.appendChild(profileRepeatNewPasswordLabel)
    const profileRepeatNewPasswordInput = document.createElement('input')
    profilePasswordForm.appendChild(profileRepeatNewPasswordInput)

    const profilePasswordSubmitButton = document.createElement('button')
    profilePasswordSubmitButton.textContent = 'Update password'
    profilePasswordForm.appendChild(profilePasswordSubmitButton)
    profileView.appendChild(profilePasswordForm)
    
    const profileFeedbackPanel = document.createElement('p')
    profileView.appendChild(profileFeedbackPanel)

    return profileView
}