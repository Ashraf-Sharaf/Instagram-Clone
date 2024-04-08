import "./auth.css";

function Login() {
  return (
    <div className="page flex center column gap">
      <div className="login_form flex column align-center ">
        <h1 className="insta flex center">Instagram</h1>

        <input className="login_inputs" placeholder=" Username"></input>
        <input className="login_inputs" placeholder=" Password"></input>
        <button className="login_button">Log in</button>
      </div>
      <div className="redirection flex center gap">
        <p>Don't have an account?</p><button className="switch_button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
