import React, { useEffect, useState } from "react";
import NavBarDonateItems from "../navbar/NavBarDonateItems";
import pagecontrols2 from "../assets/pagecontrols2.svg";
import DonateCategoryDetailed from "../components/DonateCategoryDetailed";
import DonateItems2Description from "../components/DonateItems2Description";

const DonateItems2 = ({
  donateCategoryPopulate,
  prevPage,
  setPrevPage,
  donateCategoryChoice,
  setDonateDetailedItemChoice,
  donateDetailedItemChoice,
  setDonateDetailedItemArray,
  donateDetailedItemArray,
}) => {
  const [closeCategoryDetailed, setCloseCategoryDetailed] = useState(false);
  const [clickToDescription, setClickToDescription] = useState(false);
  const handleClickToDescription = () => {
    setCloseCategoryDetailed(true);
    setClickToDescription(true);
  };

  useEffect(() => {
    setPrevPage("/donate-items");
  });
  return (
    <>
      <NavBarDonateItems
        donateCategoryPopulate={donateCategoryPopulate}
        prevPage={prevPage}
      />
      {!closeCategoryDetailed ? (
        <div className="donate-items-category-container">
          <div className="donate-category-box ml-2 mr-2 mt-2">
            <div className="donate-location-fonts-box">
              <span className="donate-location-font1">
                Step 3 of 3 - Choose donate item and describe condition
              </span>
              <span className="donate-location-font2 mt-2">
                Which sports & games item will you like to donate?{" "}
              </span>
            </div>
          </div>
          <DonateCategoryDetailed
            donateCategoryChoice={donateCategoryChoice}
            setDonateDetailedItemChoice={setDonateDetailedItemChoice}
            donateDetailedItemChoice={donateDetailedItemChoice}
            handleClickToDescription={handleClickToDescription}
            setDonateDetailedItemArray={setDonateDetailedItemArray}
          />
          <div className="donate-items-button-container">
            <div className="donate-items-scroller-box">
              <img src={pagecontrols2} alt="pagescroller" />
            </div>
          </div>
        </div>
      ) : null}
      {closeCategoryDetailed ? (
        <div className="donate-items-category-container">
          <DonateItems2Description
            donateDetailedItemArray={donateDetailedItemArray}
          />
        </div>
      ) : null}
    </>
  );
};

export default DonateItems2;
