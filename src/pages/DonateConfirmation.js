import React from "react";
import { Link } from "react-router-dom";

import homeunfilled from "../assets/homeunfilled.svg";

const DonateConfirmation = (props) => {
  return (
    <div>
      <div className="main-header-container">
        <div className="Navbar-donate-application">
          <div className="donate-submission-box">
            <h1 className="donate-header-font">Donate Confirmation</h1>
          </div>
        </div>
        <div>
          <Link to="/home">
            <img
              src={homeunfilled}
              className="nav-user-icon"
              alt="user-profile"
            />
          </Link>
        </div>
      </div>
      <div className="submission-bottom-body">
        <span className="fs-16 fw-700">Submission successful, thank you!</span>
        <span className="fs-14 fw-300 mt-2 ml-4 mr-4">
          You will receive an email to schedule the drop-off once the item is
          reviewed and accepted by our volunteers.
        </span>
        <Link to="/donate-application">
          <button className="view-application-button mt-4">
            View Application
          </button>
        </Link>
      </div>
      <div className="donate-another-box">
        <Link to="/donate-items">
          <span className="application-delete fs-14 fw-600">
            Donate another item
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DonateConfirmation;
