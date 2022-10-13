import React from "react";

export default function Login() {
  return (
    <div className="col">
      <span className="login-title mb-2">Login</span>
      <input
        className="login-input login-username mb-2"
        type="text"
        placeholder="username"
      />
      <input
        className="login-input login-password mb-4"
        type="text"
        placeholder="password"
      />
      <button className="login-button mb-4">Login</button>
      <span className="mb-4">Don't have an account yet?</span>
      <button className="signup-button">Sign up</button>
    </div>
  );
}
