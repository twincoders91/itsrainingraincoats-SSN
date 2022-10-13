import React, { useState } from "react";
import closebutton from "../../assets/closebutton.png";
import instructionsImage1 from "../../assets/instructionsImage1.png";
import instructionsImage2a from "../../assets/instructionsImage2a.svg";
import instructionsImage2b from "../../assets/instructionsImage2b.svg";
import instructionsImage2c from "../../assets/instructionsImage2c.svg";
import bluecircle from "../../assets/bluecircle.png";
import greycircle from "../../assets/greycircle.png";
import backarrow from "../../assets/backarrow.svg";

const ModalDonateInstructions = (props) => {
  const { openModalDonateInstructions, setopenModalDonateInstructions } = props;
  const [donateInstruction2, setDonateInstruction2] = useState(false);
  const [donateInstruction3, setDonateInstruction3] = useState(false);

  const handleInstructionBack1 = () => {
    setopenModalDonateInstructions(true);
    setDonateInstruction2(false);
  };
  const handleInstructionChange1 = () => {
    setDonateInstruction2(true);
    setopenModalDonateInstructions(false);
  };

  const donateInstructionPages = () => {
    console.log(openModalDonateInstructions);
    console.log(donateInstruction2);
    if (openModalDonateInstructions === true) {
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
    } else if (donateInstruction2 === true) {
      return (
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
                  <span className="instructions2-font1 mb-1">Meals</span>
                  <span className="instructions2-font2 ">
                    meal or snack donations offer a change in routine for them.
                  </span>
                </div>
              </div>
              <div className="instructionsImage3-container ml-2 mr-2">
                <img src={instructionsImage2c} alt="instructionimages" />
                <div className="instructions2-font-box ml-2">
                  <span className="instructions2-font1 mb-1">Meals</span>
                  <span className="instructions2-font2 ">
                    meal or snack donations offer a change in routine for them.
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
                    handleInstructionChange1();
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
      );
    }
  };

  return <div>{donateInstructionPages()}</div>;
};

export default ModalDonateInstructions;
