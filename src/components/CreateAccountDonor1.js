import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import Context from "../context/context";

export default function CreateAccountDonor1(props) {
  const context = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const buttonRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

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

  const onSubmit = async () => {
    const url = "http://127.0.0.1:5001/user/create";
    const body = {
      username: name,
      password: password,
      user_type: props.persona,
    };
    const res = await putNewUser(url, "PUT", body);
    console.log(res);

    // to store refresh token from login response to localstorage
    localStorage.setItem("refreshToken", res.refreshToken);
    context.setRefreshToken(res.refreshToken);
    // to store persona from login response to localstorage
    localStorage.setItem("persona", res.persona);
    context.setPersona(res.persona);
    // to store userId from login response to localstorage
    localStorage.setItem("id", res.id);
    context.setUserId(res.id);
    // console.log(localStorage.refreshToken);
    if (res.status === "error") {
      setErrorMessage(res.message);
      return;
    }

    if (res.status === "ok") {
      console.log(res.id);
      props.setUserId(res.id);
      props.setCurrentPage("worker2");
    }
  };
  const putNewUser = async (url, method = "GET", body = null) => {
    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const message = res.json();

    return message;
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
          onClick={() => onSubmit()}
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
