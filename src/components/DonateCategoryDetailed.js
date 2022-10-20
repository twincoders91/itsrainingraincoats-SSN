import React, { useState } from "react";
import donateCategory from "../datasets/donateCategory";

const DonateCategoryDetailed = (props) => {
  const {
    donateCategoryChoice,
    setDonateDetailedItemChoice,
    donateDetailedItemChoice,
    handleClickToDescription,
    setDonateDetailedItemArray,
  } = props;

  const [requireSelection, setRequireSelection] = useState(false);
  const filterCategoryDonate = donateCategory.filter(
    (d, i) => d.name === donateCategoryChoice
  );
  console.log(filterCategoryDonate);
  console.log(filterCategoryDonate[0]);

  const handleSetDonateDetailedItemChoice = (event) => {
    setDonateDetailedItemChoice(event.name);
    setRequireSelection(true);
    setDonateDetailedItemArray(event);
  };

  return (
    <div>
      <div className="donate-item-category-box-detailed ml-2 mr-2 mt-2">
        {filterCategoryDonate[0].items.map((items) => {
          return (
            <div
              className="donate-item-category-individual-box mt-2 "
              key={items.name + Math.random() * 1000}
            >
              <div
                className={
                  donateDetailedItemChoice === items.name
                    ? `donate-item-category-icon-box-detailed2 bs`
                    : `donate-item-category-icon-box-detailed bs`
                }
                onClick={() => handleSetDonateDetailedItemChoice(items)}
              >
                <img src={require(`../assets/${items.icon}`)} alt="" />
              </div>
              <span className="donate-item-category-font mt-1">
                {items.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="donate-items-Button-container">
        <div className="donate-items-Button-box">
          <button
            className={
              requireSelection
                ? `instructions-button-next-strict2`
                : `instructions-button-next-strict`
            }
            onClick={() => handleClickToDescription()}
            disabled={!requireSelection ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCategoryDetailed;
