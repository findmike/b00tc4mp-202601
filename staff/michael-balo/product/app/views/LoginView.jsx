import { useState } from 'react'
import { logic } from '../logic'

export function LoginView({ onRegisterClicked, onUserLoggedIn }) {

    const [feedback, setFeedback] = useState('')

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            logic.loginUser(username, password)

            event.target.reset()
            // loginFeedbackPanel.textContent = ''

            // var userName = logic.getLoggedInUserName()

            // var homeTitle = homeView.children[1]
            // homeTitle.textContent = 'Hello, ' + userName + '!'

            onUserLoggedIn()
            // document.body.removeChild(loginView)
            // document.body.appendChild(homeView)

        } catch (error) {
            setFeedback(error.message)
            // loginFeedbackPanel.textContent = error.message
        }

    }

    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Login</h2>

        <form className="form" onSubmit={handleLoginSubmit}>
            <label className="label" htmlFor="username">Username</label>
            <input className="input" id="username" placeholder="Username" />

            <label className="label" htmlFor="password">Password</label>
            <input className="input" id="password" type='password' placeholder="Password" />

            <button className="btn" type="submit">Login</button>
        </form>

        <a className="link" href="" onClick={handleRegisterClick} >Register</a>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}