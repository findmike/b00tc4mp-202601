import { logic } from '../logic'
import { useState } from 'react'

export function LoginView(props) {
    var feedbackState = useState('')
    var feedback = feedbackState[0]
    var setFeedback = feedbackState[1]

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClicked()
    }

    function handleLoginSubmit(event) {
        event.preventDefault()

        var username = event.target.username.value
        var password = event.target.password.value

        try {
            logic.loginUser(username, password)

            event.target.reset()
           // loginFeedbackPanel.textContent = ''

            // var userName = logic.getLoggedInUserName()

           // var homeTitle = homeView.children[1]
            // homeTitle.textContent = 'Hello, ' + userName + '!'

            props.onUserLogged()
           // document.body.removeChild(loginView)
            // document.body.appendChild(homeView)

        } catch (error) {
            setFeedback(error.message)
           // loginFeedbackPanel.textContent = error.message
        }

    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Login</h2>

        <form onSubmit={handleLoginSubmit}>
            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="username" placeholder="Username" />

            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="password" type='password' placeholder="Password" />

            <button type="submnit">Login</button>
        </form>

        <a href="" onClick={handleRegisterClick} >Register</a>

        {feedback && <p>{feedback}</p>}
    </div>
}