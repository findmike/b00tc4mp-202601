import { createRoot } from 'react-dom/client'
import { App } from './App'
import './populate.mjs'

var rootDiv = document.getElementById('root')
var root = createRoot(rootDiv)

root.render(<App />)
