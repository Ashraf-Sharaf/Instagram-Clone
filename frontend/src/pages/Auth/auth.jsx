import "./auth.css";
import { useState } from "react";

import Login from "./login";
import Signup from "./signup";
function Auth() {
  const [toggleForm, setToggleForm] = useState(true);

  const handleToggle = () => {
    setToggleForm(toggleForm ? false : true);
  };
  return (
    <div>
      {toggleForm ? (
        <Login onToggle={handleToggle} />
      ) : (
        <Signup onToggle={handleToggle} />
      )}
    </div>
  );
}
export default Auth;
