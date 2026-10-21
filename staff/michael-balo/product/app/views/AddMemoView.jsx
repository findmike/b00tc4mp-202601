import { useState } from 'react'
import { logic } from '../logic'

export function AddMemoView({ onHomeClicked }) {
    const [feedback, setFeedback] = useState('')

    const handleHomeClick = event => {
        event.preventDefault()

        onHomeClicked()
    }

    const handleAddMemoSubmit = event => {
        event.preventDefault()

        const subject = event.target.subject.value
        const body = event.target.body.value

        try {
            logic.addMemo(subject, body)
                .then(() => {
                    event.target.reset()
                    onHomeClicked()
                })
                .catch((error) => {
                    setFeedback(error.message)
                })
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2 className="text-white">Add Memo</h2>
        
        <a className="link" onClick={handleHomeClick}>Home</a>

        <form className="form" onSubmit={handleAddMemoSubmit}>
            <label className="label" htmlFor="subject">Subject</label>
            <input className="input" id="subject" placeholder="Subject" />

            <label className="label" htmlFor="body">Content</label>
            <input className="input" id="body" placeholder="Content" />

            <button className="button" type="submit">Update</button>
        </form>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}