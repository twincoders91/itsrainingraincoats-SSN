import React from "react";
import { UilUserPlus } from "@iconscout/react-unicons";
import { UilCalendarAlt } from "@iconscout/react-unicons";
import { UilBookOpen } from "@iconscout/react-unicons";
import { UilMedkit } from "@iconscout/react-unicons";

import NavBar from "../navbar/NavBar";

const Home = ({ setOpenModalApplyItems }) => {
  return (
    <div className="home-container">
      <div className="home-top-section">
        <h1>Hi, Desmond</h1>
        <div className="item-application-container">
          <div
            className="item-application-box"
            onClick={() => {
              setOpenModalApplyItems(true);
            }}
          >
            <UilUserPlus className="item-application-icon" />
          </div>
          <p>Item Application</p>
        </div>
      </div>
      <div className="home-bottom-section">
        <div className="activity-individual-boxes">
          <div className="activity-icon-box">
            <UilCalendarAlt className="activity-icon" />
          </div>
          <p>Events</p>
        </div>
        <div className="activity-individual-boxes">
          <div className="activity-icon-box">
            <UilBookOpen className="activity-icon" />
          </div>
          <p>Lessons</p>
        </div>
        <div className="activity-individual-boxes">
          <div className="activity-icon-box">
            <UilMedkit className="activity-icon" />
          </div>
          <p>Medical</p>
        </div>
      </div>

      {/* <div className="navbar-container">
        <div className="navbar-individual-boxes">
          <div className="navbar-icon-box">
            <UilEstate className="navbar-icon" />
          </div>
          <p className="navbar-fonts">Home</p>
        </div>
        <div className="navbar-individual-boxes">
          <div className="navbar-icon-box">
            <UilClipboardAlt className="navbar-icon" />
          </div>
          <p className="navbar-fonts">Application</p>
        </div>
        <div className="navbar-individual-boxes">
          <div className="navbar-icon-box">
            <UilEllipsisH className="navbar-icon" />
          </div>
          <p className="navbar-fonts">More</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
