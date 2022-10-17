import React from "react";
import datacard from "../assets/datacard.svg";
import { ReactComponent as Pencil } from "../assets/pencil.svg";

export default function ItemRequestConfirmation(props) {
  const handleSubmitButtonClick = () => {
    props.setCurrentPage("success");
  };
  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 3 of 3 - Confirm delivery address
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
        </div>
      </div>
      <div className="spacer mb-2"></div>
      <span className="request-titleText request-header mb-2">
        Delivery to / Self-Pickup
      </span>

      <div className="request-delivery-details px-2 py-2">
        <p className="request-header">
          <span className="request-subsubtitleText fw-600">{`\<Salutation\>`}</span>
          <span className="request-subsubtitleText fw-600">{`\<Name\> | `}</span>
          <span className="request-subsubtitleText fw-600">{`\<Contact Number\>`}</span>
        </p>
        <p className="request-subsubtitleText request-header">{`\<Address\>`}</p>
        <p className="request-subsubtitleText request-header">{`\<Postcode\>`}</p>
        <p className="request-subsubtitleText request-header">{`\<Dormitory name\>`}</p>
        <div className="request-delivery-icon mr-1 mb-1">
          <Pencil />
        </div>
      </div>

      <div className="spacer" style={{ height: "116px" }}></div>
      <button
        className="row request-button button-active px-2 py-1"
        onClick={handleSubmitButtonClick}
      >
        Submit
      </button>
      <div className="row mt-4">
        <svg width="10px" height="10px" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
        <svg width="10px" height="10px" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="rgb(var(--blue))" />
        </svg>
      </div>
    </div>
  );
}
