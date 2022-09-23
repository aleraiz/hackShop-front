import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Reset } from "../buttonReset/Reset";
import { toggleWelcomeModal } from "../../redux/slices/userSlice";

export const WelcomeModal = () => {
  const dispatch = useDispatch();
  const welcomeModalVisibility = useSelector((state) => {
    console.log(state);
    return state.user.welcomeModalVisibility;
  });
  const handleClose = () => dispatch(toggleWelcomeModal(false));

  return (
    <Modal
      show={welcomeModalVisibility}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body style={{ backgroundColor: "#fff" }}>
        <h1 className="titleModalHome">¡Bienvenidos a Hackshop!</h1>
        <p className="paragraphModalInicial">
          Esperámos que disfruten el recorrido por nuestra aplicación. Las credenciales quedaron
          cargadas por defecto para una mejor experencia.
        </p>
        <div className="resetDB">
          <p className="paragraphModalInicial">
            <span>RECOMENDAMOS</span> antes de iniciar a navegar resetear la base de datos, con esto
            lograrán una experiencia mas satifactoria:
          </p>
          <Reset />
        </div>
        <div className="d-flex justify-content-space-between">
          <Link to="/login">login</Link>
          <a href="https://hackshop-admin.vercel.app/">login admin</a>
          <button onClick={() => handleClose()} className="btnCloseModal">
            cerrar
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
