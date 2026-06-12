import { useState } from 'react'
import { logic } from '../logic'

export function RegisterView({ onLoginClicked, onUserRegistered }) {

    /* ASÍ ESTABA ANTES DE HACER DESTRUCTURING
    var feedbackState = useState('')
    var feedback = feedbackState[0]
    var setFeedback = feedbackState[1]
    */
    const [feedback, setFeedback] = useState('')

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const username = event.target.username.value
        const password = event.target.password.value
        const passwordRepeat = event.target.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)

            event.target.reset()
            // registerFeedbackPanel.textContent = ''

            onUserRegistered()
            // document.body.removeChild(registerView)
            // document.body.appendChild(loginView)

        } catch (error) {
            setFeedback(error.message)
            //registerFeedbackPanel.textContent = error.message
        }
    }

    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Register</h2>

        <form className="form" onSubmit={handleRegisterSubmit}>
            <label className="label" htmlFor="name">Name</label>
            <input className="input" id="name" placeholder="Name" />

            <label className="label" htmlFor="email">Email</label>
            <input className="input" id="email" placeholder="Email" />

            <label className="label" htmlFor="username">Username</label>
            <input className="input" id="username" placeholder="Username" />

            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" type='password' placeholder="Password" />

            <label className="label" htmlFor="passwordRepeat">Repeat Password</label>
            <input className="input" id="passwordRepeat" type='password' placeholder="Repeat Password" />

            <button className="btn" type="submit">Register</button>
        </form>

        <a className="link" href="" onClick={handleLoginClick} >Login</a>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}