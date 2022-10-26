import React, { useEffect, useState } from "react";
import pendingstatus from "../assets/pendingstatus.svg";
import noimage from "../assets/noimage.png";

const DonateApplicationCard = (props) => {
  const { donateCart, setDonateLength } = props;
  console.log(donateCart);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);

  // const removeFromCart = (element) => {
  //   const updatedDonateCart = donateCart.filter((d, i) => d.item !== element);
  //   setDonateCart(updatedDonateCart);
  // };

  //=============== using current date for #application number =================
  let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDate();
  const date = "" + year + month + day;

  const findDonateItemsDB = async () => {
    const res = await fetch("http://127.0.0.1:5001/donate/alldonateitems");
    const data = await res.json();
    setData(data);
    setDonateLength(data.length);
  };

  const deleteDonateItemsByID = async (id) => {
    setState(true);
    const res = await fetch("http://127.0.0.1:5001/donate/deletedonateitems", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({
        _id: id,
      }),
    });
    setState(false);
  };

  console.log(data);

  useEffect(() => {
    findDonateItemsDB();
  }, [state]);

  return (
    <div>
      {data.map((eachItem, i) => {
        return (
          <>
            <div
              className="donate-application-card bs mt-2"
              key={eachItem.items + Math.random() * 1000}
            >
              <div className="donate-application-card-body  ">
                <span className="fs-12 fw-300 ml-2 mt-2">
                  {`#${date}000...${eachItem._id.slice(15)}`}
                </span>
                <div className="donate-application-status-box  mr-2 mt-2">
                  <img
                    src={pendingstatus}
                    className="donate-application-status-icon mr-1"
                    alt=""
                  ></img>
                  <span className="fs-12 fw-300">Pending Review</span>
                </div>
              </div>
              <div
                className="donate-application-card-middle-row mt-2"
                key={eachItem.item + Math.random() * 1000}
              >
                <div className="application-image-box ml-2 mr-2">
                  {eachItem.img ? (
                    <img
                      src={eachItem.img}
                      className="application-image-icon"
                      alt=""
                    />
                  ) : (
                    <img
                      src={noimage}
                      className="application-image-icon"
                      alt=""
                    />
                  )}
                </div>
                <div className="application-item-description-box">
                  <span className="fs-16 fw-600">{eachItem.items}</span>
                  <span className="fs-14 fw-300">
                    {eachItem.quantity}, {eachItem.condition}
                  </span>
                </div>
              </div>
              <div
                donate-application-card-bottom-row
                className="donate-application-card-bottom-row mt-2 mb-2"
              >
                <span
                  className="application-delete fs-12 fw-600 ml-2"
                  // onClick={() => removeFromCart(eachItem.item)}
                  onClick={() => deleteDonateItemsByID(eachItem._id)}
                >
                  Delete
                </span>
                <button className="schedule-drop-off fs-14 fw-600 mr-2">
                  Schedule Drop-Off
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DonateApplicationCard;
