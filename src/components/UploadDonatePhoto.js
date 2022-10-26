import React, { useEffect, useState } from "react";
import uploadedPhoto from "../datasets/uploadPhotos";

const UploadDonatePhoto = (props) => {
  const { donateDetailedItemArray, setDonateImage, donateImage } = props;
  const [imageState, setImageState] = useState("");
  //filter for item name (e.g. cap)
  const filterUploadedImage = uploadedPhoto.filter(
    (d, i) => d.name === donateDetailedItemArray.name
  );
  console.log(uploadedPhoto);
  console.log(filterUploadedImage);

  const randomNumber = Math.floor(Math.random() * 2);
  const handleImage = () => {
    // {
    //   if (filterUploadedImage.length) {
    //     setDonateImage(filterUploadedImage[0].images[randomNumber].image);
    //   } else {
    //     setDonateImage();
    //   }
    // }
    if (donateDetailedItemArray.name === "Cap") {
      setDonateImage("https://i.imgur.com/9j29aHt.jpg");
    } else if (donateDetailedItemArray.name === "rice/noodles") {
      setDonateImage("https://i.imgur.com/n48S5ft.jpg");
    } else if (donateDetailedItemArray.name === "Soap") {
      setDonateImage("https://i.imgur.com/a0k1duM.jpg");
    } else if (donateDetailedItemArray.name === "Toothbrush") {
      setDonateImage("https://i.imgur.com/GIdSqnp.jpg");
    } else if (donateDetailedItemArray.name === "Spectacles") {
      setDonateImage("https://i.imgur.com/dQTMcCj.jpg");
    } else if (donateDetailedItemArray.name === "Shaver") {
      setDonateImage("https://i.imgur.com/jDf9PqE.jpg");
    } else if (donateDetailedItemArray.name === "Pants") {
      setDonateImage("https://i.imgur.com/uedf2me.jpg");
    } else if (donateDetailedItemArray.name === "Suit") {
      setDonateImage("https://i.imgur.com/gIwHAll.jpg");
    } else if (donateDetailedItemArray.name === "Shirt") {
      setDonateImage("https://i.imgur.com/hXGIy8F.jpg");
    } else if (donateDetailedItemArray.name === "Safety boots") {
      setDonateImage("https://i.imgur.com/OdGl3Gp.jpg");
    } else if (donateDetailedItemArray.name === "Raincoat") {
      setDonateImage("https://i.imgur.com/k2FEif2.jpg");
    } else if (donateDetailedItemArray.name === "Shoes") {
      setDonateImage("https://i.imgur.com/atQlkai.png");
    } else if (donateDetailedItemArray.name === "Sunglasses") {
      setDonateImage("https://i.imgur.com/ZsC90uC.jpg");
    } else if (donateDetailedItemArray.name === "data card") {
      setDonateImage("https://i.imgur.com/dfSalCl.jpg");
    } else if (donateDetailedItemArray.name === "earbuds") {
      setDonateImage("https://i.imgur.com/Gnx8DUV.jpg");
    } else if (donateDetailedItemArray.name === "latop") {
      setDonateImage("https://i.imgur.com/XnPp79g.jpg");
    } else if (donateDetailedItemArray.name === "portable power bank") {
      setDonateImage("https://i.imgur.com/W0XOj97.jpg");
    } else if (donateDetailedItemArray.name === "extension cord") {
      setDonateImage("https://i.imgur.com/RDiMRtg.jpg");
    } else if (donateDetailedItemArray.name === "smartphone") {
      setDonateImage("https://i.imgur.com/G80Cndj.png");
    } else if (donateDetailedItemArray.name === "kettle") {
      setDonateImage("https://i.imgur.com/b7mPvQB.jpg");
    } else if (donateDetailedItemArray.name === "microwave") {
      setDonateImage("https://i.imgur.com/ZdUzRYW.jpg");
    } else if (donateDetailedItemArray.name === "ironing board") {
      setDonateImage("https://i.imgur.com/8RdW0Gl.jpg");
    } else if (donateDetailedItemArray.name === "iron") {
      setDonateImage("https://i.imgur.com/TSKBI46.jpg");
    } else if (donateDetailedItemArray.name === "fridge") {
      setDonateImage("https://i.imgur.com/pwbVnyc.png");
    } else if (donateDetailedItemArray.name === "fan") {
      setDonateImage("https://i.imgur.com/OXpL5tn.png");
    } else if (donateDetailedItemArray.name === "blender") {
      setDonateImage("https://i.imgur.com/yqD1pyN.jpg");
    } else if (donateDetailedItemArray.name === "toaster") {
      setDonateImage("https://i.imgur.com/vVC32cT.jpg");
    } else if (donateDetailedItemArray.name === "washing machine") {
      setDonateImage("https://i.imgur.com/MLbPwCB.png");
    } else if (donateDetailedItemArray.name === "rice cooker") {
      setDonateImage("https://i.imgur.com/NRycD1n.jpg");
    } else if (donateDetailedItemArray.name === "bicycle") {
      setDonateImage("https://i.imgur.com/xwnMx6X.jpg");
    } else if (donateDetailedItemArray.name === "dumbbells") {
      setDonateImage("https://i.imgur.com/r0XZxO4.jpg");
    } else if (donateDetailedItemArray.name === "cricket gear") {
      setDonateImage("https://i.imgur.com/KKcYinJ.jpg");
    } else if (donateDetailedItemArray.name === "board games") {
      setDonateImage("https://i.imgur.com/7uCK8XF.jpg");
    }
  };
  console.log(donateDetailedItemArray);

  useEffect(() => {
    handleImage();
  }, []);
  return (
    <>
      <div className="uploaded-donate-photos-box">
        <img
          src={donateImage}
          className="uploaded-image mr-2 mt-2"
          alt=""
        ></img>
      </div>
      {/* {filterUploadedImage.length ? (
        <div className="uploaded-donate-photos-box">
          {filterUploadedImage[0].images.map((item) => {
            return (
              <img
                src={require(`../assets/${item.image}`)}
                className="uploaded-image mr-2 mt-2"
                key={item.image + Math.random() * 1000}
                alt=""
              ></img>
            );
          })}
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default UploadDonatePhoto;
