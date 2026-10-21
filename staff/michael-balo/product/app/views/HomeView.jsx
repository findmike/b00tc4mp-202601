import { useState, useEffect } from 'react'
import { logic } from '../logic'

export function HomeView({ onProfileClicked, onAddMemoClicked, onEditMemoClicked, onLogoutClicked }) {
    const [feedback, setFeedback] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')

    const [memos, setMemos] = useState([])

    useEffect(() => {
        try {
            logic.getLoggedInUserName()
                .then(userName => {
                    setName(userName)
                })
                .catch((error) => {
                    setFeedback(error.message)
                })

            logic.getLoggedInUserAvatar()
                .then(avatar => {
                    setAvatar(avatar)
                })
                .catch((error) => {
                    setFeedback(error.message)
                })

            logic.getMemos()
                .then(memos => {
                    setMemos(memos)
                })
                .catch((error) => {
                    setFeedback(error.message)
                })

        } catch (error) {
            setFeedback(error.message)
        }
    }, [])

    const handleProfileClick = event => {
        event.preventDefault()

        onProfileClicked()
    }

    const handleAddMemoClick = event => {
        event.preventDefault()

        onAddMemoClicked()
    }

    const handleEditMemoClick = (event, memoId) => {
        event.preventDefault()

        onEditMemoClicked(memoId)
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
            {name && <h1>Hello, {name}!</h1>}
            {avatar && <img className="logo" src={avatar} />}
        </header>

        <h2 className="flex w-full items-center justify-between px-6 py-4 text-white">Home</h2>

        <div className="flex w-full items-center justify-between px-6 py-4">
            <a className="link" href="" onClick={handleProfileClick}>Profile</a>

            <button className="bg-[rgb(243,140,6)] text-[rgb(248,4,216)] font-[Changa_One] shadow-[0_4px_10px_rgba(248,4,216,0.925)] border-[rgb(243,140,6)] border px-2 leading-loose inline-block rounded-full" type="button" onClick={handleAddMemoClick}>➕</button>

            <button className="btn" type="submit" onClick={handleLogoutClick}>Logout</button>
        </div>

        {feedback && <p>{feedback}</p>}

        <section className="flex flex-col items-center w-full">
            {memos.map(memo =>
                <article key={memo._id} className="flex items-center justify-between w-full p-4 border-b">

                    <div>
                        <h2>{memo.subject}</h2>
                        <p>{memo.body}</p>
                    </div>

                    <button onClick={(event) => handleEditMemoClick(event, memo._id)}>✏️</button>
                    <button>🗑️</button>

                </article>
            )} </section>

    </div>

}