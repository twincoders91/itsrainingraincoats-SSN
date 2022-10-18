import React, { useEffect } from "react";
import pagecontrols1 from "../assets/pagecontrols1.svg";
import { Link } from "react-router-dom";

const DropoffInformation = ({
  locationPick,
  filterDataToAreas,
  setPrevPage,
}) => {
  //========== filter volunteer in West by Location =============
  const x = filterDataToAreas.filter((d, i) => d.locationTown === locationPick);
  console.log(x);
  console.log(locationPick);

  const handlePrevPage = () => {
    setPrevPage("/donate-location");
  };

  return (
    <div>
      <div className="donate-location-fonts-box">
        <span className="donate-location-font2 mt-4">
          Drop-off point information
        </span>
        <span className="donate-location-font1 mt-1">run by volunteer</span>
      </div>
      {x.map((volunteerprofile) => {
        return (
          <div key={volunteerprofile.name + Math.random() * 1000}>
            <div className="volunteer-profile-box mt-4 bs">
              <img
                src={volunteerprofile.image}
                alt="profileimage"
                className="profile-image"
              />
              <div className="volunteer-profile-personaldetails ml-2">
                <div className="volunteer-name-mobile-box">
                  <span className="volunteer-14px-600-font">
                    {volunteerprofile.name}
                  </span>
                  <span className="volunteer-mobile-font">
                    @{volunteerprofile.mobile}
                  </span>
                </div>
                <div className="volunteer-location-box">
                  <span className="volunteer-location-font">
                    {volunteerprofile.locationRoad}
                  </span>
                  <span className="volunteer-location-font">
                    {volunteerprofile.locationTown}
                  </span>
                </div>
              </div>
            </div>
            <div className="volunteer-availabletime-box mt-2 ml-2 mr-2 mb-4">
              <span className="volunteer-14px-600-font">Available time</span>
              <div className="weekday-box mt-2">
                <span className="volunteer-14px-600-font">
                  {volunteerprofile.availableTime.weekdayFrom} -{" "}
                  {volunteerprofile.availableTime.weekdayTo}
                </span>
                <span className="volunteer-14px-300-font ml-2">
                  {volunteerprofile.availableDay.weekdayFrom} to{" "}
                  {volunteerprofile.availableDay.weekdayTo}
                </span>
              </div>
              <div className="weekend-box mt-2">
                <span className="volunteer-14px-600-font">
                  {volunteerprofile.availableTime.weekendFrom} -{" "}
                  {volunteerprofile.availableTime.weekendTo}
                </span>
                <span className="volunteer-14px-300-font ml-2">
                  {volunteerprofile.availableDay.weekendFrom} to{" "}
                  {volunteerprofile.availableDay.weekendTo}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="dropoff-button-box ">
        <Link
          to="/donate-items"
          onClick={() => {
            handlePrevPage();
          }}
        >
          <button className="instructions-button-next mb-4">Next</button>
        </Link>
      </div>
      <div className="dropoff-scroller-box mb-4">
        <img src={pagecontrols1} alt="pagescroller" />
      </div>
    </div>
  );
};

export default DropoffInformation;
