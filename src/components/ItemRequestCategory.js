import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as Add } from "../assets/add.svg";
import ItemRequestItemButton from "./ItemRequestItemButton";

export default function ItemRequestCategory(props) {
  const [selectedItem, setSelectedItem] = useState("");
  const buttonRef = useRef();

  const items = props.items.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handleButtonClick = () => {
    if (buttonRef.current.getAttribute("disabled") !== null) {
      return;
    }
    props.setCurrentPage("cart");
  };

  useEffect(() => {
    if (selectedItem) {
      buttonRef.current.removeAttribute("disabled", "");
      buttonRef.current.classList.add("button-active");
    } else {
      buttonRef.current.setAttribute("disabled", "");
      buttonRef.current.classList.remove("button-active");
    }
  }, [selectedItem]);

  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 1 of 3 - Select item(s)
      </span>
      <span className="request-titleText request-header mb-4">
        What item(s) would you like to request?
      </span>
      <div className="grid gc-4 mb-8">
        {items.map((element) => {
          return (
            <ItemRequestItemButton
              key={Math.random()}
              {...element}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          );
        })}
      </div>

      <button
        className="row request-button mt-2 mb-4 px-2 py-1"
        onClick={handleButtonClick}
        ref={buttonRef}
      >
        <Add />
        <span className="ml-1">Add to Request</span>
      </button>
      <div className="row">
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
