import React, { useState } from "react";
import ModalHowToApplyForItems from "./components/ModalHowToApplyForItems";
import Header from "./Header";
import NavBar from "./navbar/NavBar";
import Home from "./pages/Home";
import ReactApp from "./components/ReactApp";

function App() {
  const [openModalApplyItems, setOpenModalApplyItems] = useState(false);

  return <ReactApp />;
  // return (
  // <div className="main-app-container">
  //   {!openModalApplyItems ? (
  //     <>
  //       <div className="main-header-container">
  //         <Header />
  //       </div>
  //       <div className="main-body-container">
  //         <Home setOpenModalApplyItems={setOpenModalApplyItems} />
  //       </div>
  //       <div className="main-navbar">
  //         <NavBar />
  //       </div>
  //     </>
  //   ) : (
  //     <div className="main-modal-applyforitems-container">
  //       <ModalHowToApplyForItems
  //         setOpenModalApplyItems={setOpenModalApplyItems}
  //       />
  //     </div>
  //   )}
  // </div>
  // );
}

export default App;
