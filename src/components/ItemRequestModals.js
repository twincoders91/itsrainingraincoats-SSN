import React from "react";
import ReactDOM from "react-dom";

import { NavLink } from "react-router-dom";

const Overlay = (props) => {
  const handleButtonClick = () => {
    props.setDisplayModal(false);
  };

  return (
    <div className="request-modal-overlay row">
      <div className="request-modal-container col">
        <h1 style={{ color: "red" }}>Warning</h1>
        <p>You are returning to the home page.</p>
        <p>Items not added to cart will be discarded.</p>
        <div className="row w-100 justify-sa mt-2">
          <NavLink to="/home">
            <button onClick={handleButtonClick}>Go Home</button>
          </NavLink>
          <button onClick={handleButtonClick}>Cancel</button>
        </div>
      </div>
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
