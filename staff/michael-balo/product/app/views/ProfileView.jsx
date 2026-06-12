import { useState } from 'react'
import { logic } from '../logic'

export function ProfileView({ onHomeClicked }) {
    var [feedback, setFeedback] = useState('')

    var handleHomeClick = event => {
        event.preventDefault()

        onHomeClicked()
    }

    var handleProfileNameSubmit = event => {
        event.preventDefault()

        var name = event.target.name.value

        try {
            logic.modifyUserName(name)

            event.target.reset()

            setFeedback('User name successfully updated')

        } catch {
            setFeedback(error.message)
        }
    }

    var handleProfileEmailSubmit = event => {
        event.preventDefault()

        var email = event.target.email.value

        try {
            logic.modifyUserName(email)

            event.target.reset()

            setFeedback('User email successfully updated')
        } catch {
            setFeedback(error.message)
        }
    }

    var handleProfileUsernameSubmit = event => {
        event.preventDefault()

        var username = event.target.username.value

        try {
            logic.modifyUserName(username)

            event.target.reset()

            setFeedback('User username successfully updated')

        } catch {
            setFeedback(error.message)
        }
    }

    var handleProfilePasswordsSubmit = event => {
        event.preventDefault()

        var password = event.target.password.value
        var newPassword = event.target.newPassword.value
        var newPasswordRepeat = event.target.newPasswordRepeat.value

        try {
            logic.modifyUserPassword(password, newPassword, newPasswordRepeat)

            event.target.reset()

            setFeedback('User password successfully updated')

        } catch {
            setFeedback(error.message)
        }
    }

    // COMO SE HARIA EL FORMULARIO DE REPEAT PASSWORD SI ESTÁ DENTRO DEL MISMO DE PASSWORD?
    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Profile</h2>

        <a className="bg-[rgb(243,140,6)] text-[rgb(248,4,216)] font-[Changa_One] border-[rgb(243,140,6)] border px-2 leading-loose underline inline-block rounded-full" href="" onClick={handleHomeClick}>Home</a>

        <form className="flex flex-col gap-1 my-2" onSubmit={handleProfileNameSubmit}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
            <input id="name" placeholder="Name" />
            <button className="bg-[rgb(248,3,228)] text-[white] font-[Amatic_SC] shadow-[0_4px_10px_rgba(247,111,0,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose" type="submit">Update name</button>
        </form>

        <form className="flex flex-col gap-1 my-2" onSubmit={handleProfileEmailSubmit}>
            <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
            <input id="email" placeholder="Email" />
            <button className="bg-[rgb(248,3,228)] text-[white] font-[Amatic_SC] shadow-[0_4px_10px_rgba(247,111,0,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose" type="submit">Update email</button>
        </form>

        <form className="flex flex-col gap-1 my-2" onSubmit={handleProfileUsernameSubmit}>
            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="username" placeholder="Username" />
            <button className="bg-[rgb(248,3,228)] text-[white] font-[Amatic_SC] shadow-[0_4px_10px_rgba(247,111,0,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose" type="submit">Update username</button>
        </form>

        <form className="flex flex-col gap-1 my-2" onSubmit={handleProfilePasswordsSubmit}>
            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="password" placeholder="Password" />
            <label htmlFor="newPassword" style={{ fontWeight: "bold " }}>New Password</label>
            <input id="newPassword" placeholder="New password" />
            <label htmlFor="newPasswordRepeat" style={{ fontWeight: "bold" }}>Repeat New Password</label>
            <input id="newPasswordRepeat" placeholder="Repeat new password" />
            <button className="bg-[rgb(248,3,228)] text-[white] font-[Amatic_SC] shadow-[0_4px_10px_rgba(247,111,0,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose" type="submit">Update password</button>
        </form>

        {feedback && <p>{feedback}</p>}
    </div>
}