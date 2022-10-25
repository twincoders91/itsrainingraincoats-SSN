import React, { useEffect, useRef, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../Header";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, watch } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const buttonRef = useRef();
  const watchAll = watch();

  const onSubmit = async (data) => {
    const url = "http://127.0.0.1:5001/user/login";
    const body = {
      username: data.username,
      password: data.password,
    };
    const res = await postUser(url, "POST", body);
    console.log(res);

    // to store refresh token from login response to localstorage
    localStorage.setItem("refreshToken", res.refreshToken);

    // to store persona from login response to localstorage
    localStorage.setItem("persona", res.persona);

    // to store userId from login response to localstorage
    localStorage.setItem("id", res.id);

    // console.log(localStorage.refreshToken);

    if (res.status === "error") {
      setErrorMessage(res.message);
      return;
    }

    if (res.status === "ok") {
      console.log(res.id);
      props.setUserId(res.id);
      props.setPersona(res.persona);
      setIsLoggedIn(true);
    }
  };

  const postUser = async (url, method = "GET", body = null) => {
    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const message = res.json();

    return message;
  };

  useEffect(() => {
    if (watchAll.username && watchAll.password) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [watchAll]);

  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="main-body-container">
        <form className="col" onSubmit={handleSubmit(onSubmit)}>
          <span className="mb-2 fw-700">Login</span>
          <input
            className="login-username mb-2"
            type="text"
            placeholder="username"
            autoComplete="off"
            {...register("username", {
              required: true,
            })}
          />
          <input
            className={`login-password${errorMessage ? "" : " mb-4"}`}
            type="password"
            placeholder="password"
            autoComplete="off"
            {...register("password", {
              required: true,
            })}
          />
          {errorMessage && (
            <p
              className="createAccount-label fs-12 fw-600 mt-1 mb-4"
              style={{ color: "red" }}
            >
              Error: {errorMessage}
            </p>
          )}

          <button className="login-button" ref={buttonRef}>
            Login
          </button>

          <span className="mt-4 mb-4 fw-300">Don't have an account yet?</span>
          <NavLink to="/create-account">
            <button className="signup-button">Sign up</button>
          </NavLink>
        </form>
      </div>
      {isLoggedIn && <Navigate to="/home" />}
    </>
  );
}
