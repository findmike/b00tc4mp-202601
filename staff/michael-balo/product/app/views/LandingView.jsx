export function LandingView(props) {
    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClicked()
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClicked()
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: '100px' }} />  <h1 style={{ display: 'inline-block' }}>App</h1>
        </header>

        <p>
            <a href="" onClick={handleLoginClick} >Login</a> or <a href="" onClick={handleRegisterClick}>Register</a>
        </p>
    </div>
}