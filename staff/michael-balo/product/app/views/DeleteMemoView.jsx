import { useState } from 'react'
import { logic } from '../logic'

export function DeleteMemoView({ onHomeClicked, memoId, onMemoDeleted }) {

    const [feedback, setFeedback] = useState('')

    const handleYesButtonClicked = event => {
        event.preventDefault()

        try {
            logic.removeMemo(memoId)
                .then(() => onMemoDeleted())
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleNoButtonClicked = event => {
        event.preventDefault()

        onHomeClicked()
    }

    return <div className="min-h-screen w-full bg-black flex flex-col">

        <header className="flex flex-col items-center pt-4">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1 className="title-app" style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2 className="text-white text-center">Delete Memo</h2>

        <div className="flex-1 w-full flex items-center justify-center -translate-y-30">

            <div className="bg-black border-2 border-orange-500 rounded-2xl shadow-2xl p-8 flex flex-col items-center max-w-md w-11/12">

                <p className="text-white text-center mb-6">Are you sure you want to delete this memo?</p>

                <div className="flex items-center gap-4">
                    <button className="btn-yes cursor-pointer" onClick={handleYesButtonClicked}> Yes </button> or <button className="btn-no cursor-pointer" onClick={handleNoButtonClicked}> No </button>
                </div>

                {feedback && <p className="feedback">{feedback}</p>}

            </div>
        </div>
    </div>
}
