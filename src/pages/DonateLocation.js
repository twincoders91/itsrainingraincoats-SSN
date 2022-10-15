import React, { useState } from "react";
import NavBarDonateItems from "../navbar/NavBarDonateItems";
import downarrow from "../assets/downarrow.svg";

const DonateLocation = (props) => {
  const { donateCategoryPopulate } = props;
  const [dropMenuClick, setDropMenuClick] = useState(false);
  const [areaSelection, setAreaSelection] = useState(" - select area -");

  const handleDropMenuClick = () => {
    if (dropMenuClick === false) {
      setDropMenuClick(true);
    } else if (dropMenuClick === true) {
      setDropMenuClick(false);
    }
  };
  const handleAreaSelection = (event) => {
    setAreaSelection(event);
    setDropMenuClick(false);
  };

  return (
    <div>
      <NavBarDonateItems donateCategoryPopulate={donateCategoryPopulate} />
      <div className="main-donate-container ml-2 mr-2 mt-2">
        <div className="donate-location-fonts-box">
          <span className="donate-location-font1">
            Step 1 of 3 - Choose drop-off point
          </span>
          <span className="donate-location-font2 mt-2">
            Please select an area
          </span>
        </div>
        <div
          className="donate-location-menu mt-2"
          onClick={handleDropMenuClick}
        >
          <span className="donate-location-font3 ml-2"> {areaSelection} </span>
          <img src={downarrow} alt="downarrow" className="dropdownarrow" />
        </div>
        {dropMenuClick ? (
          <div className="donate-location-dropmenu bs">
            <span
              className="donate-location-font4 ml-2 mt-2"
              onClick={() => handleAreaSelection("WEST areas")}
            >
              {" "}
              WEST areas{" "}
            </span>
            <span
              className="donate-location-font4 ml-2 mt-2"
              onClick={() => handleAreaSelection("NORTH areas")}
            >
              {" "}
              NORTH areas{" "}
            </span>
            <span
              className="donate-location-font4 ml-2 mt-2 "
              onClick={() => handleAreaSelection("CENTRAL areas")}
            >
              CENTRAL areas
            </span>
            <span
              className="donate-location-font4 ml-2 mt-2 mb-2"
              onClick={() => handleAreaSelection("EAST areas")}
            >
              {" "}
              EAST areas{" "}
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DonateLocation;
