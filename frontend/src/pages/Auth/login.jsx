import "./auth.css";

function Login() {
  return (
    <div className="page flex center column gap">
      <div className="register_form flex column align-center ">
        <h1 className="insta flex center">Instagram</h1>

        <input className="register_inputs" placeholder=" Username"></input>
        <input className="register_inputs" placeholder=" Password"></input>
        <button className="register_button">Log in</button>
      </div>
      <div className="redirection flex center gap">
        <p>Don't have an account?</p><button className="switch_button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
