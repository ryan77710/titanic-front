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
      const response = await axios.post("http://localhost:3000/login", { email: email, password: password });
      console.log(response);
      toast.info("connected");
      setIsLogin(true);
    } catch (e) {
      toast.error("error re try :(");
    }
  };
  const SignUp = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      await axios.post("http://localhost:3000/signup", data);
      toast.succes("account created");
      login();
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
