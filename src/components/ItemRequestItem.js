//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
//                                                                                      //
//                  To refactor to use a model to display the items                     //
//                                                                                      //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useRef, useState } from "react";

import plug from "../assets/plug.svg";
import datacard from "../assets/datacard.svg";
import powerbank from "../assets/powerbank.svg";
import mobilephone from "../assets/mobilephone.svg";
import earbuds from "../assets/earbuds.svg";
import laptop from "../assets/laptop.svg";
import add from "../assets/add.svg";

export default function ItemRequestItem(props) {
  const buttonRef = useRef();
  return (
    <div className="col">
      <span className="request-subsubtitleText request-header mb-2">
        Step 1 of 3 - Select item(s)
      </span>
      <span className="request-titleText request-header mb-4">
        What item(s) would you like to request?
      </span>
      <div className="grid gc-4 mb-8">
        <div className="col">
          <button className="row request-icon-button mb-1">
            <img src={plug} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Extension Cord
          </span>
        </div>
        <div className="col">
          <button className="row request-icon-button mb-1">
            <img src={datacard} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Data Card
          </span>
        </div>
        <div className="col">
          <button className="row request-icon-button mb-1">
            <img src={powerbank} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Portable Power Bank
          </span>
        </div>
        <div className="col">
          <button className="row request-icon-button mb-1">
            <img src={mobilephone} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Smartphone
          </span>
        </div>
        <div className="col">
          <button className="row request-icon-button mb-1">
            <img src={earbuds} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Earphones
          </span>
        </div>
        <div className="col">
          <button className="row request-icon-button mb-1">
            <img src={laptop} alt="" />
          </button>
          <span className="request-subsubtitleText request-icon-text fw-600">
            Laptop
          </span>
        </div>
      </div>

      <button
        className="row request-addItem-button mt-2 mb-4"
        onClick={() => {}}
        ref={buttonRef}
      >
        <img src={add} alt="" />
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
