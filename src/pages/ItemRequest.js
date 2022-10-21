import React, { useState } from "react";

import items from "../temp/itemSeed";
import ItemRequestAdd from "../components/ItemRequestAdd";
import ItemRequestCategory from "../components/ItemRequestCategory";
import ItemRequestCart from "../components/ItemRequestCart";
import ItemRequestDelivery from "../components/ItemRequestDelivery";
import ItemRequestConfirmation from "../components/ItemRequestConfirmation";
import ItemRequestSuccess from "../components/ItemRequestSuccess";
import HeaderTopNavigation from "../components/HeaderTopNavigation";
import ItemRequestModals from "../components/ItemRequestModals";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("addItem");
  const [category, setCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [headerTitle, setHeaderTitle] = useState("item application");
  const [pageHistory, setPageHistory] = useState(["home"]);
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      {/* <HeaderGeneric profile={false} /> */}
      <HeaderTopNavigation
        text={headerTitle}
        setCurrentPage={setCurrentPage}
        pageHistory={pageHistory}
        setPageHistory={setPageHistory}
        setDisplayModal={setDisplayModal}
        home={true}
      />
      {JSON.stringify(pageHistory)}
      {JSON.stringify(category)}
      <div className="request-body-container">
        {currentPage === "addItem" && (
          <ItemRequestAdd
            items={items}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCategory={setCategory}
            setHeaderTitle={setHeaderTitle}
            setPageHistory={setPageHistory}
          />
        )}
        {currentPage === "category" && (
          <ItemRequestCategory
            {...items[category]}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setCategory={setCategory}
            setSelectedItems={setSelectedItems}
            setHeaderTitle={setHeaderTitle}
            setPageHistory={setPageHistory}
          />
        )}
        {currentPage === "cart" && (
          <ItemRequestCart
            items={items}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setHeaderTitle={setHeaderTitle}
            setPageHistory={setPageHistory}
          />
        )}
        {currentPage === "delivery" && (
          <ItemRequestDelivery
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setDeliveryMethod={setDeliveryMethod}
            setHeaderTitle={setHeaderTitle}
            setPageHistory={setPageHistory}
          />
        )}
        {currentPage === "confirm" && (
          <ItemRequestConfirmation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedItems={selectedItems}
            deliveryMethod={deliveryMethod}
            setHeaderTitle={setHeaderTitle}
            setPageHistory={setPageHistory}
          />
        )}
        {currentPage === "success" && (
          <ItemRequestSuccess
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setHeaderTitle={setHeaderTitle}
            setPageHistory={setPageHistory}
          />
        )}
      </div>
      <div id="item-request-modal"></div>
      {displayModal && <ItemRequestModals setDisplayModal={setDisplayModal} />}
    </>
  );
}
