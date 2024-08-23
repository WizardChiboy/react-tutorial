import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(username, password);
    alert(`${username} logged in successfully`);

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "/profile";
  };

  return (
    <div>
      <div className="form">
        <div>
          <p>Username</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default Login;
