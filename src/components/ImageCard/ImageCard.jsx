import React from "react";

const ImageCard = ({ src, alt, onImageClick, imgForModal }) => {
  return (
    <div>
      <img src={src} alt={alt} onClick={() => onImageClick(imgForModal)} />
    </div>
  );
};

export default ImageCard;
