/* eslint-disable react-hooks/exhaustive-deps */
//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                                                                      //
//                  To refactor to use an array to display the items                    //
//                                                                                      //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useRef, useState } from "react";

import Button from "./Button";
import ItemRequestDeliveryItem from "./ItemRequestDeliveryItem";

export default function ItemRequestDelivery(props) {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const buttonRef = useRef();

  const handleNextButtonClick = () => {
    props.setCurrentPage("confirm");
    props.setPageHistory((prevState) => ["delivery", ...prevState]);
    props.setDeliveryMethod(deliveryMethod);
  };

  useEffect(() => {
    if (deliveryMethod) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [deliveryMethod]);

  useEffect(() => {
    if (props.currentPage === "delivery") {
      props.setHeaderTitle("Delivery Method");
    }
  }, [props.currentPage]);

  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 2 of 3 - Select delivery method
      </span>
      <span className="request-titleText request-header mb-2">
        Selected item(s)
      </span>
      <div className="request-item-card-container mb-2">
        {props.selectedItems.map((element, index) => {
          return (
            <ItemRequestDeliveryItem
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
      <div className="spacer mb-2"></div>
      <span className="request-titleText request-header mb-4">
        How would you like to receive the item?
      </span>
      <div className="grid gc-2">
        <Button
          className="row request-delivery-button"
          id="delivery"
          activeButton={deliveryMethod}
          setActiveButton={setDeliveryMethod}
        >
          <span className="request-titleText fw-600">Delivery</span>
        </Button>
        <Button
          className="row request-delivery-button"
          id="pickup"
          activeButton={deliveryMethod}
          setActiveButton={setDeliveryMethod}
        >
          <span className="request-titleText fw-600">Pickup at inspIRRe</span>
        </Button>
      </div>
      <div className="spacer" style={{ height: "116px" }}></div>
      <button
        className="row request-button px-2 py-1"
        onClick={handleNextButtonClick}
        ref={buttonRef}
      >
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
