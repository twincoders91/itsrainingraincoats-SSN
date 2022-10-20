import React from "react";
import { Link } from "react-router-dom";

const DonateCategory = (props) => {
  const {
    donateCategory,
    setRequireSelection,
    setDonateCategoryChoice,
    donateCategoryChoice,
  } = props;
  const handleSetRequireSelection = (event) => {
    setRequireSelection(true);
    setDonateCategoryChoice(event);
  };

  return (
    <div className="donate-item-category-box ml-2 mr-2 mt-2">
      {donateCategory.map((item) => {
        return (
          <div
            className="donate-item-category-individual-box mt-2 "
            key={item.name + Math.random() * 1000}
          >
            <Link
              to="/donate-items-2"
              className={
                donateCategoryChoice === item.name
                  ? `donate-item-category-icon-box2  bs`
                  : `donate-item-category-icon-box bs`
              }
              onClick={() => handleSetRequireSelection(item.name)}
            >
              <div>
                <img src={item.image} alt="" />
              </div>
            </Link>
            <span className="donate-item-category-font mt-1">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DonateCategory;
