import { useState } from 'react'
import { logic } from '../logic'

export function ProfileView({ onHomeClicked }) {
    const [feedback, setFeedback] = useState('')

    const handleHomeClick = event => {
        event.preventDefault()

        onHomeClicked()
    }

    const handleNameSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value

        try {
            logic.modifyUserName(name)
                .then(() => {
                    event.target.reset()
                    setFeedback('User name successfully updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch {
            setFeedback(error.message)
        }
    }

    const handleEmailSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value

        try {
            logic.modifyUserEmail(email)
                .then(() => {
                    event.target.reset()
                    setFeedback('User email successfully updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch {
            setFeedback(error.message)
        }
    }

    const handleUsernameSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value

        try {
            logic.modifyUserUsername(username)
                .then(() => {
                    event.target.reset()
                    setFeedback('User username successfully updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })

        } catch {
            setFeedback(error.message)
        }
    }

    const handlePasswordsSubmit = event => {
        event.preventDefault()

        const password = event.target.password.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            logic.modifyUserPassword(password, newPassword, newPasswordRepeat)
                .then(() => {
                    event.target.reset()
                    setFeedback('User password successfully updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch {
            setFeedback(error.message)
        }
    }

    const handleAvatarSubmit = event => {
        event.preventDefault()

        const avatar = event.target.avatar.value

        try {
            logic.modifyUserAvatar(avatar)
                .then(() => {
                    event.target.reset()
                    setFeedback('User avatar successfully updated')
                })
                .catch(error => {
                    setFeedback(error.message)
                })
        } catch {
            setFeedback(error.message)
        }
    }

    // COMO SE HARIA EL FORMULARIO DE REPEAT PASSWORD SI ESTÁ DENTRO DEL MISMO DE PASSWORD?
    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Profile</h2>

        <a className="link" href="" onClick={handleHomeClick}>Home</a>

        <form className="form" onSubmit={handleNameSubmit}>
            <label className="label" htmlFor="name">Name</label>
            <input className="input" id="name" placeholder="Name" />
            <button className="btn-form" type="submit">Update name</button>
        </form>

        <form className="form" onSubmit={handleEmailSubmit}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" placeholder="Email" />
            <button className="btn-form" type="submit">Update email</button>
        </form>

        <form className="form" onSubmit={handleUsernameSubmit}>
            <label className="label" htmlFor="username">Username</label>
            <input className="input" id="username" placeholder="Username" />
            <button className="btn-form" type="submit">Update username</button>
        </form>

        <form className="form" onSubmit={handlePasswordsSubmit}>
            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" placeholder="Password" />
            <label className="label" htmlFor="newPassword">New Password</label>
            <input className="input" id="newPassword" placeholder="New password" />
            <label className="label" htmlFor="newPasswordRepeat">Repeat New Password</label>
            <input className="input" id="newPasswordRepeat" placeholder="Repeat new password" />
            <button className="btn-form" type="submit">Update password</button>
        </form>

         <form className="form" onSubmit={handleAvatarSubmit}>
            <label className="label" htmlFor="avatar">Avatar</label>
            <input className="input" id="avatar" placeholder="Avatar URL" />
            <button className="btn-form" type="submit">Update avatar</button>
        </form>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}