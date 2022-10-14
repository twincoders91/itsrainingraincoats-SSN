import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import LanguageSelect from "./pages/LanguageSelect";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

function App() {
  const [openModalDonateInstructions, setopenModalDonateInstructions] =
    useState(false);

  return (
    <div className="main-app-container">
      <Routes>
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
            />
          }
        />
        <Route path="/language-select" element={<LanguageSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
