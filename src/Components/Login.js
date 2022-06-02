import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Login = (props) => {
  const { isLogin, setIsLogin } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const login = async () => {
    try {
      await axios.post("http://localhost:3000/login", { email: email, password: password });
      toast("connected");
      setIsLogin(true);
    } catch (e) {
      toast("error re try :(");
    }
  };
  const SignUp = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      await axios.post("http://localhost:3000/signup", data);
      toast("account created");
      login();
    } catch (e) {
      toast("error re try :(");
    }
  };
  return (
    <div>
      <input placeholder="email" value={email} onChange={handleEmailChange} type="text" />
      <input placeholder="password" value={password} onChange={handlePasswordChange} type="text" />
      <button type="submit" onClick={SignUp}>
        Sign up
      </button>
      <button type="submit" onClick={login}>
        Login
      </button>
    </div>
  );
};
export default Login;
