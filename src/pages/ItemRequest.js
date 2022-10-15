import React, { useState } from "react";

import Header from "../Header";
import items from "../temp/itemSeed";
import ItemRequestAdd from "../components/ItemRequestAdd";
import ItemRequestItem from "../components/ItemRequestItem";
import ItemRequestCart from "../components/ItemRequestCart";
import ItemRequestDelivery from "../components/ItemRequestDelivery";
import ItemRequestConfirmation from "../components/ItemRequestConfirmation";
import ItemRequestSuccess from "../components/ItemRequestSuccess";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("addItem");
  const [categoryItems, setCategoryItems] = useState([]);

  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="request-body-container">
        {currentPage === "addItem" && (
          <ItemRequestAdd
            items={items}
            setCurrentPage={setCurrentPage}
            setCategoryItems={setCategoryItems}
          />
        )}
        {currentPage === "electronics" && (
          <ItemRequestItem
            items={categoryItems}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "cart" && (
          <ItemRequestCart setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "delivery" && (
          <ItemRequestDelivery setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "confirm" && (
          <ItemRequestConfirmation setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "success" && (
          <ItemRequestSuccess setCurrentPage={setCurrentPage} />
        )}
      </div>
    </>
  );
}
