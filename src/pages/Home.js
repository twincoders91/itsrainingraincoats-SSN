import React from "react";
import Header from "../Header";
import NavBar from "../navbar/NavBar";

import ModalDonateInstructions from "../components/donateModals/ModalDonateInstructions";
import DonorHome from "./DonorHome";

const Home = (props) => {
  const {
    openModalDonateInstructions,
    setopenModalDonateInstructions,
    setSortedByStatus,
  } = props;

  const handleModalOpen = () => {
    setopenModalDonateInstructions(true);
  };

  return (
    <>
      <div className="main-home-container">
        <div className="main-header-container">
          <Header />
        </div>
        <DonorHome
          handleModalOpen={handleModalOpen}
          setSortedByStatus={setSortedByStatus}
        />
        {/* <WorkerHome /> */}
        <div className="main-navbar">
          <NavBar />
        </div>
      </div>
      <ModalDonateInstructions
        openModalDonateInstructions={openModalDonateInstructions}
        setopenModalDonateInstructions={setopenModalDonateInstructions}
      />
    </>
  );
};

export default Home;
