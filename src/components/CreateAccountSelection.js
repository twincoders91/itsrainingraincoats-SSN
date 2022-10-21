import React from "react";

export default function CreateAccountSelection(props) {
  const handleWorkerClick = () => {
    props.setCurrentPage("worker1");
    props.setPersona("worker");
  };
  const handleDonorClick = () => {
    props.setCurrentPage("donor1");
    props.setPersona("donor");
  };

  return (
    <div className="col">
      <span className="createAccount-selection-title mb-4 fw-700">
        What would you like to do?
      </span>
      <button
        className="createAccount-option-button mb-1"
        onClick={() => handleWorkerClick()}
      >
        Request Item
      </button>
      <span className="createAccount-subtitle mb-4">
        for our worker friends
      </span>
      <button
        className="createAccount-option-button mb-1"
        onClick={() => handleDonorClick()}
      >
        Donate
      </button>
      <span className="createAccount-subtitle mb-4">give donation</span>
      <button className="createAccount-option-button mb-1">Volunteer</button>
      <span className="createAccount-subtitle mb-4">
        apply to become a volunteer
      </span>
    </div>
  );
}
