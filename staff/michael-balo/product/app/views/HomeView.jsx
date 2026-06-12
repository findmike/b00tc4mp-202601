import { useState, useEffect } from 'react'
import { logic } from '../logic'

export function HomeView({ onProfileClicked, onLogoutClicked }) {
    const [feedback, setFeedback] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        try {
            const name = logic.getLoggedInUserName()

            setName(name)
        } catch (error) {
            setFeedback(error.message)
        }
    }, [])

    const handleProfileClick = event => {
        event.preventDefault()

        onProfileClicked()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            onLogoutClicked()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
            <h1>Hello, {name}!</h1>
        </header>
        <div className="flex flex-col items-start">
            <a className="link" href="" onClick={handleProfileClick}>Profile</a>

            <button className="btn" type="submit" onClick={handleLogoutClick}>Logout</button>
        </div>
        {feedback && <p>{feedback}</p>}
    </div>

}