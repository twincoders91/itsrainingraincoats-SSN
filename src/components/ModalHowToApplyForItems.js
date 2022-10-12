import React from "react";
import { UilTimes } from "@iconscout/react-unicons";
import { UilPen } from "@iconscout/react-unicons";

const ModalHowToApplyForItems = ({ setOpenModalApplyItems }) => {
  return (
    <>
      <div className="modal-howtoapplyforitems-container">
        <div className="close-modal-header">
          <UilTimes
            className="close-button"
            onClick={() => {
              setOpenModalApplyItems(false);
            }}
          />
        </div>
        <div className="modal-howtoapplyforitems-body-box">
          <h1>How to apply for items?</h1>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <UilPen className="steps-icon" />
              <h2 className="steps-font">Step 1</h2>
            </div>
            <p>Choose item (max. 3 items)</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <UilPen className="steps-icon" />
              <h2 className="steps-font">Step 2</h2>
            </div>
            <p>Choose item (max. 3 items)</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <UilPen className="steps-icon" />
              <h2 className="steps-font">Step 3</h2>
            </div>
            <p>Choose item (max. 3 items)</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <UilPen className="steps-icon" />
              <h2 className="steps-font">Step 4</h2>
            </div>
            <p>Choose item (max. 3 items)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalHowToApplyForItems;
