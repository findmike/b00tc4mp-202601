import { LandingView, LoginView, RegisterView, HomeView, ProfileView } from './views/index'

var { useState } = React

export function App() {
    var viewState = useState('landing')
    var view = viewState[0]
    var setView = viewState[1]

    function handleLoginClicked() {
        setView('login')
    }

    function handleRegisterClicked() {
        setView('register')
    }

    if (view === 'landing')
        return <LandingView onLoginClicked={handleLoginClicked} onRegisterClicked={handleRegisterClicked} />
    else if (view === 'login')
        return <LoginView onRegisterClicked={handleRegisterClicked} />
    else if (view === 'register')
        return <RegisterView onLoginClicked={handleLoginClicked} />
    else if (view === 'home')
        return <HomeView />
    else if (view === 'profile')
        return <ProfileView />
}