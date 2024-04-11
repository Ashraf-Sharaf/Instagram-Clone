import { useState } from "react";
import axios from "axios";

function Signup({ onToggle }) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUSer = async () => {
    try {
      const data = {
        name: fullname,
        username: username,
        password: password,
      };

      const res = await axios.post("http://127.0.0.1:8000/api/register", data);
      if (res.status == 200){
      onToggle();
      }
    } catch (error) {
      alert("Error, wrong inputs");
    }
  };

  return (
    <div className="page flex center column gap">
      <div className="register_form flex column align-center ">
        <h1 className="insta flex center">Instagram</h1>

        <input
          className="register_inputs"
          placeholder=" Full Name"
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        ></input>
        <input
          className="register_inputs"
          placeholder=" Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          className="register_inputs"
          placeholder=" Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="register_button"
          onClick={() => {
            registerUSer();
          }}
        >
          Sign up
        </button>
      </div>
      <div className="redirection flex center gap">
        <p>Have an account?</p>
        <button className="switch_button" onClick={() => onToggle()}>
          Log in
        </button>
      </div>
    </div>
  );
}
export default Signup;
