import { logic } from '../logic'
import { useState } from 'react'

export function RegisterView(props) {
    var feedbackState = useState('')
    var feedback = feedbackState[0]
    var setFeedback = feedbackState[1]

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClicked()
    }

    function handleRegisterSubmit(event) {
        event.preventDefault()

        var name = event.target.name.value
        var email = event.target.email.value
        var username = event.target.username.value
        var password = event.target.password.value
        var passwordRepeat = event.target.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)

            event.target.reset()
            // registerFeedbackPanel.textContent = ''

            props.onUserRegistered()
            // document.body.removeChild(registerView)
            // document.body.appendChild(loginView)

        } catch (error) {
            setFeedback(error.message)
            //registerFeedbackPanel.textContent = error.message
        }
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Register</h2>

        <form onSubmit={handleRegisterSubmit}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
            <input id="name" placeholder="Name" />

            <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
            <input id="email" placeholder="Email" />

            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="username" placeholder="Username" />

            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="password" type='password' placeholder="Password" />

            <label htmlFor="passwordRepeat" style={{ fontWeight: "bold" }}>Repeat Password</label>
            <input id="passwordRepeat" type='password' placeholder="Repeat Password" />

            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleLoginClick} >Login</a>

        {feedback &&<p>{feedback}</p>}
    </div>
}