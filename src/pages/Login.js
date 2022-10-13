import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const buttonRef = useRef();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (username && password) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [username, password]);

  return (
    <div className="col">
      <span className="mb-2 fw-700">Login</span>
      <input
        className="login-input login-username mb-2"
        type="text"
        placeholder="username"
        onChange={handleUsernameChange}
      />
      <input
        className="login-input login-password mb-4"
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <NavLink to="/">
        <button className="login-button" ref={buttonRef}>
          Login
        </button>
      </NavLink>
      <span className="mt-4 mb-4 fw-300">Don't have an account yet?</span>
      <NavLink to="/create-account">
        <button className="signup-button">Sign up</button>
      </NavLink>
    </div>
  );
}
