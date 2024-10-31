import s from "./ImageCard.module.css";
import { IModal, IPhoto } from "../../types";

interface ICardProps {
  onImageClick: (modalData: IModal) => void;
  img: IPhoto;
}

const ImageCard: React.FC<ICardProps> = ({ img, onImageClick }) => {
  let image = img.urls.regular;
  let description = img.description;
  let author = img.user.name;
  let likes = img.likes;
  return (
    <div>
      <img
        className={s.photo}
        src={img.urls.small}
        alt={img.alt_description}
        onClick={() => onImageClick({ image, description, author, likes })}
      />
    </div>
  );
};

export default ImageCard;
