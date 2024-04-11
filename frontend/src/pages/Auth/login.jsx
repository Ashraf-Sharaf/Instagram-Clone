import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login({ onToggle }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUSer = async () => {
    try {
      const data = {
        username: username,
        password: password,
      };

      const res =  await axios.post("http://127.0.0.1:8000/api/login", data);
      if (res.status == 200) {
        localStorage.setItem(
          "token",
          res.data.authorisation.token
        );
        navigate('/home');
      }
    } catch (error) {
      alert("Error");
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
