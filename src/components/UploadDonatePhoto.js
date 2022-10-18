import React, { useEffect } from "react";
import uploadedPhoto from "../datasets/uploadPhotos";

const UploadDonatePhoto = (props) => {
  const { setDonateImage } = props;
  const randomNumber = Math.floor(Math.random() * 2);
  const handleImage = () => {
    setDonateImage(uploadedPhoto[0].images[randomNumber].image);
  };
  //   console.log(uploadedPhoto[0].images[randomNumber].image);
  useEffect(() => {
    handleImage();
  });
  return (
    <div className="uploaded-donate-photos-box">
      {uploadedPhoto[0].images.map((item) => {
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
  );
};

export default UploadDonatePhoto;
