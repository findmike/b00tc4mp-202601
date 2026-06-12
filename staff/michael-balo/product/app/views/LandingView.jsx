export function LandingView({ onLoginClicked, onRegisterClicked }) {

    // 1ª FORMA DE DECLARAR UNA FUNCION
    function handleLoginClick(event) {
        event.preventDefault()

        onLoginClicked()
    }

    // 2ª FORMA DE DECLARAR UNA FUNCION
    const handleRegisterClick = function (event) {
        event.preventDefault()

        onRegisterClicked()
    }

    /* 3ª FORMA DE DECLARAR UNA FUNCION
  var handleRegisterClick = event => {
      event.preventDefault()

      onRegisterClicked()
  }*/

    return <div>
        <header className="flex flex-col items-center">
            <img className="logo" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" />  <h1 className="font-[UnifrakturMaguntia] text-[40px]" style={{ display: 'inline-block' }}>App</h1>
        </header>

        <p>
            <a className="link" href="" onClick={handleLoginClick} >Login</a> or <a className="link" href="" onClick={handleRegisterClick}>Register</a>
        </p>
    </div>
}