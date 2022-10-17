import React from "react";
import DonateCategory from "../components/DonateCategory";
import donateCategory from "../datasets/donateCategory";
import NavBarDonateItems from "../navbar/NavBarDonateItems";
import { Link } from "react-router-dom";

import pagecontrols2 from "../assets/pagecontrols2.svg";

const DonateItems = ({ donateCategoryPopulate, prevPage }) => {
  return (
    <div className="donate-items-category-container">
      <NavBarDonateItems
        donateCategoryPopulate={donateCategoryPopulate}
        prevPage={prevPage}
      />
      <div className="donate-category-box ml-2 mr-2 mt-2">
        <div className="donate-location-fonts-box">
          <span className="donate-location-font1">
            Step 2 of 3 - Select item category
          </span>
          <span className="donate-location-font2 mt-2">
            What is the category of the donating item?{" "}
          </span>
        </div>
      </div>
      <DonateCategory donateCategory={donateCategory} />
      <div className="donate-items-button-container">
        <div className="donate-items-Button-box">
          <button className="instructions-button-next">Next</button>
        </div>
        <div className="donate-items-scroller-box">
          <img src={pagecontrols2} alt="pagescroller" />
        </div>
      </div>
    </div>
  );
};

export default DonateItems;
