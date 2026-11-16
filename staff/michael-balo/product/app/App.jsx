import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router'
import { LandingView, LoginView, RegisterView, HomeView, ProfileView, AddMemoView, EditMemoView, DeleteMemoView } from './views/index'
import { logic } from './logic.mjs'

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
        navigate('/home')
    }

    function handleProfileClicked() {
        navigate('/profile')
    }

    function handleLogoutClicked() {
        navigate('/landing')
    }

    function handleHomeClicked() {
        navigate('/home')
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

    return (
        <Routes>

            // si tiene token redirige a home, si no a landing
            <Route
                path="/"
                element={
                    <Navigate
                        to={logic.isUserLoggedIn() ? '/home' : '/landing'}
                        replace
                    />
                }
            />

            <Route
                path="/landing"
                element={
                    <LandingView
                        onLoginClicked={handleLoginClicked}
                        onRegisterClicked={handleRegisterClicked}
                    />
                }
            />

            <Route
                path="/login"
                element={
                    <LoginView
                        onRegisterClicked={handleRegisterClicked}
                        onUserLoggedIn={handleUserLoggedIn}
                    />
                }
            />

            <Route
                path="/register"
                element={
                    <RegisterView
                        onLoginClicked={handleLoginClicked}
                        onUserRegistered={handleUserRegistered}
                    />
                }
            />

            <Route
                path="/home"
                element={
                    <HomeView
                        onProfileClicked={handleProfileClicked}
                        onAddMemoClicked={handleAddMemoClicked}
                        onEditMemoClicked={handleEditMemoClicked}
                        onDeleteMemoClicked={handleDeleteMemoClicked}
                        onLogoutClicked={handleLogoutClicked}
                    />
                }
            />

            <Route
                path="/profile"
                element={
                    <ProfileView
                        onHomeClicked={handleHomeClicked}
                    />
                }
            />

            <Route
                path="/memos/add"
                element={
                    <AddMemoView
                        onHomeClicked={handleHomeClicked}
                    />
                }
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