import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
// import donateCategoryData from "../datasets/donateCat4";
import infoicon from "../assets/infoicon.svg";

import NavBarDonate from "../navbar/NavBarDonate";
import DonateInNeed from "../components/DonateInNeed";
import Instruction3 from "../components/donateModals/Instruction3";
import DonateCat4 from "../components/DonateCat4";
import ModalHowToDonateItems from "../components/donateModals/ModalHowToDonateItems";

const Donate = (props) => {
  const { setDonateCategoryPopulate, donateCategoryPopulate, setPrevPage } =
    props;

  const [openModalHowToDonate, setOpenModalHowToDonate] = useState(false);
  const [donateInstruction3, setDonateInstruction3] = useState(false);

  const handleDonateInstruction3Click = () => {
    setDonateInstruction3(true);
  };

  const handleDonateCategoryPopulate = (item) => {
    setDonateCategoryPopulate(item);
    setOpenModalHowToDonate(true);
    setPrevPage("/donate");
  };
  console.log(donateCategoryPopulate);

  useEffect(() => {
    setPrevPage("/home");
  });

  return (
    <>
      <div>
        <NavBarDonate />
        <div className="main-donate-container ml-2 mr-2 mt-2">
          <span className="donate-font1 ">I would like to donate...</span>
          <DonateCat4
            handleDonateCategoryPopulate={handleDonateCategoryPopulate}
          />
          <div className="donate-inneedof-box mt-4">
            <span className="donate-font1 mr-1">
              We are currently in need of...
            </span>
            <img
              className="infoicon"
              src={infoicon}
              alt="infoicon"
              onClick={() => {
                handleDonateInstruction3Click();
              }}
            />
          </div>
        </div>
        <DonateInNeed />
        <Instruction3
          setDonateInstruction3={setDonateInstruction3}
          donateInstruction3={donateInstruction3}
        />

        <div className="main-navbar">
          <NavBar />
        </div>
      </div>
      <ModalHowToDonateItems
        openModalHowToDonate={openModalHowToDonate}
        setOpenModalHowToDonate={setOpenModalHowToDonate}
        donateCategoryPopulate={donateCategoryPopulate}
      />
    </>
  );
};

export default Donate;
