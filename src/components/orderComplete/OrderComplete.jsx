import "./styles.css";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const OrderComplete = () => {
  return (
    <div className="divpadreOrder">
      <div className="divContainerOrder">
        <BsCheckCircle className="svgCheckOrder" />
        <p style={{ fontSize: "30px" }}>Thank you!</p>
        <p clasName="paragraphOrderSuccess">
          Your order was completed successfully, for more details you can see it{" "}
          <Link to="/account">here</Link>.
        </p>
      </div>
    </div>
  );
};
