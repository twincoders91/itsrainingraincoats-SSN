import React from "react";

import Header from "../Header";
import NavBar from "../navbar/NavBar";

import ModalDonateInstructions from "../components/donateModals/ModalDonateInstructions";
import DonorHome from "../components/DonorHome";
import WorkerHome from "../components/WorkerHome";

const Home = (props) => {
  const {
    openModalDonateInstructions,
    setopenModalDonateInstructions,
    setSortedByStatus,
    persona,
    name,
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
        {persona === "donor" && (
          <DonorHome
            handleModalOpen={handleModalOpen}
            setSortedByStatus={setSortedByStatus}
            name={name}
          />
        )}
        {persona === "worker" && <WorkerHome name={name} />}
        <div
          className="main-navbar"
          style={{
            position: "fixed",
            bottom: 0,
            backgroundColor: "rgb(var(--white))",
            zIndex: 2,
            borderTop: "1px solid rgba(var(--black) / 0.2)",
          }}
        >
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
