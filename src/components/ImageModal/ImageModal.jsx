import Modal from "react-modal";
import { AiOutlineLike } from "react-icons/ai";

const ImageModal = ({ isModalOpened, closeModal, modalData }) => {
  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        preventScroll={true}
        contentLabel="Example Modal"
      >
        <img src={modalData.imgForModal} />
        <p>{modalData.description}</p>
        <p>Author: {modalData.author}</p>
        <p>
          <AiOutlineLike /> {modalData.likes}
        </p>
      </Modal>
    </div>
  );
};

export default ImageModal;
