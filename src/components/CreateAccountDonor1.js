import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CreateAccountDonor1(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const buttonRef = useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
    props.setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [name, email, password, confirmPassword]);

  return (
    <div className="col">
      <span className="createAccount-label mb-2 fw-700">
        Create a donor account
      </span>
      <div className="input-container mb-2">
        <span className="input-overlay">Name</span>
        <input
          className="createAccount-username"
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
        />
      </div>
      <div className="input-container mb-4">
        <span className="input-overlay">email</span>
        <input
          className="createAccount-username"
          type="text"
          placeholder="email"
          onChange={handleEmailChange}
        />
      </div>
      <span className="createAccount-label mb-2 fw-700">Create Password</span>
      <div className="input-container mb-2">
        <span className="input-overlay">password</span>
        <input
          className="createAccount-password"
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="input-container">
        <span className="input-overlay">confirm password</span>
        <input
          className="createAccount-confirmPassword"
          type="password"
          placeholder="confirm password"
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <NavLink to="/home">
        <button
          className="createAccount-button button-active fw-600"
          ref={buttonRef}
        >
          Create Account
        </button>
      </NavLink>
      <NavLink to="/login">
        <span className="signin-prompt fw-600">Sign in instead</span>
      </NavLink>
    </div>
  );
}
