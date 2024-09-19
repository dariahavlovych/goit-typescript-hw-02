import Modal from "react-modal";

const ImageModal = ({ isModalOpened, closeModal, modalImage }) => {
  Modal.setAppElement("#root");
  return (
    <div>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        preventScroll={true}
        contentLabel="Example Modal"
      >
        <img src={modalImage} />
      </Modal>
    </div>
  );
};

export default ImageModal;
