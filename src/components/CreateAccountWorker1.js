import React from "react";

export default function CreateAccountWorker1() {
  return (
    <div className="col">
      <span className="createAccount-label mb-2 fw-700">Create Account</span>
      <div className="input-container mb-4">
        <span className="input-overlay">username</span>
        <input
          className="createAccount-input createAccount-username"
          type="text"
          placeholder="username"
        />
      </div>
      <span className="createAccount-label mb-2 fw-700">Create Password</span>
      <div className="input-container mb-2">
        <span className="input-overlay">password</span>
        <input
          className="createAccount-input createAccount-password"
          type="text"
          placeholder="password"
        />
      </div>
      <div className="input-container">
        <span className="input-overlay">confirm password</span>
        <input
          className="createAccount-input createAccount-confirmPassword"
          type="text"
          placeholder="confirm password"
        />
      </div>
      <button className="createAccount-button button-active fw-600">
        Create Account
      </button>
      <span className="signin-prompt fw-600">Sign in instead</span>
    </div>
  );
}
