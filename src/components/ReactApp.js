import React, { useState } from "react";
import Header from "../Header";
import NavBar from "../navbar/NavBar";

import "./andrewStyles.css";
import CreateAccountSelection from "./CreateAccountSelection";
import CreateAccountWorker1 from "./CreateAccountWorker1";
import LanguageSelect from "./LanguageSelect";
import Login from "./Login";

export default function ReactApp() {
  return (
    <div className="main-app-container">
      <div className="main-header-container">
        <Header />
      </div>
      <div className="main-body-container">
        {/* <LanguageSelect /> */}
        {/* <Login /> */}
        {/* <CreateAccountSelection /> */}
        <CreateAccountWorker1 />
      </div>
      <div className="main-navbar">{/* <NavBar /> */}</div>
    </div>
  );
}
