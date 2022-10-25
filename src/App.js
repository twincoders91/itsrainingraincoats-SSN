import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import LanguageSelect from "./pages/LanguageSelect";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ItemRequest from "./pages/ItemRequest";
import DonateLocation from "./pages/DonateLocation";
import DonateItems from "./pages/DonateItems";
import DonateItems2 from "./pages/DonateItems2";
import DonateConfirmation from "./pages/DonateConfirmation";
import DonateApplication from "./pages/DonateApplication";
import Context from "./context/context";
import Application from "./pages/Application";

function App() {
  const [openModalDonateInstructions, setopenModalDonateInstructions] =
    useState(false);
  const [donateCategoryPopulate, setDonateCategoryPopulate] = useState([]);
  const [prevPage, setPrevPage] = useState("");
  const [areaSelection, setAreaSelection] = useState(" - select area -");
  const [dropMenuClick, setDropMenuClick] = useState(false);
  const [donateCategoryChoice, setDonateCategoryChoice] = useState("");
  const [donateDetailedItemChoice, setDonateDetailedItemChoice] = useState("");
  const [donateDetailedItemArray, setDonateDetailedItemArray] = useState("");
  const [donateCart, setDonateCart] = useState([]);
  const [sortedByStatus, setSortedByStatus] = useState();
  const [persona, setPersona] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  const handleAreaSelection = (event) => {
    setAreaSelection(event);
    setDropMenuClick(false);
  };
  console.log(donateDetailedItemArray);
  console.log(donateCart);

  console.log(name);

  useEffect(() => {
    // if local storage has token, setState in the context store
    if (localStorage !== null) {
      setUserId(localStorage.id);
      setPersona(localStorage.persona);
    }
  }, []);

  return (
    <Context.Provider value={{ persona, setPersona, userId, setUserId }}>
      <div className="main-app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/language-select" />} />
          <Route
            path="/home"
            element={
              <Home
                openModalDonateInstructions={openModalDonateInstructions}
                setopenModalDonateInstructions={setopenModalDonateInstructions}
                setSortedByStatus={setSortedByStatus}
                persona={persona}
                name={name}
                userId={userId}
              />
            }
          />

          <Route path="/application" element={<Application />} />

          <Route
            path="/donate"
            element={
              <Donate
                openModalDonateInstructions={openModalDonateInstructions}
                setopenModalDonateInstructions={setopenModalDonateInstructions}
                donateCategoryPopulate={donateCategoryPopulate}
                setDonateCategoryPopulate={setDonateCategoryPopulate}
                setPrevPage={setPrevPage}
                sortedByStatus={sortedByStatus}
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
                setPrevPage={setPrevPage}
                setDonateCategoryChoice={setDonateCategoryChoice}
                donateCategoryChoice={donateCategoryChoice}
              />
            }
          />
          <Route
            path="/donate-items-2"
            element={
              <DonateItems2
                donateCategoryPopulate={donateCategoryPopulate}
                prevPage={prevPage}
                setPrevPage={setPrevPage}
                donateCategoryChoice={donateCategoryChoice}
                setDonateDetailedItemChoice={setDonateDetailedItemChoice}
                donateDetailedItemChoice={donateDetailedItemChoice}
                setDonateDetailedItemArray={setDonateDetailedItemArray}
                donateDetailedItemArray={donateDetailedItemArray}
                setDonateCart={setDonateCart}
                donateCart={donateCart}
              />
            }
          />

          <Route path="/donate-confirmation" element={<DonateConfirmation />} />
          <Route
            path="/donate-application"
            element={
              <DonateApplication
                donateCart={donateCart}
                setDonateCart={setDonateCart}
              />
            }
          />
          <Route path="/language-select" element={<LanguageSelect />} />
          <Route
            path="/login"
            element={<Login setUserId={setUserId} setPersona={setPersona} />}
          />
          <Route
            path="/create-account"
            element={
              <CreateAccount
                persona={persona}
                setPersona={setPersona}
                setName={setName}
                userId={userId}
                setUserId={setUserId}
              />
            }
          />
          <Route
            path="/item-request"
            element={<ItemRequest userId={userId} />}
          />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
