import React from "react";
import pagecontrols2 from "../assets/pagecontrols2.svg";

const DonateItems2Description = (props) => {
  const { donateDetailedItemArray } = props;
  console.log(donateDetailedItemArray);
  return (
    <div>
      <div className="donate-items-category-container">
        <div className="donate-items-category-container">
          <div className="donate-category-box ml-2 mr-2 mt-2">
            <div className="donate-location-fonts-box">
              <span className="donate-location-font1">
                Step 3 of 3 - Choose donate item and describe condition
              </span>
              <span className="donate-location-font2 mt-2">Donate item</span>
            </div>
          </div>
          <div className="donate-item-box ml-2 mr mt-2">
            <img
              src={require(`../assets/${donateDetailedItemArray.icon}`)}
              className="donate-item-finalchoice"
            ></img>
            <span className="donate-item-finalchoice-font">
              {donateDetailedItemArray.name}
            </span>
          </div>
          <div className="donate-quantity-box">
            <div className="donate-quantity-top-box">
              <span>Donate Quantity</span>
              <img src={require(`../assets/info.svg`)}></img>
            </div>
          </div>

          <div className="donate-items-button-container">
            <div className="donate-items-scroller-box">
              <img src={pagecontrols2} alt="pagescroller" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateItems2Description;
