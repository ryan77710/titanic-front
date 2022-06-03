import Login from "../Components/Login";
import Stat from "./Stat";

const Main = (props) => {
  const { isLogin, setIsLogin } = props;
  return <main>{isLogin ? <Stat /> : <Login isLogin={isLogin} setIsLogin={setIsLogin} />}</main>;
};
export default Main;
