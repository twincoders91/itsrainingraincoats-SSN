import React from "react";
import NavBar from "../navbar/NavBar";
// import donateCategoryData from "../datasets/donateCat4";
import meals from "../assets/meals.svg";
import carepack from "../assets/carepack.svg";
import donateitem from "../assets/donateitem.svg";
import fundraising from "../assets/fundraising.svg";
import infoicon from "../assets/infoicon.svg";

import NavBarDonate from "../navbar/NavBarDonate";

const Donate = () => {
  return (
    <div>
      <NavBarDonate />
      <div className="main-donate-container ml-2 mr-2 mt-2">
        <span className="donate-font1 ">I would like to donate...</span>
        <div className="donate-category-box">
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
        </div>
        <div className="donate-inneedof-box mt-4">
          <span className="donate-font1 mr-1">
            We are currently in need of...
          </span>
          <img className="infoicon" src={infoicon} alt="infoicon" />
        </div>
      </div>
      <div className="main-navbar">
        <NavBar />
      </div>
    </div>
  );
};

export default Donate;
