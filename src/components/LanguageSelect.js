import React from "react";

export default function LanguageSelect() {
  return (
    <div className="col">
      <span className="mt-4 mb-4">Please select a language</span>
      <button className="language-option-button mb-2 button-active">
        English
      </button>
      <button className="language-option-button mb-2">বাংলা</button>
      <button className="language-option-button mb-2">தமிழ்</button>
      <button className="language-option-button">简体中文</button>
      <button className="language-enter-button ">Enter</button>
    </div>
  );
}
