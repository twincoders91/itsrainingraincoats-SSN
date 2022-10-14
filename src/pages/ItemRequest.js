import React, { useState } from "react";
import ItemRequestAdd from "../components/ItemRequestAdd";

import Header from "../Header";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("addItem");

  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="request-body-container">
        <ItemRequestAdd />
      </div>
    </>
  );
}
