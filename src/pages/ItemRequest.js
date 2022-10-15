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

  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="request-body-container">
        {/* <ItemRequestAdd items={items} /> */}
        {/* <ItemRequestItem /> */}
        {/* <ItemRequestCart /> */}
        {/* <ItemRequestDelivery /> */}
        {/* <ItemRequestConfirmation /> */}
        <ItemRequestSuccess />
      </div>
    </>
  );
}
