import { toast } from "react-toastify";
const Header = (props) => {
  const { isLogin, setIsLogin } = props;
  return (
    <header>
      Titanic analitic{" "}
      {isLogin ? (
        <button
          onClick={() => {
            setIsLogin(false);
            toast("disconnected");
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
