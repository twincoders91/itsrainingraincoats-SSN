import React from "react";
import donateCategoryData from "../datasets/donateCat4";

const DonateCat4 = (props) => {
  const { handleDonateCategoryPopulate } = props;

  return (
    <>
      <div className="donate-category-box ml-2 mr-2">
        {donateCategoryData.map((item) => {
          return (
            <div className="donate-choice-mainbox mt-2" key={item.title}>
              <div className="donate-choice-individual-boxes ">
                <div
                  className="donate-choice-boxes bs"
                  onClick={() => {
                    handleDonateCategoryPopulate(item);
                  }}
                >
                  <img
                    src={require("../assets/" + item.image + ".svg")}
                    alt="iconimage"
                    className="donate-choice-icon-image"
                  />
                </div>
                <div className="inNeed-item-title-font mt-1">
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DonateCat4;
