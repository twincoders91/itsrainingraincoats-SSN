import React, { useEffect, useRef, useState } from "react";

export default function CreateAccountWorker2(props) {
  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [residency, setResidency] = useState("");
  const [nric, setNric] = useState("");
  const [address, setAddress] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dormitory, setDormitory] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const buttonRef = useRef();

  const handleSalutationChange = (event) => {
    setSalutation(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handleResidencyChange = (event) => {
    setResidency(event.target.value);
  };

  const handleNricChange = (event) => {
    setNric(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleUnitNumberChange = (event) => {
    setUnitNumber(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleDormitoryChange = (event) => {
    setDormitory(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  useEffect(() => {
    if (
      salutation &&
      name &&
      nationality &&
      residency &&
      address &&
      unitNumber &&
      postcode &&
      dormitory &&
      contactNumber
    ) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [
    salutation,
    name,
    nationality,
    residency,
    address,
    unitNumber,
    postcode,
    dormitory,
    contactNumber,
  ]);

  return (
    <div className="col">
      <span className="createAccount-label createAccount-title mb-1 fw-700">
        Account Created
      </span>
      <span className="createAccount-subtitle mb-2">
        Welcome to ItsRainningRaincoats! Your account has been created.
      </span>
      <span className="createAccount-label createAccount-subsubtitle mb-4">
        Step 2 of 3
      </span>
      <span className="createAccount-label createAccount-title mb-2 fw-700">
        Profile Details
      </span>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Salutation
      </span>
      <select
        className="createAccount-dropdown mb-2"
        onChange={handleSalutationChange}
      >
        <option value="0" selected disabled>
          - Select Salutation -
        </option>
        <option value="mr">Mr</option>
        <option value="ms">Ms</option>
        <option value="mrs">Mrs</option>
        <option value="dr">Dr</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Name (as per NRIC/FIN/Passport)
      </span>
      <input
        className="createAccount-input mb-2"
        type="text"
        onChange={handleNameChange}
      />

      <span className="createAccount-label createAccount-subtitle mb-1">
        Nationality
      </span>
      <select
        className="createAccount-dropdown mb-2"
        onChange={handleNationalityChange}
      >
        <option value="0" selected disabled>
          - Select Country -{" "}
        </option>
        <option value="singapore">Singapore</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Resident Status
      </span>
      <select
        className="createAccount-dropdown mb-2"
        onChange={handleResidencyChange}
      >
        <option value="0" selected disabled>
          - Select Status -
        </option>
        <option value="citizen">Citizen</option>
      </select>
      <span className="createAccount-label createAccount-subtitle mb-1">
        NRIC/FIN/Passport No.
      </span>
      <input
        className="createAccount-input mb-2"
        type="text"
        placeholder="DISABLED"
        onChange={handleNricChange}
        disabled
      />
      <span className="createAccount-label createAccount-subtitle mb-1">
        Address
      </span>
      <input
        className="createAccount-input mb-2"
        type="text"
        onChange={handleAddressChange}
      />
      <div className="grid gc-2">
        <span className="createAccount-label createAccount-subtitle mb-1">
          Unit No.
        </span>
        <span className="createAccount-label createAccount-subtitle mb-1">
          Postcode
        </span>
        <input
          className="createAccount-input mb-2"
          type="text"
          onChange={handleUnitNumberChange}
        />
        <input
          className="createAccount-input mb-2"
          type="text"
          onChange={handlePostcodeChange}
        />
      </div>
      <span className="createAccount-label createAccount-subtitle mb-1">
        Dormitory Name
      </span>
      <input
        className="createAccount-input mb-2"
        type="text"
        onChange={handleDormitoryChange}
      />
      <span className="createAccount-label createAccount-subtitle mb-1">
        Contact No.
      </span>
      <input
        className="createAccount-input mb-2"
        type="text"
        onChange={handleContactNumberChange}
      />
      <button
        className="createAccount-button mt-2 mb-4"
        onClick={() => props.setCurrentPage("worker3")}
        ref={buttonRef}
      >
        Next
      </button>
      <div className="row">
        <svg width="10px" height="10px" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--grey1))" />
        </svg>
      </div>
    </div>
  );
}
