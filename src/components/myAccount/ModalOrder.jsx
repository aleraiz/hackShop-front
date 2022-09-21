import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalOrder = ({ setOpenModal, productList, paymentMethod, address }) => {
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      show={true}
      onHide={handleClose}
      tabIndex="1"
      style={{ backgroundColor: "#fff" }}
      id="prueba"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
};
