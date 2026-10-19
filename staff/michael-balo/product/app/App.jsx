import { useState } from 'react'
import { LandingView, LoginView, RegisterView, HomeView, ProfileView, AddMemoView, EditMemoView } from './views/index'

export function App() {
    const viewState = useState('landing')
    const view = viewState[0]
    const setView = viewState[1]

    function handleLoginClicked() {
        setView('login')
    }

    function handleRegisterClicked() {
        setView('register')
    }

    function handleUserRegistered() {
        setView('login')
    }

    function handleUserLoggedIn() {
        setView('home')
    }

    function handleProfileClicked() {
        setView('profile')
    }

    function handleLogoutClicked() {
        setView('landing')
    }

    function handleHomeClicked() {
        setView('home')
    }

    function handleAddMemoClicked() {
        setView('add-memo')
    }

    function handleEditMemoClicked() {
        setView('edit-memo')
    }

    if (view === 'landing')
        return <LandingView onLoginClicked={handleLoginClicked} onRegisterClicked={handleRegisterClicked} />
    else if (view === 'login')
        return <LoginView onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn} />
    else if (view === 'register')
        return <RegisterView onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered} />
    else if (view === 'home')
        return <HomeView onProfileClicked={handleProfileClicked} onAddMemoClicked={handleAddMemoClicked} onLogoutClicked={handleLogoutClicked} />
    else if (view === 'add-memo')
        return <AddMemoView onHomeClicked={handleHomeClicked} />
    else if (view === 'edit-memo')
        return <EditMemoView onHomeClicked={handleHomeClicked} />
    else if (view === 'profile')
        return <ProfileView onHomeClicked={handleHomeClicked} />

}