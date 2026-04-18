import { logic } from './logic.mjs'
import { createLandingView } from './views.jsx'

var rootDiv = document.getElementById('root')
var root = ReactDOM.createRoot(rootDiv)

var landingView = createLandingView()

root.render([landingView])
