import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "./Button";

export default function LanguageSelect() {
  const [activeButton, setActiveButton] = useState("");

  return (
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
      <NavLink to="/login">
        <button className="language-enter-button">Enter</button>
      </NavLink>
    </div>
  );
}
