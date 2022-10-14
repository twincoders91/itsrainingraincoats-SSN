import React from "react";
import instructionsImage1 from "../../assets/instructionsImage1.svg";
import greycircle from "../../assets/greycircle.png";
import bluecircle from "../../assets/bluecircle.png";
import closebutton from "../../assets/closebutton.png";

const Instruction1 = (props) => {
  const { setopenModalDonateInstructions, setDonateInstruction2 } = props;

  const handleInstructionChange1 = () => {
    setDonateInstruction2(true);
    setopenModalDonateInstructions(false);
  };

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
            <h1 className="instructions-h1-16 mb-2">
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
            <button
              className="instructions-button-next"
              onClick={() => {
                handleInstructionChange1();
              }}
            >
              Next
            </button>
          </div>
          <div className="instructions-scroller">
            <img
              src={bluecircle}
              alt="scrollercircles"
              className="scroller-circles mr-2"
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

export default Instruction1;
