import React from "react";
import donateInNeed from "../datasets/donateInNeed";

const DonateInNeed = () => {
  return (
    <div className="inNeed-container ml-2 mr-2 ">
      {donateInNeed.map((item) => {
        return (
          <div className="inNeed-mainbox mt-2" key={item.title}>
            <div className="inNeed-individual-boxes ">
              <div className="inNeed-icon-boxes bs">
                <img
                  src={require("../assets/" + item.image + ".svg")}
                  alt="iconimage"
                  className="inNeed-icon-image"
                />
                <div
                  className={
                    item.status === "Low"
                      ? "statusbox statusLow-color"
                      : "statusbox statusModerate-color"
                  }
                >
                  <span>{item.status}</span>
                </div>
              </div>
              <div className="inNeed-item-title-font mt-1">
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonateInNeed;
