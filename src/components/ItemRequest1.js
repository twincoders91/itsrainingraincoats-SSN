import React from "react";

export default function ItemRequest1() {
  return (
    <div className="col">
      <span>Step 1 of 3 - Select item(s)</span>
      <span>What item(s) would you like to request?</span>
      <div className="grid">
        <div className="col">
          {/* imagehere */}
          <span>Food & Drinks</span>
        </div>
        <div className="col">
          {/* imagehere */}
          <span>Personal Care</span>
        </div>
        <div className="col">
          {/* imagehere */}
          <span>Clothing</span>
        </div>
        <div className="col">
          {/* imagehere */}
          <span>Electronics</span>
        </div>
        <div className="col">
          {/* imagehere */}
          <span>Appliances</span>
        </div>
        <div className="col">
          {/* imagehere */}
          <span>Sports & Games</span>
        </div>
      </div>
      <span>Item not found?</span>
      <input
        className="requset-input"
        type="text"
        placeholder="Enter name of the item"
      />
      <span>or</span>
      <input className="hidden" id="request-picture-upload" type="file"></input>
      <label htmlFor="request-picture-upload">
        {/* imagehere */}
        <span>Add Photo</span>
      </label>
    </div>
  );
}
