import React from "react";

export default function CreateAccountWorker2() {
  return (
    <div className="col">
      <span className="createAccount-label createAccount-title mb-1">
        Account Created
      </span>
      <span className="createAccount-subtitle mb-2">
        Welcome to ItsRainningRaincoats! Your account has been created.
      </span>
      <span className="createAccount-label createAccount-subsubtitle mb-4">
        Step 2 of 3
      </span>
      <span className="createAccount-label createAccount-title mb-2">
        Profile Details
      </span>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Salutation
      </span>
      <select className="createAccount-dropdown mb-2">
        <option value="0">Mr.</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Name (as per NRIC/FIN/Passport)
      </span>
      <input className="createAccount-input mb-2" type="text" />

      <span className="createAccount-label createAccount-subtitle mb-1">
        Nationality
      </span>
      <select className="createAccount-dropdown mb-2">
        <option value="0">- Select Country - </option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Resident Status
      </span>
      <select className="createAccount-dropdown mb-2">
        <option value="0">- Select Status -</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        NRIC/FIN/Passport No.
      </span>
      <input className="createAccount-input mb-2" type="text" />
      <span className="createAccount-label createAccount-subtitle mb-1">
        Address
      </span>
      <input className="createAccount-input mb-2" type="text" />
      <div className="grid gc-2">
        <span className="createAccount-label createAccount-subtitle mb-1">
          Unit No.
        </span>
        <span className="createAccount-label createAccount-subtitle mb-1">
          Postcode
        </span>
        <input className="createAccount-input mb-2" type="text" />
        <input className="createAccount-input mb-2" type="text" />
      </div>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Dormitory Name
      </span>
      <input className="createAccount-input mb-2" type="text" />
      <span className="createAccount-label createAccount-subtitle mb-1">
        Contact No.
      </span>
      <input className="createAccount-input mb-2" type="text" />
      <button className="createAccount-button mt-2 mb-4">Next</button>
      <div className="row">
        <svg width="10px" height="10px" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="#E6E6E6" />
        </svg>
      </div>
    </div>
  );
}
