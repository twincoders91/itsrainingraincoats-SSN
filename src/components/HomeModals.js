import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from "react-router-dom";
import { ReactComponent as Close } from "../assets/cross.svg";
import { ReactComponent as Select } from "../assets/select.svg";
import { ReactComponent as Delivery } from "../assets/delivery.svg";
import { ReactComponent as File } from "../assets/file.svg";
import { ReactComponent as Schedule } from "../assets/schedule.svg";

const RequestGuide = (props) => {
  return (
    <div className="request-modal-guide-container col">
      <Close
        className="request-modal-close"
        onClick={props.handleButtonClick}
      />
      <p className="request-titleText mt-4 mb-2">How to apply for items?</p>
      <div className="row" style={{ marginBottom: "4px" }}>
        <Select className="mr-1" />
        <p className="request-subtitleText fw-600">Step 1</p>
      </div>
      <span className="request-subtitleText mb-2">
        Choose item (max. 3 items)
      </span>
      <div className="row" style={{ marginBottom: "4px" }}>
        <Delivery className="mr-1" />
        <p className="request-subtitleText fw-600">Step 2</p>
      </div>
      <span className="request-subtitleText mb-2">Choose delivery method</span>
      <div className="row" style={{ marginBottom: "4px" }}>
        <File className="mr-1" />
        <p className="request-subtitleText fw-600">Step 3</p>
      </div>
      <span className="request-subtitleText mb-2">
        Confirm address and contact information
      </span>
      <div className="row" style={{ marginBottom: "4px" }}>
        <Schedule className="mr-1" />
        <p className="request-subtitleText fw-600">Step 4</p>
      </div>
      <span className="request-subtitleText mb-4">
        Schedule pick-up from inspIRRe
      </span>

      <NavLink to="/item-request">
        <button className="button-active" onClick={props.handleButtonClick}>
          Start
        </button>
      </NavLink>

      <span className="request-subsubtitleText mt-4">
        Some items have a longer waiting period and require extra screening
        process.
      </span>
    </div>
  );
};

const Overlay = (props) => {
  const handleButtonClick = () => {
    props.setDisplayModal(false);
  };

  return (
    <div className="request-modal-overlay row">
      <RequestGuide
        setDisplayModal={props.setDisplayModal}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

const HomeModals = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay setDisplayModal={props.setDisplayModal} />,
        document.querySelector("#home-modal")
      )}
    </>
  );
};

export default HomeModals;
