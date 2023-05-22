import { Link } from "react-router-dom";
import logo from "../../../public/logo2.png";
import "./style.css";

export function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/">Agenda</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuários</Link>
          </li>
          <li>
            <Link to="/entrar">Acessar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
