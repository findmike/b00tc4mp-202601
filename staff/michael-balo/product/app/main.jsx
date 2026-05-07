import { createRoot } from 'react-dom'
import { App } from './App'

var rootDiv = document.getElementById('root')
var root = createRoot(rootDiv)

root.render(<App />)
