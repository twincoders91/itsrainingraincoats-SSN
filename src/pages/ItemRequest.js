import React, { useEffect, useState } from "react";

import Header from "../Header";
import HeaderGeneric from "../components/HeaderGeneric";
import items from "../temp/itemSeed";
import ItemRequestAdd from "../components/ItemRequestAdd";
import ItemRequestCategory from "../components/ItemRequestCategory";
import ItemRequestCart from "../components/ItemRequestCart";
import ItemRequestDelivery from "../components/ItemRequestDelivery";
import ItemRequestConfirmation from "../components/ItemRequestConfirmation";
import ItemRequestSuccess from "../components/ItemRequestSuccess";
import HeaderTopNavigation from "../components/HeaderTopNavigation";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("addItem");
  const [category, setCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [headerTitle, setHeaderTitle] = useState("item application");
  const [previousPage, setPreviousPage] = useState("home");

  return (
    <>
      {/* <HeaderGeneric profile={false} /> */}
      <HeaderTopNavigation
        text={headerTitle}
        setCurrentPage={setCurrentPage}
        previousPage={previousPage}
      />
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
            setSelectedItems={setSelectedItems}
          />
        )}
        {currentPage === "cart" && (
          <ItemRequestCart
            items={items}
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        )}
        {currentPage === "delivery" && (
          <ItemRequestDelivery
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setDeliveryMethod={setDeliveryMethod}
          />
        )}
        {currentPage === "confirm" && (
          <ItemRequestConfirmation
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            deliveryMethod={deliveryMethod}
          />
        )}
        {currentPage === "success" && (
          <ItemRequestSuccess setCurrentPage={setCurrentPage} />
        )}
      </div>
    </>
  );
}
