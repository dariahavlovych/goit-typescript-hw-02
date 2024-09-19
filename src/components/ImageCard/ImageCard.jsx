import React from "react";

const ImageCard = ({
  src,
  alt,
  onImageClick,
  imgForModal,
  description,
  author,
  likes,
}) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={() =>
          onImageClick({ imgForModal, description, author, likes })
        }
      />
    </div>
  );
};

export default ImageCard;
