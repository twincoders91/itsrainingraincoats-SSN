import React from "react";

export default function Login() {
  return (
    <div className="col">
      <span className="login-title">Login</span>
      <input
        className="login-input login-username"
        type="text"
        placeholder="username"
      />
      <input
        className="login-input login-password"
        type="text"
        placeholder="password"
      />
      <button className="login-button">Login</button>
      <span className="signup-prompt">Don't have an account yet?</span>
      <button className="signup-button">Sign up</button>
    </div>
  );
}
