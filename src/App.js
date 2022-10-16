import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import LanguageSelect from "./pages/LanguageSelect";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ItemRequest from "./pages/ItemRequest";
import DonateLocation from "./pages/DonateLocation";
import DonateItems from "./pages/DonateItems";

function App() {
  const [openModalDonateInstructions, setopenModalDonateInstructions] =
    useState(false);
  const [donateCategoryPopulate, setDonateCategoryPopulate] = useState([]);
  const [prevPage, setPrevPage] = useState("");
  const [areaSelection, setAreaSelection] = useState(" - select area -");
  const [dropMenuClick, setDropMenuClick] = useState(false);
  const handleAreaSelection = (event) => {
    setAreaSelection(event);
    setDropMenuClick(false);
  };
  console.log(areaSelection);

  console.log(prevPage);

  return (
    <div className="main-app-container">
      <Routes>
        <Route path="/" element={<Navigate to="/language-select" />} />
        <Route
          path="/home"
          element={
            <Home
              openModalDonateInstructions={openModalDonateInstructions}
              setopenModalDonateInstructions={setopenModalDonateInstructions}
            />
          }
        />
        <Route
          path="/donate"
          element={
            <Donate
              openModalDonateInstructions={openModalDonateInstructions}
              setopenModalDonateInstructions={setopenModalDonateInstructions}
              donateCategoryPopulate={donateCategoryPopulate}
              setDonateCategoryPopulate={setDonateCategoryPopulate}
              setPrevPage={setPrevPage}
            />
          }
        />
        <Route
          path="/donate-location"
          element={
            <DonateLocation
              donateCategoryPopulate={donateCategoryPopulate}
              prevPage={prevPage}
              setPrevPage={setPrevPage}
              handleAreaSelection={handleAreaSelection}
              dropMenuClick={dropMenuClick}
              setDropMenuClick={setDropMenuClick}
              areaSelection={areaSelection}
            />
          }
        />
        <Route
          path="/donate-items"
          element={
            <DonateItems
              donateCategoryPopulate={donateCategoryPopulate}
              prevPage={prevPage}
            />
          }
        />
        <Route path="/language-select" element={<LanguageSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/item-request" element={<ItemRequest />} />
      </Routes>
    </div>
  );
}

export default App;
