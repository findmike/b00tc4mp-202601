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
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
            <h1>Hello, {name}!</h1>
        </header>
        <div className="flex flex-col items-start">
            <a className="bg-[rgb(243,140,6)] text-[rgb(248,4,216)] font-[Changa_One] border-[rgb(243,140,6)] border px-2 leading-loose underline inline-block mb-3 rounded-full" href="" onClick={handleProfileClick}>Profile</a>

            <button className="bg-[rgb(243,140,6)] text-[white] font-[Amatic_SC] shadow-[0_4px_10px_rgba(248,4,216,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose" type="submit" onClick={handleLogoutClick}>Logout</button>
        </div>
        {feedback && <p>{feedback}</p>}
    </div>

}