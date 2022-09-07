import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./css/searchModal.css";

export const SearchModal = () => {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");

  return (
    <Modal
      show={show}
      onHide={setShow}
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
            setShow(false);
          }}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-search">
          <span className="searchbox-info">
            Start typing and press Enter to search or ESC to close
          </span>
          <form action="#" className="hm-searchbox">
            <input
              type="text"
              name="Search..."
              //   value="Search..."
              //   onblur="if(this.value==''){this.value='Search...'}"
              //   onfocus="if(this.value=='Search...'){this.value=''}"
              autocomplete="off"
            />
            <button className="search-btn" type="submit" aria-label="searchbtn">
              <i className="pe-7s-search"></i>
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
