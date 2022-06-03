import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Login = (props) => {
  const { setIsLogin } = props;

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
      await axios.post(`${process.env.REACT_APP_API_URL}login`, { email: email, password: password });
      toast.info("connected");
      setIsLogin(true);
    } catch (e) {
      toast.error("error re try :(");
    }
  };
  const SignUp = async () => {
    try {
      if (password.length === 0 || email.length === 0) {
        toast.error("missing field");
      } else {
        const data = {
          email: email,
          password: password,
        };
        await axios.post(`${process.env.REACT_APP_API_URL}signup`, data);
        toast.success("account created");
        login();
      }
    } catch (e) {
      toast.error("error re try :(");
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
