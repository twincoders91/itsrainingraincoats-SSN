import React, { useState, useEffect } from "react";
import ModalDonateInstructions from "../components/ModalDonateInstructions";

import NavBarDonate from "../navbar/NavBarDonate";

const Donate = (props) => {
  const { openModalDonateInstructions, setopenModalDonateInstructions } = props;

  useEffect(() => {
    setopenModalDonateInstructions(true);
  }, []);

  return (
    <div>
      <NavBarDonate />
      <ModalDonateInstructions
        openModalDonateInstructions={openModalDonateInstructions}
        setopenModalDonateInstructions={setopenModalDonateInstructions}
      />
    </div>
  );
};

export default Donate;
