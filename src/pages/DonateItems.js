import React, { useEffect, useState } from "react";
import DonateCategory from "../components/DonateCategory";
import donateCategory from "../datasets/donateCategory";
import NavBarDonateItems from "../navbar/NavBarDonateItems";

import pagecontrols2 from "../assets/pagecontrols2.svg";

const DonateItems = ({
  donateCategoryPopulate,
  prevPage,
  setPrevPage,
  setDonateCategoryChoice,
  donateCategoryChoice,
}) => {
  const [requireSelection, setRequireSelection] = useState(false);
  const [donateSteps, setDonateSteps] = useState(1);
  console.log(donateCategoryChoice);

  console.log(donateSteps);

  useEffect(() => {
    setPrevPage("/donate-location");
  });

  return (
    <div className="donate-items-category-container">
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
        <DonateCategory
          donateCategory={donateCategory}
          setRequireSelection={setRequireSelection}
          setDonateCategoryChoice={setDonateCategoryChoice}
          donateCategoryChoice={donateCategoryChoice}
        />
        <div className="donate-items-button-container">
          <div className="donate-items-scroller-box">
            <img src={pagecontrols2} alt="pagescroller" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateItems;
