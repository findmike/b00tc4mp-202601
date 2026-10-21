import { useState, useEffect } from 'react'
import { logic } from '../logic'

export function EditMemoView({ onHomeClicked, memoId }) {

    const [feedback, setFeedback] = useState('')
    const [memo, setMemo] = useState(null)

    useEffect(() => {
        try {
            logic.getMemo(memoId)
                .then(memo => setMemo(memo))
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }, [memoId])

    const handleHomeClick = event => {
        event.preventDefault()

        onHomeClicked()
    }

    const handleEditMemoSubmit = event => {
        event.preventDefault()

        const subject = event.target.subject.value
        const body = event.target.body.value

        try {
            logic.modifyMemo(memoId, subject, body)
                .then(() => onHomeClicked())
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2 className="text-white">Edit Memo</h2>

        <a className="link" onClick={handleHomeClick}>Home</a>

        {memo
            ? <form className="form" onSubmit={handleEditMemoSubmit}>
                <label className="label" htmlFor="subject">Subject</label>
                <input className="input" id="subject" name="subject" defaultValue={memo.subject} placeholder="Subject" />

                <label className="label" htmlFor="body">Content</label>
                <input className="input" id="body" name="body" defaultValue={memo.body} placeholder="Content" />

                <button className="button" type="submit">Update</button>
            </form>
            : <p>Loading...</p>
        }

        {feedback && <p className="feedback">{feedback}</p>}
    </div>

}