import axios from "axios";

export const Reset = () => {
  async function buttonReset() {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_DB_HOST}/reset`,
    });
  }
  return <button onClick={buttonReset}>Reset</button>;
};
