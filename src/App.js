import "./App.css";
import { useState } from "react";

import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <ToastContainer />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Main isLogin={isLogin} setIsLogin={setIsLogin} />
      <Footer />
    </div>
  );
};

export default App;
