export function RegisterView(props) {
    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClicked()
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Register</h2>

        <form>
            <label htmlFor="Name" style={{ fontWeight: "bold" }}>Name</label>
            <input id="Name" placeholder="Name" />

            <label htmlFor="Email" style={{ fontWeight: "bold" }}>Email</label>
            <input id="Email" placeholder="Email" />

            <label htmlFor="Username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="Username" placeholder="Username" />

            <label htmlFor="Password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="Password" placeholder="Password" />

            <label htmlFor="RepeatPassword" style={{ fontWeight: "bold" }}>Repeat Password</label>
            <input id="RepeatPassword" placeholder="Repeat Password" />

            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleLoginClick} >Login</a>

        <p></p>
    </div>
}