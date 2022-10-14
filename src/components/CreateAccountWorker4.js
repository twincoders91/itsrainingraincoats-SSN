import React from "react";
import { NavLink } from "react-router-dom";

export default function CreateAccountWorker4() {
  return (
    <div className="col">
      <span className="createAccount-title mt-4 mb-2">Successful</span>
      <span className="createAccount-subtitle">
        You can start requesting for items now!
      </span>
      <div className="spacer" style={{ height: "315px" }}></div>
      <NavLink to="/home">
        <button className="createAccount-enter-button fw-600">Enter</button>
      </NavLink>
    </div>
  );
}
