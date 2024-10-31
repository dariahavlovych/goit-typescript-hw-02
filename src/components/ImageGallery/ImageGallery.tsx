import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { IPhoto, IModal } from "../../types";

interface IGalleryProps {
  photos: IPhoto[];
  onImageClick: (modalData: IModal) => void;
}

const ImageGallery: React.FC<IGalleryProps> = ({ photos, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li className={s.galleryItem} key={photo.id}>
          <ImageCard img={photo} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
