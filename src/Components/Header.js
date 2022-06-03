import { toast } from "react-toastify";
const Header = (props) => {
  const { isLogin, setIsLogin } = props;

  return (
    <header>
      <span className="slide-in-left">Titanic Analytic</span>

      {isLogin ? (
        <button
          className="slide-in-right"
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
