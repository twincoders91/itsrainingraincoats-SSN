import React from "react";

import uploadpicture from "../assets/uploadpicture.svg";
import ItemRequestCategoryButton from "./ItemRequestCategoryButton";

export default function ItemRequestAdd(props) {
  const categories = Object.keys(props.items).sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 1 of 3 - Select item(s)
      </span>
      <span className="request-titleText request-header mb-4">
        What item(s) would you like to request?
      </span>
      <div className="grid gc-3 mb-4">
        {categories.map((element) => {
          return (
            <ItemRequestCategoryButton
              key={Math.random()}
              {...props.items[element]}
              category={element}
              setCurrentPage={props.setCurrentPage}
              setCategoryItems={props.setCategoryItems}
            />
          );
        })}
      </div>
      <span className="request-titleText request-header mb-2">
        Item not found?
      </span>
      <input
        className="mb-2"
        type="text"
        placeholder="Enter name of the item"
      />
      <span className="request-subtitleText mb-2">or</span>
      <input className="hidden" id="request-picture-upload" type="file"></input>
      <label
        className="request-upload row mb-4"
        htmlFor="request-picture-upload"
      >
        <img src={uploadpicture} alt="" />
        <span className="request-titleText fw-600 ml-1">Add Photo</span>
      </label>
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
