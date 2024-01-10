import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
export default function PageNav() {
  const phone = 9149921313;
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="list-item">
          <NavLink className="nav-link" to="home">
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="About">
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="nav-link" to="resume">
            Resume
          </NavLink>
        </li>
      </ul>
      <div className="icon-phone">
        <FontAwesomeIcon icon={faMobile} />
        {phone}
      </div>
    </nav>
  );
}
