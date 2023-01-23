import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="ancreNavbar" to="/">Home</Link>
          </li>
          <li>
            <Link className="ancreNavbar" to="/web">Web</Link>
          </li>
          <li>
            <Link className="ancreNavbar" to="/audio">Audio</Link>
          </li>
          <li>
            <Link className="ancreNavbar" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
