import React from "react";
import mapWest from "../assets/mapWest.svg";

const MapWest = () => {
  return (
    <div>
      <div className="donate-location-fonts-box ">
        <span className="donate-location-font2 mt-4">
          Choose a drop-off point
        </span>
        <span className="donate-location-font1 mt-1 mb-2">
          Our drop-off points are run by our volunteers, the available time are
          different at every drop-off points
        </span>
      </div>
      <img src={mapWest} alt="mapimage" />
    </div>
  );
};

export default MapWest;
