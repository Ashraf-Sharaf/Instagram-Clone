import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const [toggleForm, setToggleForm] = useState(true);

  function Signup() {
    return (
      <div className="page flex center column gap">
        <div className="register_form flex column align-center ">
          <h1 className="insta flex center">Instagram</h1>

          <input className="register_inputs" placeholder=" Full Name"></input>
          <input className="register_inputs" placeholder=" Username"></input>
          <input className="register_inputs" placeholder=" Password"></input>
          <button className="register_button" >Sign up</button>
        </div>
        <div className="redirection flex center gap">
          <p>Have an account?</p>
          <button
            className="switch_button"
            onClick={(e) => setToggleForm(true)}
          >
            Log in
          </button>
        </div>
      </div>
    );
  }

  function Login() {
    return (
      <div className="page flex center column gap">
        <div className="register_form flex column align-center ">
          <h1 className="insta flex center">Instagram</h1>

          <input className="register_inputs" placeholder=" Username"></input>
          <input className="register_inputs" placeholder=" Password"></input>
          <button className="register_button" onClick={()=>{ navigate("/home");}}>Log in</button>
        </div>
        <div className="redirection flex center gap">
          <p>Don't have an account?</p>
          <button
            className="switch_button"
            onClick={(e) => setToggleForm(false)}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }

  return <div>{toggleForm ? <Login /> : <Signup />}</div>;
}
export default Auth;
