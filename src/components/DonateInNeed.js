import React from "react";
import lowstatus from "../assets/lowstatus.svg";
import moderatestatus from "../assets/moderatestatus.svg";
import sufficientstatus from "../assets/sufficientstatus.svg";

const DonateInNeed = (props) => {
  const { sortedByStatus } = props;

  return (
    <>
      <div className="status-icon-box ml-2 mr-2 mt-2">
        <img src={lowstatus} className="mr-1" alt="" />
        <img src={moderatestatus} className="mr-1" alt="" />
        <img src={sufficientstatus} alt="" />
      </div>
      <div className="inNeed-container ml-2 mr-2 bs mt-2">
        <div className="inNeed--header mt-1 ml-2 mr-2 mb-1 fs-14 fw-600">
          <span>Item Name</span>
          <span>Status</span>
        </div>
        {sortedByStatus.map((item) => {
          return (
            <div className="inNeed-mainbox " key={item.title}>
              <div className="inNeed-individual-boxes ">
                <div className="inNeed-icon-boxes ">
                  <img
                    src={require("../assets/" + item.image + ".svg")}
                    alt="iconimage"
                    className="inNeed-icon-image"
                  />
                </div>
                <div className="inNeed-item-title-font">
                  <span>{item.title}</span>
                </div>
                <div
                  className={
                    item.status === "Low"
                      ? "statusbox statusLow-color"
                      : "statusbox statusModerate-color"
                  }
                >
                  {/* <span>{item.status}</span> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DonateInNeed;
