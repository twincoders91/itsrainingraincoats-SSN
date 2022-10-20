import React, { useEffect } from "react";
import donateInNeed from "../datasets/donateInNeed";
import donate from "../assets/donate.svg";
import education from "../assets/education.svg";
import love from "../assets/love.svg";
import corporatepartnership from "../assets/corporatepartnership.svg";

const DonorHome = (props) => {
  const { handleModalOpen, setSortedByStatus } = props;

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
      <div className="home-container">
        <div className="home-top-section">
          <h1 className="home-h1-22">Hi, Sophie</h1>
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
