/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ReactComponent as Add } from "../assets/add.svg";

import ItemRequestCartItem from "./ItemRequestCartItem";

export default function ItemRequestCart(props) {
  const handleAddAnotherButtonClick = () => {
    props.setCurrentPage("addItem");
  };

  const handleProceedToDeliveryButtonClick = () => {
    props.setCurrentPage("delivery");
  };

  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 1 of 3 - Select item(s)
      </span>
      <span className="request-titleText request-header mb-1">
        Selected item(s)
      </span>
      <span className="request-subtitleText request-header mb-2">
        (Choose max 3 items)
      </span>
      <div className="request-item-card-container mb-2">
        {props.selectedItems.map((element, index) => {
          return (
            <ItemRequestCartItem
              key={Math.random()}
              {...element}
              index={index}
              selectedItems={props.selectedItems}
              setSelectedItems={props.setSelectedItems}
              setCurrentPage={props.setCurrentPage}
            />
          );
        })}
      </div>
      <button
        className="row request-addAnother-button"
        onClick={handleAddAnotherButtonClick}
      >
        <Add />
        <span className="ml-1">Add Another</span>
      </button>
      <div className="spacer" style={{ height: "192px" }}></div>
      <button
        className="row request-button button-active px-2 py-1"
        onClick={handleProceedToDeliveryButtonClick}
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
