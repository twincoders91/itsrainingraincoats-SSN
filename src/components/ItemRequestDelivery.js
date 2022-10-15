//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                                                                      //
//                  To refactor to use an array to display the items                    //
//                                                                                      //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import datacard from "../assets/datacard.svg";

export default function ItemRequestDelivery() {
  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 2 of 3 - Select delivery method
      </span>
      <span className="request-titleText request-header mb-2">
        Selected item(s)
      </span>
      <div className="request-item-card-container mb-2">
        <div className="row request-item-card-details justify-sb mb-1">
          <img src={datacard} alt="" height="32px" />
          <div className="col" style={{ flex: 1 }}>
            <span className="request-subtitleText request-header fw-600 ml-2">
              Data Card
            </span>
            <span className="request-subsubtitleText request-header ml-2">
              Delivery in 7 days
            </span>
          </div>
          <span className="request-subsubtitleText request-item-card-delete fw-600 ml-2">
            Delete
          </span>
        </div>
      </div>
      <div className="spacer mb-2"></div>
      <span className="request-titleText request-header mb-4">
        How would you like to receive the item?
      </span>
      <div className="grid gc-2">
        <button className="row request-delivery-button" onClick={() => {}}>
          <span className="request-titleText fw-600">Delivery</span>
        </button>
        <button className="row request-delivery-button" onClick={() => {}}>
          <span className="request-titleText fw-600">Pickup at inspIRRe</span>
        </button>
      </div>
      <div className="spacer" style={{ height: "116px" }}></div>
      <button className="row request-button px-2 py-1" onClick={() => {}}>
        Next
      </button>
      <div className="row mt-4">
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
