import "./assets/css/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/ion.rangeSlider.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/Pe-icon-7-stroke.css";
import "./assets/css/plugins.min.css";
import "./assets/css/swiper-bundle.min.css";

import { Link } from "react-router-dom";
import { Home } from "./components/Home";
function App() {
  return (
    <>
      <div className="app">
        <Home />
      </div>
    </>
  );
}

export default App;
