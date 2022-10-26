import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import donateInNeed from "../datasets/donateInNeed";
import donate from "../assets/donate.svg";
import education from "../assets/education.svg";
import love from "../assets/love.svg";
import corporatepartnership from "../assets/corporatepartnership.svg";
import { useContext } from "react";
import Context from "../context/context";

const DonorHome = (props) => {
  const context = useContext(Context);

  const { handleModalOpen, setSortedByStatus, name } = props;

  const runSorting = () => {
    const sortByStatus = (items) =>
      [...items].sort((itemA, itemB) =>
        itemA.status.localeCompare(itemB.status)
      );
    const sortedOutput = sortByStatus(donateInNeed);
    setSortedByStatus(sortedOutput);
  };

  useEffect(() => {
    runSorting();
  }, []);

  return (
    <div>
      {/* jump to language-select page if user has logged out */}
      {context.logOut && <Navigate to="/language-select" />}

      <div className="home-container">
        <div className="home-top-section">
          <h1 className="home-h1-22">{`Hi, ${name}`}</h1>
          <p className="home-h2-14">How can you help?</p>
          <div className="item-application-container">
            <div
              className="item-application-box ml-2 mr-2"
              onClick={() => {
                handleModalOpen();
              }}
            >
              <img
                src={donate}
                alt="donateimage"
                className="donate-application-icon"
              />
            </div>

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
    </div>
  );
};

export default DonorHome;
