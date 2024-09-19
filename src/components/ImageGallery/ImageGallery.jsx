import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            src={photo.urls.small}
            alt={photo.alt_description}
            onImageClick={onImageClick}
            imgForModal={photo.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
