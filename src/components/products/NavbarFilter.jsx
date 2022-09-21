import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const NavbarFilter = () => {
  const [products, setProducts] = useState([]);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products/`,
      });
      console.log(response.data);
      setProducts(response.data);
    };
    listProducts();
  }, []);

  function handlerMsgErr() {
    MySwal.fire({
      title: "Warning!",
      text: "This functionality escapes from the scope of the project.",
      icon: "warning",
      confirmButtonText: "Cancel",
      confirmButtonColor: "#f8bb86",
    });
  }

  return (
    <div className="product-topbar">
      <ul>
        <li className="page-count">
          <span>{products.length}</span> Product Found of <span>{products.length}</span>
        </li>
        <li className="product-view-wrap">
          <ul className="nav" role="tablist">
            <li className="grid-view" role="presentation">
              <Link
                className="active"
                id="grid-view-tab"
                data-bs-toggle="tab"
                to="#"
                role="tab"
                aria-selected="true"
                onClick={() => handlerMsgErr()}
              >
                <i className="fa fa-th"></i>
              </Link>
            </li>
            <li className="list-view" role="presentation">
              <Link
                id="list-view-tab"
                data-bs-toggle="tab"
                to="#"
                role="tab"
                aria-selected="true"
                onClick={() => handlerMsgErr()}
              >
                <i className="fa fa-th-list"></i>
              </Link>
            </li>
          </ul>
        </li>
        <li className="short">
          <select className="nice-select" onClick={() => handlerMsgErr()}>
            <option value="1">Sort by Default</option>
            <option value="2">Sort by Popularity</option>
            <option value="3">Sort by Rated</option>
            <option value="4">Sort by Latest</option>
            <option value="5">Sort by High Price</option>
            <option value="6">Sort by Low Price</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
