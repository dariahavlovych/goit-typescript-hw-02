import Modal from "react-modal";
import { AiOutlineLike } from "react-icons/ai";
import s from "./ImageModal.module.css";
import { IModal } from "../../types";

interface IModalProps {
  isModalOpened: boolean;
  closeModal: () => void;
  modalData: IModal;
}

const ImageModal: React.FC<IModalProps> = ({
  isModalOpened,
  closeModal,
  modalData,
}) => {
  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        preventScroll={true}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(47,79,79, 0.95)",
          },
        }}
      >
        <img src={modalData.image} className={s.image} />
        <p className={s.description}>{modalData.description}</p>
        <div className={s.info}>
          {" "}
          <p>Author: {modalData.author}</p>
          <p className={s.stats}>
            <AiOutlineLike className={s.icon} />
            <span>{modalData.likes}</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
