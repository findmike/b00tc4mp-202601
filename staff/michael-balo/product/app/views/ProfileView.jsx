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

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Profile</h2>

        <a href="" onClick={handleHomeClick}>Home</a>

        <form onSubmit={handleProfileNameSubmit}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
            <input id="name" placeholder="Name" />
            <button type="submit">Update name</button>
        </form>

        <form>
            <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
            <input id="email" placeholder="Email" />
            <button type="submit">Update email</button>
        </form>

        <form>
            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="username" placeholder="Username" />
            <button type="submit">Update username</button>
        </form>

        <form>
            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="password" placeholder="Password" />
            <label htmlFor="newPassword" style={{ fontWeight: "bold " }}>New Password</label>
            <input id="newPassword" placeholder="NewPassword" />
            <label htmlFor="repeatNewPassword" style={{ fontWeight: "bold" }}>Repeat New Password</label>
            <input id="repeatNewPasswor" placeholder="RepeatNewPassword" />
            <button type="submit">Update password</button>
        </form>

        {feedback && <p>{feedback}</p>}
    </div>
}