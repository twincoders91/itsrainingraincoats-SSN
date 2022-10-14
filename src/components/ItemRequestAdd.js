//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                                                                      //
//                  To refactor to use a model to display the items                     //
//                                                                                      //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

import React from "react";

import meals from "../assets/meals.svg";
import personalcare from "../assets/personalcare.svg";
import clothes from "../assets/clothes.svg";
import mobilephone from "../assets/mobilephone.svg";
import microwave from "../assets/microwave.svg";
import bicycle from "../assets/bicycle.svg";
import uploadpicture from "../assets/uploadpicture.svg";

export default function ItemRequest1() {
  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 1 of 3 - Select item(s)
      </span>
      <span className="request-titleText request-header mb-4">
        What item(s) would you like to request?
      </span>
      <div className="grid gc-3 mb-4">
        <div className="col">
          <button className="flex request-icon-button mb-1">
            <img src={meals} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Food & Drinks
          </span>
        </div>
        <div className="col">
          <button className="flex request-icon-button mb-1">
            <img src={personalcare} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Personal Care
          </span>
        </div>
        <div className="col">
          <button className="flex request-icon-button mb-1">
            <img src={clothes} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Clothing
          </span>
        </div>
        <div className="col">
          <button className="flex request-icon-button mb-1">
            <img src={mobilephone} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Electronics
          </span>
        </div>
        <div className="col">
          <button className="flex request-icon-button mb-1">
            <img src={microwave} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Appliances
          </span>
        </div>
        <div className="col">
          <button className="flex request-icon-button mb-1">
            <img src={bicycle} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Sports & Games
          </span>
        </div>
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
