import React, { useState } from "react";

import CreateAccountSelection from "../components/CreateAccountSelection";
import CreateAccountWorker1 from "../components/CreateAccountWorker1";
import CreateAccountWorker2 from "../components/CreateAccountWorker2";
import CreateAccountWorker3 from "../components/CreateAccountWorker3";
import CreateAccountWorker4 from "../components/CreateAccountWorker4";

export default function CreateAccount() {
  const [currentPage, setCurrentPage] = useState("selection");

  return (
    <>
      {currentPage === "selection" ? (
        <CreateAccountSelection setCurrentPage={setCurrentPage} />
      ) : null}
      {currentPage === "worker1" ? (
        <CreateAccountWorker1 setCurrentPage={setCurrentPage} />
      ) : null}
      {currentPage === "worker2" ? (
        <CreateAccountWorker2 setCurrentPage={setCurrentPage} />
      ) : null}
      {currentPage === "worker3" ? (
        <CreateAccountWorker3 setCurrentPage={setCurrentPage} />
      ) : null}
      {currentPage === "worker4" ? (
        <CreateAccountWorker4 setCurrentPage={setCurrentPage} />
      ) : null}
    </>
  );
}
