import { incrementQuantity, decrementQuantity } from "../../redux/slices/cartSlice";
import { deleteProductCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export const CartItem = ({ product }) => {
  const [quantityProduct, setQuantityProduct] = useState(product.quantity);
  const dispatch = useDispatch();

  function handlerIncrementProduct(product) {
    if (product.quantity < product.stock) {
      dispatch(incrementQuantity(product.id));
    }
    if (product.quantity >= product.stock) {
      setQuantityProduct(product.stock);
    }
  }

  function handlerDecrementProduct(product) {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    }
  }

  function handlerDeleteProductFromCart(productId) {
    dispatch(deleteProductCart(productId));
  }

  const priceFormat = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  });

  return (
    <tr key={product.id}>
      <td className="product_remove">
        <button
          className="product-item_remove btnRemoveCartPage"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handlerDeleteProductFromCart(product.id);
          }}
        >
          <RiDeleteBin6Line className="removeItem" />
        </button>
      </td>
      <td className="product-thumbnail td-align-center">
        <div className="img-container">
          <Link to="#">
            <img src={product.image} alt="Cart Thumbnail" />
          </Link>
        </div>
      </td>
      <td className="product-name ">
        <Link className="product-name-link" to="#">
          {product.productName}
        </Link>
      </td>
      <td className="product-price">
        <span className="amount">${product.price}</span>
      </td>
      <td id="quantityTableCart">
        <div className="containerBtnMoreAndRemove">
          <div className="cart-plus-minus">
            <button
              className="cart-plus-minus-box"
              type="submit"
              id="quantityDecrement"
              onClick={() => {
                handlerDecrementProduct(product);
              }}
            >
              <div className="dec qtybutton">
                <i className="fa fa-minus"></i>
              </div>
            </button>
          </div>
          {product.quantity <= product.stock ? (
            <span className="quantityNumber"> {product.quantity}</span>
          ) : (
            <span className="quantityNumber"> {product.stock}</span>
          )}
          <div className="cart-plus-minus">
            <button
              className="cart-plus-minus-box"
              type="submit"
              id="quantityIncrement"
              onClick={() => {
                handlerIncrementProduct(product);
              }}
            >
              <div className="inc qtybutton">
                <i className="fa fa-plus"></i>
              </div>
            </button>
          </div>
        </div>
      </td>
      <td className="product-subtotal">
        {product.quantity <= product.stock ? (
          <span className="amount">{priceFormat.format(product.price * product.quantity)}</span>
        ) : (
          <span className="amount">{priceFormat.format(product.price * product.stock)}</span>
        )}
      </td>
    </tr>
  );
};
