import { useState } from "react";
import axios from "axios";
function Login({ onToggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUSer = async () => {
    try {
      const data = {
        username: username,
        password: password,
      };
      const headers={"Content-Type": "multipart/form-data"}
      const res = await axios.post("http://127.0.0.1:8000/api/login", data,headers);
   
      console.log(res.data);
    } catch (error) {
      console.error("Error ", error);
    }
  };

  return (
    <div className="page flex center column gap">
      <div className="register_form flex column align-center ">
        <h1 className="insta flex center">Instagram</h1>

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
            loginUSer();
          }}
        >
          Log in
        </button>
      </div>
      <div className="redirection flex center gap">
        <p>Don't have an account?</p>
        <button className="switch_button" onClick={() => onToggle()}>
          Sign up
        </button>
      </div>
    </div>
  );
}
export default Login;
