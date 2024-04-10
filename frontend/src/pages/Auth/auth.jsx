import "./auth.css";
import { useState } from "react";

import Login from "./login";
import Signup from "./signup";
function Auth() {
  // const navigate = useNavigate();
  const [toggleForm, setToggleForm] = useState(true);

  const handleToggle = ()=>{
    setToggleForm(toggleForm ? false : true);
  }
  return (
    <div>
      {toggleForm ? (
        <Login
          onToggle={handleToggle}
          // navigate={navigate}
      
        />
      ) : (
        <Signup 
       onToggle={handleToggle}
        // navigate={navigate}
        />
      )}
    </div>
  );
}
export default Auth;
