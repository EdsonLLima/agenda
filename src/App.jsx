import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./page/Signin";
import Home from "./page/Home";
import Users from "./page/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/usuarios" element={<Users />}></Route>
        <Route path="/entrar" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
