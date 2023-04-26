import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function alertResetDB() {
  MySwal.fire({
    title: <strong>Listo!</strong>,
    html: <i>La base de datos fue reseteada!</i>,
    icon: "success",
  });
}

export const Reset = () => {
  async function buttonReset() {
    try {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/reset`,
      });
      alertResetDB();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button className="welcomeModalBtn" onClick={buttonReset}>
      Reset
    </button>
  );
};
