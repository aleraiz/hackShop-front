import "./css/searchModal.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { BsPencilSquare } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export const SearchModal = ({ setOpenModalSearch }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchPlants, setSearchPlants] = useState("");
  const [plantFilter, setPlantFilter] = useState([]);
  const [plants, setPlants] = useState([]);
  const [debouncedSearch] = useDebounce(searchPlants, 300);

  const handleClose = () => setOpenModalSearch(false);

  useEffect(() => {
    const productsFilter = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      setPlants(response.data);

      debouncedSearch !== ""
        ? setPlantFilter(
            plants.filter((e) =>
              e.productName.toLowerCase().includes(debouncedSearch.toLowerCase()),
            ),
          )
        : setPlantFilter([]);
    };
    productsFilter();
  }, [debouncedSearch]);

  return (
    <>
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
            <form className="hm-searchbox" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="search"
                autoComplete="off"
                onChange={(e) => setSearchPlants(e.target.value)}
              />
              <button className="search-btn" type="submit" aria-label="searchbtn">
                <i className="pe-7s-search"></i>
              </button>
            </form>
          </div>
          <div className="modal-search">
            <div className="container">
              <div className="row">
                {plantFilter.length > 0
                  ? plantFilter.map((product) => (
                      <div className="col-sm-12 col-md-3 col-lg-3 productSearch" key={product.id}>
                        <Link to={`/product/${product.slug}`} onClick={() => handleClose()}>
                          <img src={product.image[1]} />
                          <p>{product.productName}</p>
                        </Link>
                      </div>
                    ))
                  : searchPlants && (
                      <div className="d-flex justify-content-center">
                        <BsPencilSquare className="svgNoResult" />
                        <p className="noResultSearch">There is no result for your search</p>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
