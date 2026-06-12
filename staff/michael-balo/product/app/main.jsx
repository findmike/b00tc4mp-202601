import { createRoot } from 'react-dom/client'
import { App } from './App'
import './populate.mjs'

const rootDiv = document.getElementById('root')
const root = createRoot(rootDiv)

root.render(<App />)
