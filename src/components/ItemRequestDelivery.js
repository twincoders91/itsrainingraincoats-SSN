import React from "react";
import datacard from "../assets/datacard.svg";

export default function ItemRequestDelivery() {
  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 2 of 3 - Select item(s)
      </span>
      <span className="request-titleText request-header mb-2">
        Selected item(s)
      </span>
      <div className="request-item-card-container mb-2">
        <div className="row request-item-card-details justify-sb mb-1">
          <img src={datacard} alt="" height="32px" />
          <span
            className="request-subtitleText fw-600 ml-2"
            style={{ flex: 1 }}
          >
            Data Card
          </span>
        </div>
        <div className="row justify-sb">
          <span className="request-subsubtitleText fw-600 ml-2">Delete</span>
          <span className="request-subsubtitleText mr-2">
            Delivery in 7 days
          </span>
        </div>
      </div>
      <div className="spacer mb-2"></div>
      <button className="row request-addAnother-button" onClick={() => {}}>
        <span className="ml-1">Add Another</span>
      </button>
      <div className="spacer" style={{ height: "192px" }}></div>
      <button
        className="row request-proceedDelivery-button button-active"
        onClick={() => {}}
      >
        Proceed to Delivery
      </button>
      <div className="row mt-4">
        <svg width="10px" height="10px" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--grey1))" />
        </svg>
        <svg width="10px" height="10px" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--grey1))" />
        </svg>
      </div>
    </div>
  );
}
