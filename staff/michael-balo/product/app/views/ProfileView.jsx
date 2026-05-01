export function ProfileView() {

    return  <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Profile</h2>

        <button type="submit">Home</button>

        <form>
            <label htmlFor="Name" style={{ fontWeight: "bold" }}>Name</label>
            <input id="Name" placeholder="Name" />
            <button type="submit">Update name</button>
        </form>

        <form>
            <label htmlFor="Email" style={{ fontWeight: "bold" }}>Email</label>
            <input id="Email" placeholder="Email" />
            <button type="submit">Update email</button>
        </form>

        <form>
            <label htmlFor="Username" style={{ fontWeight: "bold" }}>Username</label>
            <input id="Username" placeholder="Username" />
            <button type="submit">Update username</button>
        </form>

        <form>
            <label htmlFor="Password" style={{ fontWeight: "bold" }}>Password</label>
            <input id="Password" placeholder="Password" />
            <label htmlFor="NewPassword" style={{ fontWeight: "bold " }}>New Password</label>
            <input id="NewPassword" placeholder="NewPassword" />
            <label htmlFor="RepeatNewPassword" style={{ fontWeight: "bold" }}>Repeat New Password</label>
            <input id="RepeatNewPasswor" placeholder="RepeatNewPassword" />
            <button type="submit">Update password</button>
        </form>

        <p></p>
    </div>
}