import React, { useEffect } from "react";
import uploadedPhoto from "../datasets/uploadPhotos";

const UploadDonatePhoto = (props) => {
  const { donateDetailedItemArray, setDonateImage } = props;

  //filter for item name (e.g. cap)
  const filterUploadedImage = uploadedPhoto.filter(
    (d, i) => d.name === donateDetailedItemArray.name
  );
  console.log(uploadedPhoto);
  console.log(filterUploadedImage);

  const randomNumber = Math.floor(Math.random() * 2);
  const handleImage = () => {
    {
      if (filterUploadedImage.length) {
        setDonateImage(filterUploadedImage[0].images[randomNumber].image);
      } else {
        setDonateImage();
      }
    }
  };

  useEffect(() => {
    handleImage();
  }, []);
  return (
    <>
      {filterUploadedImage.length ? (
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
      )}
    </>
  );
};

export default UploadDonatePhoto;
