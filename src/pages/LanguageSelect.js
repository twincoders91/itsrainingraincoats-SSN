import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink, Navigate } from "react-router-dom";

import Header from "../Header";
import Button from "../components/Button";
import Context from "../context/context";

export default function LanguageSelect() {
  // to useContext
  const context = useContext(Context);

  const [activeButton, setActiveButton] = useState("");
  const buttonRef = useRef();

  useEffect(() => {
    if (activeButton) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [activeButton]);

  return (
    <>
      {/* jump to Home page if user has already logged in, skip language select and login page */}
      {localStorage.refreshToken && <Navigate to="/home" />}

      <div className="main-header-container">
        <Header />
      </div>
      <div className="main-body-container">
        <div className="col">
          <span className="mt-4 mb-4 fw-300">Please select a language</span>
          <Button
            className="language-option-button mb-2"
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            id="en"
          >
            English
          </Button>
          <Button
            className="language-option-button mb-2"
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            id="bn"
          >
            বাংলা
          </Button>
          <Button
            className="language-option-button mb-2"
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            id="ta"
          >
            தமிழ்
          </Button>
          <Button
            className="language-option-button"
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            id="zh"
          >
            简体中文
          </Button>
          <div className="spacer" style={{ height: "96px" }}></div>
          <NavLink to="/login">
            <button className="language-enter-button" ref={buttonRef}>
              Enter
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
