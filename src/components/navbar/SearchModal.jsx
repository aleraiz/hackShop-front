import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./css/searchModal.css";

export const SearchModal = ({ setOpenModalSearch }) => {
  const handleClose = () => setOpenModalSearch(false);

  return (
    <Modal
      show={true}
      onHide={handleClose}
      centered
      tabIndex="1"
      className="modal-bg-dark"
      fullscreen
    >
      <Modal.Header>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-tippy="Close"
          data-tippy-inertia="true"
          data-tippy-animation="shift-away"
          data-tippy-delay="50"
          data-tippy-arrow="true"
          data-tippy-theme="sharpborder"
          onClick={() => {
            handleClose();
          }}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-search">
          <span className="searchbox-info">
            Start typing and press Enter to search or ESC to close
          </span>
          <form action="#" className="hm-searchbox">
            <input type="text" name="Search..." />
            <button className="search-btn" type="submit" aria-label="searchbtn">
              <i className="pe-7s-search"></i>
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
