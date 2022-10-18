import React, { useState } from "react";
// import ScaleLoader from "react-spinners/ScaleLoader";

import Instruction1 from "./Instruction1";
import Instruction2 from "./Instruction2";

const ModalDonateInstructions = (props) => {
  const { openModalDonateInstructions, setopenModalDonateInstructions } = props;
  const [donateInstruction2, setDonateInstruction2] = useState(false);
  const [setDonateInstruction3] = useState(false);

  const donateInstructionPages = () => {
    // console.log(openModalDonateInstructions);
    // console.log(donateInstruction2);
    if (openModalDonateInstructions === true) {
      return (
        <Instruction1
          setopenModalDonateInstructions={setopenModalDonateInstructions}
          setDonateInstruction2={setDonateInstruction2}
        />
      );
    } else if (donateInstruction2 === true) {
      return (
        <Instruction2
          setDonateInstruction2={setDonateInstruction2}
          setopenModalDonateInstructions={setopenModalDonateInstructions}
          setDonateInstruction3={setDonateInstruction3}
        />
      );
    }
  };

  return <div>{donateInstructionPages()}</div>;
};

export default ModalDonateInstructions;
