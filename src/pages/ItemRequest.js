import React, { useState } from "react";
import ItemRequest1 from "../components/ItemRequest1";

import Header from "../Header";

export default function ItemRequest() {
  const [currentPage, setCurrentPage] = useState("request1");
  return (
    <>
      <div className="main-header-container">
        <Header />
      </div>
      <div className="request-body-container">
        <ItemRequest1 />
      </div>
    </>
  );
}
