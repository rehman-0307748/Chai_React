import React, { useState, useContext } from "react";
import UserContext from "./Usercontext";

function Login() {
  const [username, setUsername] = useState("");
  const [userpasword, setUserpasword] = useState("");
  const { setUserdata } = useContext(UserContext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setUserdata({ username, userpasword });
    setUsername(""); // Optional: clear input after submit
    setUserpasword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={userpasword}
        onChange={(e) => setUserpasword(e.target.value)}
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

export default Login;
