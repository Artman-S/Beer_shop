import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <ul className="FooterUl">
          <li className="Liste">
            <Link className="ancreFooter" to="/Contact">
              Contact
            </Link>
          </li>
            <li>
                <a href="https://www.linkedin.com/in/sebastien-artesi/" target="_blank">
                <img src="assets/linkedin.svg"/>              </a>
            </li>
          <li>
                <a href="https://github.com/Artman-S">
                <img src="assets/github.svg" aria-hidden="true"></img>
                </a>
            </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
