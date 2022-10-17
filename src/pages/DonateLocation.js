import React, { useState } from "react";
import NavBarDonateItems from "../navbar/NavBarDonateItems";
import MapWest from "../components/MapWest";
import DropMenuArea from "../components/DropMenuArea";

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
        <DropMenuArea
          areaSelection={areaSelection}
          handleAreaSelection={handleAreaSelection}
          handleDropMenuClick={handleDropMenuClick}
          dropMenuClick={dropMenuClick}
        />

        <div className="map-body-container">
          {areaSelection === "WEST areas" ? <MapWest /> : null}
          {/* {areaSelection === "NORTH areas" ? null : null}
          {areaSelection === "CENTRAL areas" ? null : null}
          {areaSelection === "EAST areas" ? null : null} */}
        </div>
      </div>
    </div>
  );
};

export default DonateLocation;
