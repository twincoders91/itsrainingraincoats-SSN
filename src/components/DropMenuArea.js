import React from "react";
import downarrow from "../assets/downarrow.svg";

const DropMenuArea = (props) => {
  const {
    handleDropMenuClick,
    areaSelection,
    dropMenuClick,
    handleAreaSelection,
  } = props;

  return (
    <div>
      <div className="donate-location-menu mt-2" onClick={handleDropMenuClick}>
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
  );
};

export default DropMenuArea;
