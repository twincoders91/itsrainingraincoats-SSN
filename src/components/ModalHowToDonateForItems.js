import React from "react";
import closebutton from "../assets/closebutton.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import step6 from "../assets/step6.png";

const ModalHowToApplyForItems = (props) => {
  const { setOpenModalApplyItems, openModalApplyItems } = props;

  if (!openModalApplyItems) return null;
  return (
    <div className="overlay">
      <div className="modal-howtoapplyforitems-container">
        <div className="close-modal-header">
          <img
            src={closebutton}
            className="close-button"
            alt="closebutton"
            onClick={() => {
              setOpenModalApplyItems(false);
            }}
          />
        </div>
        <div className="modal-howtoapplyforitems-body-box">
          <h1 className="howtodonate-h1-16">How to donate preloved items?</h1>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <img src={step1} className="steps-icon" alt="stepicons" />
              <h2 className="steps-font">Step 1</h2>
            </div>
            <p className="howtodonate-p1-14">Prepare preloved items</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <img src={step2} className="steps-icon" alt="stepicons" />
              <h2 className="steps-font">Step 2</h2>
            </div>
            <p className="howtodonate-p1-14">Find nearest drop-off point</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <img src={step3} className="steps-icon" alt="stepicons" />
              <h2 className="steps-font">Step 3</h2>
            </div>
            <p className="howtodonate-p1-14">Fill out the screening form</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <img src={step4} className="steps-icon" alt="stepicons" />
              <h2 className="steps-font">Step 4</h2>
            </div>
            <p className="howtodonate-p1-14">Wait for drop-off approval</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <img src={step5} className="steps-icon" alt="stepicons" />
              <h2 className="steps-font">Step 5</h2>
            </div>
            <p className="howtodonate-p1-14">Schedule drop-off approval</p>
          </div>
          <div className="steps-boxes">
            <div className="steps-individual-box">
              <img src={step6} className="steps-icon" alt="stepicons" />
              <h2 className="steps-font">Step 6</h2>
            </div>
            <p className="howtodonate-p1-14">
              Drop-off the items to our volunteers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHowToApplyForItems;
