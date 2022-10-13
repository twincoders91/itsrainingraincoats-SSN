import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import ReactApp from "./components/ReactApp";

function App() {
  const [openModalDonateInstructions, setopenModalDonateInstructions] =
    useState(false);
  return (
    <div className="main-app-container">
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          {/* <ReactApp /> */}
        </>
        <Route
          path="/donate"
          element={
            <Donate
              openModalDonateInstructions={openModalDonateInstructions}
              setopenModalDonateInstructions={setopenModalDonateInstructions}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
