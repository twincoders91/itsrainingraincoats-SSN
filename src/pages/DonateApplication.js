import React, { useState } from "react";
import DonateApplicationCard from "../components/DonateApplicationCard";
import NavBar from "../navbar/NavBar";

const DonateApplication = (props) => {
  const { donateCart, setDonateCart } = props;
  const [donateLength, setDonateLength] = useState(0);
  return (
    <>
      <div className="main-header-container">
        <div className="Navbar-donate-application">
          <div className="donate-submission-box">
            <h1 className="donate-header-font">Applications</h1>
          </div>
        </div>
      </div>
      <div className="donate-application-container ml-2 mr-2 mt-2">
        <span className="fs-14 fw-600">{`Donation application: ${donateLength}`}</span>
        <DonateApplicationCard
          donateCart={donateCart}
          setDonateCart={setDonateCart}
          setDonateLength={setDonateLength}
        />
      </div>
      <div className="navbar--absolute">
        <NavBar />
      </div>
    </>
  );
};

export default DonateApplication;
