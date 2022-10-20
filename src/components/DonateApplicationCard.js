import React from "react";
import pendingstatus from "../assets/pendingstatus.svg";
import noimage from "../assets/noimage.png";

const DonateApplicationCard = (props) => {
  const { donateCart, setDonateCart } = props;
  console.log(donateCart);

  const removeFromCart = (element) => {
    const updatedDonateCart = donateCart.filter((d, i) => d.item !== element);
    setDonateCart(updatedDonateCart);
  };

  //=============== using current date for #application number =================
  let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1,
    day = today.getDate();
  const date = "" + year + month + day;

  return (
    <div>
      {donateCart.map((eachItem, i) => {
        return (
          <>
            <div
              className="donate-application-card bs mt-2"
              key={eachItem.item}
            >
              <div className="donate-application-card-body  ">
                <span className="fs-12 fw-300 ml-2 mt-2">
                  {`#${date}000${i + 1}`}
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
                  {eachItem.image ? (
                    <img
                      src={require(`../assets/${eachItem.image}`)}
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
                  <span className="fs-16 fw-600">{eachItem.item}</span>
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
                  onClick={() => removeFromCart(eachItem.item)}
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
