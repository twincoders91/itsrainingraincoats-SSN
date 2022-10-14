import React from "react";
import donateCategoryData from "../datasets/donateCat4";
import meals from "../assets/meals.svg";
import carepack from "../assets/carepack.svg";
import donateitem from "../assets/donateitem.svg";
import fundraising from "../assets/fundraising.svg";

const DonateCat4 = () => {
  console.log(donateCategoryData);
  console.log(donateCategoryData[0].title);
  return (
    <>
      <div className="donate-category-box ml-2 mr-2">
        {donateCategoryData.map((item) => {
          return (
            <div className="donate-choice-mainbox mt-2" key={item.title}>
              <div className="donate-choice-individual-boxes ">
                <div className="donate-choice-boxes bs">
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
      <div>
        {/* <div className="donate-category-box">
          <div className="donate-individual-categories-box mr-2">
            <div className="donate-categoryicons-box bs mb-1 mt-2">
              <img src={meals} alt="categoryicons" />
            </div>
            <span className="donate-category-font">Meals</span>
          </div>
          <div className="donate-individual-categories-box mr-2">
            <div className="donate-categoryicons-box bs mb-1 mt-2">
              <img src={carepack} alt="categoryicons" />
            </div>
            <span className="donate-category-font">Care Pack</span>
          </div>
          <div className="donate-individual-categories-box mr-2">
            <div className="donate-categoryicons-box bs mb-1 mt-2">
              <img src={donateitem} alt="categoryicons" />
            </div>
            <span className="donate-category-font">Preloved Item</span>
          </div>
          <div className="donate-individual-categories-box">
            <div className="donate-categoryicons-box bs mb-1 mt-2">
              <img src={fundraising} alt="categoryicons" />
            </div>
            <span className="donate-category-font">Financial Support</span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default DonateCat4;
