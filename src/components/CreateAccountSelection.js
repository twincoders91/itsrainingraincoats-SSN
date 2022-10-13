import React from "react";

export default function CreateAccountSelection() {
  return (
    <div className="col">
      <span className="createAccount-selection-title">
        What would you like to do?
      </span>
      <button className="createAccount-option-button">Request Item</button>
      <span className="createAccount-subtitle">for our worker friends</span>
      <button className="createAccount-option-button">Donate</button>
      <span className="createAccount-subtitle">give donation</span>
      <button className="createAccount-option-button">Volunteer</button>
      <span className="createAccount-subtitle">
        apply to become a volunteer
      </span>
    </div>
  );
}
