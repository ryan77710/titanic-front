import { toast } from "react-toastify";
import axios from "axios";
const Header = (props) => {
  const { isLogin, setIsLogin } = props;

  const ok = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}ok`);
  };
  return (
    <header>
      <span className="slide-in-left">Titanic Analytic</span>
      <button onClick={ok}>ok</button>
      {isLogin ? (
        <button
          className="slide-in-right vibrate-1"
          onClick={() => {
            setIsLogin(false);
            toast.warning("disconnected");
          }}
        >
          Log out
        </button>
      ) : (
        ""
      )}
    </header>
  );
};
export default Header;
