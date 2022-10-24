import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from "react-router-dom";
import { ReactComponent as Close } from "../assets/cross.svg";
import { ReactComponent as Select } from "../assets/select.svg";
import { ReactComponent as Delivery } from "../assets/delivery.svg";
import { ReactComponent as File } from "../assets/file.svg";
import { ReactComponent as Schedule } from "../assets/schedule.svg";

const DiscardWarning = (props) => {
  return (
    <div className="request-modal-discard-container col">
      <h1 className="mb-2" style={{ color: "red" }}>
        Warning
      </h1>
      <p className="request-subtitleText mb-2">
        You are returning to the home page.
      </p>
      <p className="request-subtitleText">
        Items <span className="fw-600">not</span> added to cart{" "}
        <span className="fw-600">will</span> be discarded.
      </p>
      <div className="row w-100 justify-sa mt-4">
        <NavLink to="/home">
          <button onClick={props.handleButtonClick}>Go Home</button>
        </NavLink>
        <button onClick={props.handleButtonClick}>Cancel</button>
      </div>
    </div>
  );
};

const Overlay = (props) => {
  const handleButtonClick = () => {
    props.setDisplayModal(false);
  };

  return (
    <div className="request-modal-overlay row">
      <DiscardWarning
        setDisplayModal={props.setDisplayModal}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

const ItemRequestModals = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay setDisplayModal={props.setDisplayModal} />,
        document.querySelector("#item-request-modal")
      )}
    </>
  );
};

export default ItemRequestModals;
