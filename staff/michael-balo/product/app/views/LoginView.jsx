export function LoginView(props) {
    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClicked()
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Login</h2>

        <form>
            <label htmlFor="Username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="Username" placeholder="Username" />

            <label htmlFor="Password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="Password" placeholder="Password" />

            <button type="submnit">Login</button>
        </form>

        <a href="" onClick={handleRegisterClick} >Register</a>

        <p></p>
    </div>
}