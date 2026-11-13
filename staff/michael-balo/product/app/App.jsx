import { useState } from 'react'
import { LandingView, LoginView, RegisterView, HomeView, ProfileView, AddMemoView, EditMemoView, DeleteMemoView } from './views/index'
import { logic } from './logic.mjs'

export function App() {
    const [view, setView] = useState(
        logic.isUserLoggedIn() ? 'home' : 'landing')                     //si el usuario está logueado muestra home, si no, login

    const [editingMemoId, setEditingMemoId] = useState(null)            //almacena el ID de la memo seleccionada
    const [deletingMemoId, setDeletingMemoId] = useState(null)

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
        setEditingMemoId(null) // esto limpia el ID del memo cuando vuelves a home
        setDeletingMemoId(null) // '' ... ''
        setView('home')
    }

    function handleAddMemoClicked() {
        setView('add-memo')
    }

    function handleEditMemoClicked(memoId) {
        setEditingMemoId(memoId)
        setView('edit-memo')
    }

    function handleDeleteMemoClicked(memoId) {
        setDeletingMemoId(memoId)
        setView('delete-memo')
    }

    function handleMemoDeleted() {
        setDeletingMemoId(null)
        setView('home')
    }

    if (view === 'landing')
        return <LandingView onLoginClicked={handleLoginClicked} onRegisterClicked={handleRegisterClicked} />
    else if (view === 'login')
        return <LoginView onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn} />
    else if (view === 'register')
        return <RegisterView onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered} />
    else if (view === 'home')
        return <HomeView onProfileClicked={handleProfileClicked} onAddMemoClicked={handleAddMemoClicked} onEditMemoClicked={handleEditMemoClicked} onDeleteMemoClicked={handleDeleteMemoClicked} onLogoutClicked={handleLogoutClicked} />
    else if (view === 'add-memo')
        return <AddMemoView onHomeClicked={handleHomeClicked} />
    else if (view === 'edit-memo')
        return <EditMemoView onHomeClicked={handleHomeClicked} memoId={editingMemoId} />
    else if (view === 'delete-memo')
        return <DeleteMemoView onHomeClicked={handleHomeClicked} memoId={deletingMemoId} onMemoDeleted={handleMemoDeleted} />
    else if (view === 'profile')
        return <ProfileView onHomeClicked={handleHomeClicked} />

}