import React, { useEffect } from "react";
import closebutton from "../assets/closebutton.png";
import instructionsImage1 from "../assets/instructionsImage1.png";
import bluecircle from "../assets/bluecircle.png";
import greycircle from "../assets/greycircle.png";

const ModalDonateInstructions = (props) => {
  const { openModalDonateInstructions, setopenModalDonateInstructions } = props;

  if (!openModalDonateInstructions) return null;

  return (
    <div className="overlay">
      <div className="donate-instructions-container">
        <div className="close-modal-header">
          <img
            src={closebutton}
            className="close-button"
            alt="closebutton"
            onClick={() => {
              setopenModalDonateInstructions(false);
            }}
          />
        </div>
        <div className="instructions-container">
          <div className="instructions-top-section">
            <h1 className="instructions-h1-16">
              Thank you for donating to ItsRainingRaincoats
            </h1>
            <p className="howtodonate-p1-14">
              We do not have any minimum amount! Any donation can help our
              workers directly.
            </p>
          </div>
          <div className="instructionsImage1-container">
            <img src={instructionsImage1} alt="instructionimages" />
          </div>
          <div className="instructionsButton-container">
            <button className="instructions-button-next">Next</button>
          </div>
          <div className="instructions-scroller">
            <img
              src={bluecircle}
              alt="scrollercircles"
              className="scroller-circles"
            />
            <img
              src={greycircle}
              alt="scrollercircles"
              className="scroller-circles"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDonateInstructions;
