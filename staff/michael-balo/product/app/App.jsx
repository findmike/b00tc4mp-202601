import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router'
import { LandingView, LoginView, RegisterView, HomeView, ProfileView, AddMemoView, EditMemoView, DeleteMemoView } from './views/index'
import { logic } from './logic.mjs'

export function App() {

    const navigate = useNavigate()

    function handleLoginClicked() {
        navigate('/login')
    }

    function handleRegisterClicked() {
        navigate('/register')
    }

    function handleUserRegistered() {
        navigate('/login')
    }

    function handleUserLoggedIn() {
        navigate('/')
    }

    function handleProfileClicked() {
        navigate('/profile')
    }

    function handleLogoutClicked() {
        navigate('/')
    }

    function handleHomeClicked() {
        navigate('/')
    }

    function handleAddMemoClicked() {
        navigate('/memos/add')
    }

    function handleEditMemoClicked(memoId) {
        navigate(`/memos/${memoId}/edit`)
    }

    function handleDeleteMemoClicked(memoId) {
        navigate(`/memos/${memoId}/delete`)
    }

    function RootRoute() {
        return (
            logic.isUserLoggedIn() ?
                <HomeView
                    onProfileClicked={handleProfileClicked}
                    onAddMemoClicked={handleAddMemoClicked}
                    onEditMemoClicked={handleEditMemoClicked}
                    onDeleteMemoClicked={handleDeleteMemoClicked}
                    onLogoutClicked={handleLogoutClicked}
                /> :
                <LandingView
                    onLoginClicked={handleLoginClicked}
                    onRegisterClicked={handleRegisterClicked}
                />
        )
    }

    // recuperamos el ID del memo que queremos editar
    function EditMemoRoute() {
        const { memoId } = useParams() // obtenemos el ID del memo de la URL
        const navigate = useNavigate() // nos permite navegar a otra URL

        return (
            <EditMemoView
                memoId={memoId}
                onHomeClicked={() => navigate('/home')}
            />
        )
    }

    // recuperamos el ID del memo que queremos eliminar
    function DeleteMemoRoute() {
        const { memoId } = useParams()
        const navigate = useNavigate()

        return (
            <DeleteMemoView
                memoId={memoId}
                onHomeClicked={() => navigate('/home')}
                onMemoDeleted={() => navigate('/home')}
            />
        )
    }

    function ProfileRoute() {
        return (
            logic.isUserLoggedIn() ?
                <ProfileView
                    onHomeClicked={handleHomeClicked}
                /> :
                <Navigate to="/" />
        )
    }

    function LoginRoute() {
        return (
            logic.isUserLoggedIn() ?
                <Navigate to="/"
                /> :
                <LoginView
                    onRegisterClicked={handleRegisterClicked}
                    onUserLoggedIn={handleUserLoggedIn}
                />
        )
    }

    function RegisterRoute() {
        return (
            logic.isUserLoggedIn() ?
                <Navigate to="/" /> :
                <RegisterView
                    onLoginClicked={handleLoginClicked}
                    onUserRegistered={handleUserRegistered}
                />
        )
    }

    function AddMemoRoute() {
        return (
            logic.isUserLoggedIn() ?
                <AddMemoView
                    onHomeClicked={handleHomeClicked}
                /> :
                <Navigate to="/" />
        )
    }

    return (
        <Routes>

            <Route
                path="/"
                element={
                    <RootRoute />
                }
            />

            <Route
                path="/login"
                element={<LoginRoute />}
            />

            <Route
                path="/register"
                element={<RegisterRoute />}
            />

            <Route
                path="/profile"
                element={<ProfileRoute />}
            />

            <Route
                path="/memos/add"
                element={<AddMemoRoute />}
            />

            <Route
                path="/memos/:memoId/edit"
                element={<EditMemoRoute />}
            />

            <Route
                path="/memos/:memoId/delete"
                element={<DeleteMemoRoute />}
            />

             //Si la URL no existe, volvemos a la página inicial
            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />

        </Routes>
    )
}