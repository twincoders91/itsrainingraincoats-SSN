import React, { useContext, useEffect, useState } from "react";
import pendingstatus from "../assets/pendingstatus.svg";
import noimage from "../assets/noimage.png";
import Context from "../context/context";

const DonateApplicationCard = (props) => {
  const context = useContext(Context);

  const { donateCart, setDonateLength } = props;
  const [data, setData] = useState([]);
  // const [state, setState] = useState(false);

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
    try {
      const res = await fetch(`http://127.0.0.1:5001/donate/${context.userId}`);
      const response = await res.json();
      setData(response.data);
      setDonateLength(response.data.length);
    } catch (err) {
      console.error(err.message);
    }
  };

  // const findDonateItemsDB = async () => {
  //   const res = await fetch("http://127.0.0.1:5001/donate/alldonateitems");
  //   const data = await res.json();
  //   setData(data);
  //   setDonateLength(data.length);
  // };

  const deleteDonateItemsByID = async (id, i) => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/donate/${id}`, {
        method: "DELETE",
      });
      const response = await res.json();

      if (response.status === "ok") {
        setData((prevState) => {
          const array = [...prevState];
          array.splice(i, 1);
          setDonateLength(array.length);
          return array;
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    findDonateItemsDB();
  }, []);

  return (
    <div>
      {data.map((eachItem, i) => {
        return (
          <div
            className="donate-application-card bs mt-2"
            key={Math.random() * 1000}
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
                {eachItem.icon ? (
                  <img
                    src={require(`../assets/${eachItem.icon}`)}
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
                <span className="fs-16 fw-600">
                  {eachItem.donation_details}
                </span>
                <span className="fs-14 fw-300">
                  {eachItem.donate_quantity}, {eachItem.item_condition}
                </span>
              </div>
            </div>
            <div className="donate-application-card-bottom-row mt-2 mb-2">
              <span
                className="application-delete fs-12 fw-600 ml-2"
                // onClick={() => removeFromCart(eachItem.item)}
                onClick={() => deleteDonateItemsByID(eachItem._id, i)}
              >
                Delete
              </span>
              <button className="schedule-drop-off fs-14 fw-600 mr-2">
                Schedule Drop-Off
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DonateApplicationCard;
