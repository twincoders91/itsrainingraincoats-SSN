/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ReactComponent as Pencil } from "../assets/pencil.svg";
import ItemRequestConfirmationItem from "./ItemRequestConfirmationItem";

export default function ItemRequestConfirmation(props) {
  const handleSubmitButtonClick = async () => {
    const url = "http://127.0.0.1:5001/profile/create";
    const res = await putItemRequest(url);

    if (res.status === "ok") {
      props.setCurrentPage("success");
      props.setPageHistory(["home"]);
    }
  };

  const putItemRequest = async (url, method = "GET", body = null) => {
    try {
      const res = await fetch(url, {
        method: method,
        body: {
          items: () => {
            props.selectedItems.map((element) => {
              return element.name;
            });
          }, // if this doesn't work, shift the map up and assign it to an array then let items = array
          deliveryMethod: props.deliveryMethod,
        }, // other details like requestId, workerId, status should be populated in the backend.
      });

      return res.json();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (props.currentPage === "confirm") {
      props.setHeaderTitle("Confirm Details");
    }
  }, [props.currentPage]);

  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 3 of 3 - Confirm delivery address
      </span>
      <span className="request-titleText request-header mb-2">
        Selected item(s)
      </span>
      <div className="request-item-card-container mb-2">
        {props.selectedItems.map((element) => {
          return (
            <ItemRequestConfirmationItem key={Math.random()} {...element} />
          );
        })}
      </div>
      <div className="spacer mb-2"></div>
      <span className="request-titleText request-header mb-2">
        {props.deliveryMethod === "delivery" ? "Delivery to" : "Self-Pickup"}
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
          <Pencil style={{ display: "" }} />
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
