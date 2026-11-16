import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router'

const rootDiv = document.getElementById('root')
const root = createRoot(rootDiv)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
