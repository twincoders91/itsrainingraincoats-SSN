import React, { useState } from "react";

import Header from "../Header";
import items from "../temp/itemSeed";
import ItemRequestAdd from "../components/ItemRequestAdd";
import ItemRequestCategory from "../components/ItemRequestCategory";
import ItemRequestCart from "../components/ItemRequestCart";
import ItemRequestDelivery from "../components/ItemRequestDelivery";
import ItemRequestConfirmation from "../components/ItemRequestConfirmation";
import ItemRequestSuccess from "../components/ItemRequestSuccess";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("addItem");
  const [category, setCategory] = useState("");

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
            setCategory={setCategory}
          />
        )}
        {currentPage === "category" && (
          <ItemRequestCategory
            items={items[category].items}
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
