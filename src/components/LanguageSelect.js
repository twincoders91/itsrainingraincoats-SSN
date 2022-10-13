import React from "react";

export default function LanguageSelect() {
  return (
    <div className="col">
      <span className="language-select-title">Please select a language</span>
      <button className="language-option-button button-active">English</button>
      <button className="language-option-button">বাংলা</button>
      <button className="language-option-button">தமிழ்</button>
      <button className="language-option-button">简体中文</button>
      <button className="language-enter-button ">Enter</button>
    </div>
  );
}
