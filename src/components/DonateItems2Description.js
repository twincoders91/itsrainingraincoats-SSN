import React, { useState } from "react";
import { Link } from "react-router-dom";

import pagecontrols2 from "../assets/pagecontrols2.svg";
import infoicon from "../assets/info.svg";
import upload from "../assets/upload.svg";
import UploadDonatePhoto from "./UploadDonatePhoto";

const DonateItems2Description = (props) => {
  const { donateDetailedItemArray, setDonateCart, donateCart } = props;
  console.log(donateDetailedItemArray);

  const [donateQuantityButton1, setDonateQuantityButton1] = useState(false);
  const [donateQuantityButton2, setDonateQuantityButton2] = useState(false);
  const [donateConditionButton1, setDonateConditionButton1] = useState(false);
  const [donateConditionButton2, setDonateConditionButton2] = useState(false);
  const [donateConditionButton3, setDonateConditionButton3] = useState(false);
  const [donateQuantity, setDonateQuantity] = useState("");
  const [donateCondition, setDonateCondition] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [comments, setComments] = useState("");
  const [donateImage, setDonateImage] = useState();

  const handleDonateQuantityClick1 = () => {
    setDonateQuantityButton1(true);
    setDonateQuantityButton2(false);
    setDonateQuantity("small donation");
  };
  const handleDonateQuantityClick2 = () => {
    setDonateQuantityButton1(false);
    setDonateQuantityButton2(true);
    setDonateQuantity("bulk donation");
  };
  const handleDonateConditionClick1 = () => {
    setDonateConditionButton1(true);
    setDonateConditionButton2(false);
    setDonateConditionButton3(false);
    setDonateCondition("brand new");
  };
  const handleDonateConditionClick2 = () => {
    setDonateConditionButton1(false);
    setDonateConditionButton2(true);
    setDonateConditionButton3(false);
    setDonateCondition("lightly used");
  };
  const handleDonateConditionClick3 = () => {
    setDonateConditionButton1(false);
    setDonateConditionButton2(false);
    setDonateConditionButton3(true);
    setDonateCondition("heavily used");
  };
  const handleUploadPhoto = () => {
    setUploadPhoto(true);
    console.log("click");
  };

  const handleComments = (event) => {
    setComments(event.target.value);
  };
  // const handleSubmitApplication = () => {
  //   setComments(commentsInput);
  // };

  //===== creating donate Application array by populating user's input =====
  const donationApplicationArray = {
    item: donateDetailedItemArray.name,
    image: donateImage,
    quantity: donateQuantity,
    condition: donateCondition,
    comments: comments,
  };

  // const addToCart = () => {
  //   setDonateCart([...donateCart, donationApplicationArray]);
  // };
  // console.log(donateCart);
  console.log(donateImage);
  //function to add into backend DB
  const createDonateItemsDB = async () => {
    const res = await fetch("http://127.0.0.1:5001/donate/newdonateitems", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        img: donateImage,
        items: donateDetailedItemArray.name,
        quantity: donateQuantity,
        condition: donateCondition,
        comments: comments,
      }),
    });
  };

  return (
    <div>
      <div className="donate-items-category-container">
        <div className="donate-items-category-container">
          <div className="donate-category-box ml-2 mr-2 mt-2">
            <div className="donate-location-fonts-box">
              <span className="donate-location-font1">
                Step 3 of 3 - Choose donate item and describe condition
              </span>
              <span className="donate-location-font2 mt-2">Donate item</span>
            </div>
          </div>
          <div className="donate-item-box ml-2 mr mt-2">
            <img
              src={require(`../assets/${donateDetailedItemArray.icon}`)}
              alt=""
              className="donate-item-finalchoice"
            ></img>
            <span className="donate-item-finalchoice-font">
              {donateDetailedItemArray.name}
            </span>
          </div>
          <div className="donate-description-top-box ml-2 mr-2">
            <div className="donate-itemdescription-box mt-4">
              <span className="fw-700 fs-16 mr-1">Donate Quantity</span>
              <img src={infoicon} alt="" className="info-icon"></img>
            </div>
            <div className="donate-itemdescription-button-box mt-2">
              <button
                className={
                  donateQuantityButton1
                    ? `donate-itemdescription-buttons-active mr-2`
                    : `donate-itemdescription-buttons mr-2`
                }
                onClick={() => {
                  handleDonateQuantityClick1();
                }}
              >
                Small (1-10)
              </button>
              <button
                className={
                  donateQuantityButton2
                    ? `donate-itemdescription-buttons-active`
                    : `donate-itemdescription-buttons`
                }
                onClick={() => {
                  handleDonateQuantityClick2();
                }}
              >
                Bulk (10+)
              </button>
            </div>
            <div className="donate-itemdescription-box mt-4">
              <span className="fw-700 fs-16 mr-1">Item condition</span>
              <img src={infoicon} alt="" className="info-icon"></img>
            </div>
            <div className="donate-itemdescription-button-box mt-2">
              <button
                className={
                  donateConditionButton1
                    ? `donate-itemdescription-buttons-active mr-2`
                    : `donate-itemdescription-buttons mr-2`
                }
                onClick={handleDonateConditionClick1}
              >
                Brand New
              </button>
              <button
                className={
                  donateConditionButton2
                    ? `donate-itemdescription-buttons-active mr-2`
                    : `donate-itemdescription-buttons mr-2`
                }
                onClick={handleDonateConditionClick2}
              >
                Lightly Used
              </button>
              <button
                className={
                  donateConditionButton3
                    ? `donate-itemdescription-buttons-active mt-2`
                    : `donate-itemdescription-buttons mt-2`
                }
                onClick={handleDonateConditionClick3}
              >
                Heavily Used
              </button>
            </div>
            <div className="donate-itemdescription-box mt-4">
              <span className="fw-700 fs-16 mr-1">
                Upload photo of the item
              </span>
              <img src={infoicon} alt="" className="info-icon"></img>
            </div>
            {uploadPhoto ? (
              <UploadDonatePhoto
                donateDetailedItemArray={donateDetailedItemArray}
                setDonateImage={setDonateImage}
                donateImage={donateImage}
              />
            ) : (
              <></>
            )}

            <div className="donate-itemdescription-button-box mt-2 ">
              <div
                className={`donate-itemphoto-buttons`}
                onClick={() => handleUploadPhoto()}
              >
                <img src={upload} alt="" className="upload-icon"></img>
                <span className="fs-16 fw-600">Upload photo from library</span>
              </div>
            </div>
            <div className="comment-box mt-4">
              <span className="fw-700 fs-16 mr-1">Comments</span>
              <input
                type="text"
                className="comment-input-box mt-2"
                onChange={handleComments}
              ></input>
            </div>
            <div className="submission-box mt-4">
              <Link to="/donate-confirmation">
                <button
                  className={
                    (donateQuantityButton1 || donateQuantityButton2) &&
                    (donateConditionButton2 ||
                      donateConditionButton1 ||
                      donateConditionButton3)
                      ? `donate-itemdescription-buttons-active`
                      : `donate-itemdescription-buttons`
                  }
                  disabled={
                    !(donateQuantityButton1 || donateQuantityButton2) &&
                    (donateConditionButton2 ||
                      donateConditionButton1 ||
                      donateConditionButton3)
                      ? true
                      : false
                  }
                  onClick={() => createDonateItemsDB()}
                  // onClick={() => addToCart()}
                >
                  Submit Application
                </button>
              </Link>
            </div>
          </div>

          <div className="donate-items-button-container">
            <div className="donate-items-scroller-box-nonabsolute mt-4 mb-4">
              <img src={pagecontrols2} alt="pagescroller" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateItems2Description;
