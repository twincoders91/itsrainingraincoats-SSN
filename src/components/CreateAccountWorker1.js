import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CreateAccountWorker1(props) {
  const { register, handleSubmit, watch, getValues } = useForm();
  const buttonRef = useRef();
  const watchAll = watch();

  const onSubmit = async (data) => {
    // const url = "http://localhost:5001/users/create";
    // const body = {
    //   username: data.username,
    //   password: data.password,
    //   user_type: props.persona.toLowerCase(),
    // };
    // const res = await putNewUser(url, "PUT", body);
    // if (res.status === "ok") {
    props.setCurrentPage("worker2");
    // }
  };

  const putNewUser = async (url, method = "GET", body = null) => {
    const res = await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    const message = res.json();

    return message;
  };

  useEffect(() => {
    if (
      watchAll.username &&
      watchAll.password &&
      watchAll.confirmPassword &&
      watchAll.password === watchAll.confirmPassword
    ) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [watchAll]);

  return (
    <form className="col" onSubmit={handleSubmit(onSubmit)}>
      <p className="createAccount-label mb-2">
        <span className="createAccount-label fw-700">Create Account</span>
      </p>
      <div className="input-container mb-4">
        <span className="input-overlay">
          username{" "}
          {!watchAll.username && (
            <span
              className="createAccount-label fw-300 mb-2"
              style={{ color: "red", fontSize: "11px" }}
            >
              *required
            </span>
          )}
        </span>
        <input
          className="createAccount-username"
          type="text"
          placeholder="username"
          autoComplete="off"
          {...register("username", {
            required: true,
          })}
        />
      </div>
      <span className="createAccount-label mb-2 fw-700">Create Password</span>
      <div className="input-container mb-2">
        <span className="input-overlay">
          password{" "}
          {!watchAll.password && (
            <span
              className="createAccount-label fw-300 mb-2"
              style={{ color: "red", fontSize: "11px" }}
            >
              *required
            </span>
          )}
        </span>
        <input
          className="createAccount-password"
          type="password"
          placeholder="password"
          autoComplete="off"
          {...register("password", {
            required: true,
          })}
        />
      </div>
      <div className="input-container">
        <span className="input-overlay">
          confirm password{" "}
          {!watchAll.confirmPassword && (
            <span
              className="createAccount-label fw-300 mb-2"
              style={{ color: "red", fontSize: "11px" }}
            >
              *required
            </span>
          )}
        </span>
        <input
          className="createAccount-confirmPassword"
          type="password"
          placeholder="confirm password"
          autoComplete="off"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => {
              const password = getValues("password");
              if (value === password) {
                return true;
              }

              return false;
            },
          })}
        />
        {watchAll.password !== watchAll.confirmPassword && (
          <p
            className="createAccount-label fs-12 fw-300 mt-1"
            style={{ color: "red" }}
          >
            *Passwords do not match
          </p>
        )}
      </div>
      <button className="createAccount-button fw-600" ref={buttonRef}>
        Create Account
      </button>
      <NavLink to="/login">
        <span className="signin-prompt fw-600">Sign in instead</span>
      </NavLink>
    </form>
  );
}
