import React from "react";
import closebutton from "../../assets/closebutton.png";

import instructionsImage2a from "../../assets/instructionsImage2a.svg";
import instructionsImage2b from "../../assets/instructionsImage2b.svg";
import instructionsImage2c from "../../assets/instructionsImage2c.svg";
import bluecircle from "../../assets/bluecircle.png";
import backarrow from "../../assets/backarrow.svg";

const Instruction2 = (props) => {
  const {
    setDonateInstruction2,
    setopenModalDonateInstructions,
    setDonateInstruction3,
  } = props;

  const handleInstructionBack1 = () => {
    setopenModalDonateInstructions(true);
    setDonateInstruction2(false);
  };
  const handleInstructionChange2 = () => {
    setDonateInstruction2(false);
    setDonateInstruction3(true);
  };

  return (
    <div>
      <div className="overlay">
        <div className="donate-instructions-container">
          <div className="close-modal-header">
            <img
              src={closebutton}
              className="close-button"
              alt="closebutton"
              onClick={() => {
                setDonateInstruction2(false);
              }}
            />
          </div>
          <div className="instructions-container">
            <div className="instructions-top-section">
              <h1 className="instructions-h1-16">What can you donate?</h1>
            </div>
            <div className="instructionsImage2-container ml-2 mr-2 mb-4">
              <img src={instructionsImage2a} alt="instructionimages" />
              <div className="instructions2-font-box ml-2">
                <span className="instructions2-font1 mb-1">Meals</span>
                <span className="instructions2-font2 ">
                  meal or snack donations offer a change in routine for them.
                </span>
              </div>
            </div>
            <div className="instructionsImage2-container ml-2 mr-2 mb-4">
              <img src={instructionsImage2b} alt="instructionimages" />
              <div className="instructions2-font-box ml-2">
                <span className="instructions2-font1 mb-1">Care Packs</span>
                <span className="instructions2-font2 ">
                  offer some much needed support for our workers.
                </span>
              </div>
            </div>
            <div className="instructionsImage3-container ml-2 mr-2">
              <img src={instructionsImage2c} alt="instructionimages" />
              <div className="instructions2-font-box ml-2">
                <span className="instructions2-font1 mb-1">Preloved Items</span>
                <span className="instructions2-font2 ">
                  help migrant workers improve their daily lives.
                </span>
              </div>
            </div>
            <div className="instructionsButton-container">
              <img
                src={backarrow}
                alt="backarrow"
                className="backarrowIcon"
                onClick={() => {
                  handleInstructionBack1();
                }}
              ></img>
              <button
                className="instructions-button-next"
                onClick={() => {
                  handleInstructionChange2();
                }}
              >
                Start Donating
              </button>
            </div>
            <div className="instructions-scroller">
              <img
                src={bluecircle}
                alt="scrollercircles"
                className="scroller-circles mr-2"
              />
              <img
                src={bluecircle}
                alt="scrollercircles"
                className="scroller-circles"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction2;
