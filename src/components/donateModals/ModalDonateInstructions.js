import React, { useState } from "react";
// import ScaleLoader from "react-spinners/ScaleLoader";

import Instruction1 from "./Instruction1";
import Instruction2 from "./Instruction2";
import Instruction3 from "./Instruction3";

const ModalDonateInstructions = (props) => {
  const { openModalDonateInstructions, setopenModalDonateInstructions } = props;
  const [donateInstruction2, setDonateInstruction2] = useState(false);
  const [donateInstruction3, setDonateInstruction3] = useState(false);
  // const [loading, setLoading] = useState(false);

  const donateInstructionPages = () => {
    console.log(openModalDonateInstructions);
    console.log(donateInstruction2);
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
    } else if (donateInstruction3 === true) {
      return <Instruction3 setDonateInstruction3={setDonateInstruction3} />;
    }
  };

  return <div>{donateInstructionPages()}</div>;
};

export default ModalDonateInstructions;
