import React from "react";
import { Link } from "react-router-dom";

import closebutton from "../../assets/closebutton.png";
import lowIndicator from "../../assets/lowIndicator.svg";
import moderateIndicator from "../../assets/moderateIndicator.svg";
import sufficientIndicator from "../../assets/sufficientIndicator.svg";

const Instruction3 = (props) => {
  const { setDonateInstruction3 } = props;
  //   const handleClickToDonatePage = () => {
  //     setDonateInstruction3(false);

  //   }

  return (
    <div className="overlay">
      <div className="donate-instructions-container">
        <div className="close-modal-header">
          <img
            src={closebutton}
            className="close-button"
            alt="closebutton"
            onClick={() => {
              setDonateInstruction3(false);
            }}
          />
        </div>
        <div className="instructions-container">
          <div className="instructions-top-section mb-2">
            <h1 className="instructions-h1-16">
              Some of our most needed items
            </h1>
          </div>
          <div className="instructions3-container ml-2 mr-2 mb-2">
            <div className="instructions2-font-box">
              <span className="instructions3-font1 mb-2">
                These items have the most demand among our migrant workers
              </span>
              <span className="instructions3-font1 ">
                Colour labels indicates the current demand status
              </span>
            </div>
          </div>
          <div className="Instructions3-indicator-container">
            <div className="indicator-box ml-2 mr-2 mb-4">
              <img
                src={lowIndicator}
                alt="indicatorimage"
                className="indicator-icons"
              ></img>
              <span className="instructions3-font1 ml-2">
                More than 3 months waiting time for new request
              </span>
            </div>
            <div className="indicator-box ml-2 mr-2 mb-4">
              <img
                src={moderateIndicator}
                alt="indicatorimage"
                className="indicator-icons"
              ></img>
              <span className="instructions3-font1 ml-2">
                1-2 months waiting time for new request
              </span>
            </div>
            <div className="indicator-box ml-2 mr-2">
              <img
                src={sufficientIndicator}
                alt="indicatorimage"
                className="indicator-icons"
              ></img>
              <span className="instructions3-font1 ml-2">
                Less than 1 month waiting time for new request
              </span>
            </div>
          </div>

          <div className="instructionsButton-container">
            <Link to="/donate">
              <button
                className="instructions-button-next"
                onClick={() => {
                  setDonateInstruction3(false);
                }}
              >
                Close
              </button>
            </Link>
          </div>
          <div className="instructions-scroller"></div>
        </div>
      </div>
    </div>
  );
};

export default Instruction3;
