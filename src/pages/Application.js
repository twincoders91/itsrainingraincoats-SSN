import React, { useContext, useEffect, useState } from "react";

import Context from "../context/context";

import HeaderGeneric from "../components/HeaderGeneric";
import NavBar from "../navbar/NavBar";

import { capitaliseFirstLetter } from "../components/utility";
import WorkerApplicationItem from "../components/WorkerApplicationItem";

const Application = () => {
  const [displayArray, setDisplayArray] = useState([]);
  const [requestCount, setRequestCount] = useState("");
  const context = useContext(Context);

  const getItemRequests = async (url) => {
    try {
      const res = await fetch(url);
      const message = await res.json();
      return message;
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    (async () => {
      const url = `http://127.0.0.1:5001/item_request/${context.userId}`;
      const res = await getItemRequests(url);
      console.log(res);
      setDisplayArray(res.data);
      setRequestCount(res.count);
    })();
  }, []);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <HeaderGeneric headerTitle="Applications" profile={true} />
      <div className="px-2 py-2">
        <p className="fs-12 fw-300 mb-2">Applied Item(s): {requestCount}</p>
        {displayArray.map((element, index) => {
          return (
            <WorkerApplicationItem
              {...element}
              key={index}
              index={index}
              setDisplayArray={setDisplayArray}
            />
          );
        })}
      </div>
      <div
        className="footer"
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
  );
};

export default Application;
