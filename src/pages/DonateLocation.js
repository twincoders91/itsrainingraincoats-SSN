import React, { useState } from "react";
import NavBarDonateItems from "../navbar/NavBarDonateItems";
import MapWest from "../components/MapWest";
import DropMenuArea from "../components/DropMenuArea";
import volunteerData from "../datasets/volunteerInfo";
import MapNorth from "../components/MapNorth";

const DonateLocation = (props) => {
  const {
    donateCategoryPopulate,
    prevPage,
    setPrevPage,
    handleAreaSelection,
    dropMenuClick,
    setDropMenuClick,
    areaSelection,
  } = props;

  const [locationPick, setLocationPick] = useState("");
  const [dropoffClick, setDropoffClick] = useState(false);

  const handleDropMenuClick = () => {
    if (dropMenuClick === false) {
      setDropMenuClick(true);
    } else if (dropMenuClick === true) {
      setDropMenuClick(false);
    }
  };

  //========== Hard coding the location pin picking =============
  const handleDropoffClick = (event) => {
    setDropoffClick(true);
    setLocationPick(event);
  };
  console.log(dropoffClick);

  //========= FILTER Volunteer data by AREA ===========
  const filterDataToAreas = volunteerData.filter(
    (d, i) => d.area === areaSelection
  );
  console.log(filterDataToAreas);
  console.log(prevPage);

  return (
    <div>
      <NavBarDonateItems
        donateCategoryPopulate={donateCategoryPopulate}
        prevPage={prevPage}
      />
      <div className="main-donate-location-container ml-2 mr-2 mt-2">
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
          {areaSelection === "WEST areas" ? (
            <MapWest
              filterDataToAreas={filterDataToAreas}
              handleDropoffClick={handleDropoffClick}
              locationPick={locationPick}
              dropoffClick={dropoffClick}
              prevPage={prevPage}
              setPrevPage={setPrevPage}
            />
          ) : null}
          {areaSelection === "NORTH areas" ? (
            <MapNorth filterDataToAreas={filterDataToAreas} />
          ) : null}
          {/* {areaSelection === "CENTRAL areas" ? null : null}
          {areaSelection === "EAST areas" ? null : null} */}
        </div>
        {/* {dropoffClick ? <DropoffInformation /> : null} */}
      </div>
    </div>
  );
};

export default DonateLocation;
