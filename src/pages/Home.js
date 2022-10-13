import React from "react";
import Header from "../Header";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";

import donate from "../assets/donate.png";
import education from "../assets/education.png";
import love from "../assets/love.png";
import corporatepartnership from "../assets/corporatepartnership.png";

const Home = () => {
  return (
    <>
      <div className="main-home-container">
        <div className="main-header-container">
          <Header />
        </div>
        <div className="home-container">
          <div className="home-top-section">
            <h1 className="home-h1-22">Hi, Sophie</h1>
            <p className="home-h2-14">How can you help?</p>
            <div className="item-application-container">
              <Link to="/donate" className="item-application-box">
                <div>
                  <img
                    src={donate}
                    alt="donateimage"
                    className="donate-application-icon"
                  />
                </div>
              </Link>
              <p className="noto-12">Donate</p>
            </div>
          </div>
          <div className="home-bottom-section">
            <div className="activity-individual-boxes">
              <div className="activity-icon-box">
                <img
                  src={love}
                  alt="loveimage"
                  className="item-application-icon"
                />
              </div>
              <p className="noto-12">Volunteer at IRR</p>
            </div>
            <div className="activity-individual-boxes">
              <div className="activity-icon-box">
                <img
                  src={corporatepartnership}
                  alt="corporatepartnershipimage"
                  className="item-application-icon"
                />
              </div>
              <p className="noto-12">Corporate Partnership</p>
            </div>
            <div className="activity-individual-boxes">
              <div className="activity-icon-box">
                <img
                  src={education}
                  alt="educationimage"
                  className="item-application-icon"
                />
              </div>
              <p className="noto-12">Youth & Education</p>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <NavBar />
        </div>
      </div>
      {/* 
      <div className="main-modal-applyforitems-container">
        <ModalHowToDonateForItems
          setOpenModalApplyItems={setOpenModalApplyItems}
          openModalApplyItems={openModalApplyItems}
          className="main-modal-applyforitems-container"
        />
      </div> */}
    </>
  );
};

export default Home;
