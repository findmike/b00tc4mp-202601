import { useState, useEffect } from 'react'
import { logic } from '../logic'

export function HomeView({ onProfileClicked, onLogoutClicked }) {
    var [feedback, setFeedback] = useState('')
    var [name, setName] = useState('')

    useEffect(() => {
        try {
            var name = logic.getLoggedInUserName()

            setName(name)
        } catch (error) {
            setFeedback(error.message)
        }
    }, [])

    var handleProfileClick = event => {
        event.preventDefault()

        onProfileClicked()
    }

    var handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            onLogoutClicked()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
            <h1>Hello, {name}!</h1>
        </header>

        <a href="" onClick={handleProfileClick} style={{ display: "block", marginBottom: "10px" }}>Profile</a>

        <button type="submit" onClick={handleLogoutClick}>Logout</button>

        {feedback && <p>{feedback}</p>}
    </div>

}