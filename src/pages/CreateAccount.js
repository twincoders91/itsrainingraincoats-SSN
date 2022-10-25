import React, { useRef, useState } from "react";

import CreateAccountSelection from "../components/CreateAccountSelection";
import CreateAccountWorker1 from "../components/CreateAccountWorker1";
import CreateAccountWorker2 from "../components/CreateAccountWorker2";
import CreateAccountWorker3 from "../components/CreateAccountWorker3";
import CreateAccountWorker4 from "../components/CreateAccountWorker4";
import CreateAccountDonor1 from "../components/CreateAccountDonor1";
import NavBarCreateAccount from "../navbar/NavBarCreateAccount";

export default function CreateAccount(props) {
  const { persona, setPersona, setName } = props;
  const [currentPage, setCurrentPage] = useState("selection");
  const fetchBody = useRef({});

  return (
    <>
      <div className="main-header-container">
        <NavBarCreateAccount
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="main-body-container">
        {currentPage === "selection" && (
          <CreateAccountSelection
            setCurrentPage={setCurrentPage}
            setPersona={setPersona}
          />
        )}
        {currentPage === "worker1" && (
          <CreateAccountWorker1
            persona={persona}
            setCurrentPage={setCurrentPage}
            setUserId={props.setUserId}
          />
        )}
        {currentPage === "worker2" && (
          <CreateAccountWorker2
            setCurrentPage={setCurrentPage}
            setName={setName}
            userId={props.userId}
            ref={fetchBody}
          />
        )}
        {currentPage === "worker3" && (
          <CreateAccountWorker3
            setCurrentPage={setCurrentPage}
            ref={fetchBody}
          />
        )}
        {currentPage === "worker4" && (
          <CreateAccountWorker4 setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "donor1" && (
          <CreateAccountDonor1 setCurrentPage setName={setName} />
        )}
      </div>
    </>
  );
}
