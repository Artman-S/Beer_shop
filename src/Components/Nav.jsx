import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <>
    <nav>
      <img className="Logo" src="./assets/logo.jpeg" alt="logo marque" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Beers">Beers</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Nav;
