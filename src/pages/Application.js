import React, { useContext, useEffect, useState } from "react";

import Context from "../context/context";

import HeaderGeneric from "../components/HeaderGeneric";
import NavBar from "../navbar/NavBar";

import { capitaliseFirstLetter } from "../components/utility";

const Application = () => {
  const [displayArray, setDisplayArray] = useState([]);
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
      setDisplayArray(res);
    })();
  }, []);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <HeaderGeneric headerTitle="Applications" profile={true} />
      <div className="px-2 py-2">
        <span className="fs-12 fw-300 mb-2">Applied Item(s): {`count`}</span>
        {displayArray.map((element, index) => {
          return (
            <div key={index} className="application__card-container">
              <div className="row mb-2 px-2 py-1" style={{ width: "100%" }}>
                {/* <img
                  src={require(`../assets/${element.icon}`)}
                  alt=""
                  height="32px"
                /> */}
                Icon
                <div
                  className="col ml-2"
                  style={{ flex: 1, alignItems: "flex-start" }}
                >
                  {/* Item Name */} <p>{capitaliseFirstLetter(element.item)}</p>
                  {/* Waiting Time */} <p>Time</p>
                </div>
                {/* Delete Button Here */} Delete
              </div>
            </div>
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
