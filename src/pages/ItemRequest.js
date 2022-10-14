import React, { useState } from "react";

import Header from "../Header";
import ItemRequestAdd from "../components/ItemRequestAdd";
import ItemRequestElectronics from "../components/ItemRequestElectronics";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("addItem");

  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="request-body-container">
        {/* <ItemRequestAdd /> */}
        <ItemRequestElectronics />
      </div>
    </>
  );
}
