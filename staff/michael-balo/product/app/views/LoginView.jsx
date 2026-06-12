import { useState } from 'react'
import { logic } from '../logic'

export function LoginView({ onRegisterClicked, onUserLoggedIn }) {

    var [feedback, setFeedback] = useState('')

    var handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    var handleLoginSubmit = event => {
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

            onUserLoggedIn()
            // document.body.removeChild(loginView)
            // document.body.appendChild(homeView)

        } catch (error) {
            setFeedback(error.message)
            // loginFeedbackPanel.textContent = error.message
        }

    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Login</h2>

        <form className="flex flex-col gap-1 my-2" onSubmit={handleLoginSubmit}>
            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input className="border-[rgb(248,4,216)] border px-2 leading-loose selection:bg-[rgb(250,0,171)] selection:text-[rgb(243,140,6)]" id="username" placeholder="Username" />

            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input className="border-[rgb(248,4,216)] border px-2 leading-loose selection:bg-[rgb(250,0,171)] selection:text-[rgb(243,140,6)]" id="password" type='password' placeholder="Password" />

            <button className="bg-[rgb(243,140,6)] text-[white] font-[Amatic_SC] shadow-[0_4px_10px_rgba(248,4,216,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose" type="submit">Login</button>
        </form>

        <a className="bg-[rgb(243,140,6)] text-[rgb(248,4,216)] font-[Changa_One] border-[rgb(243,140,6)] border px-2 leading-loose underline inline-block rounded-full" href="" onClick={handleRegisterClick} >Register</a>

        {feedback && <p>{feedback}</p>}
    </div>
}