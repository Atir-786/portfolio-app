import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  // faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function HomePage() {
  const { firstName, lastName, profession } = {
    firstName: "Mohammad",
    lastName: "Atir",
    profession: "Web Developer",
  };
  return (
    <main className="home-page">
      <div className="overlay"></div>
      <div className="name">
        <h1 className="normal">{firstName}</h1>
        <h1 className="bold">{lastName}</h1>
        <h3>{profession}</h3>
        <div className="links">
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </div>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/syed.atir.16"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
        </a>
        <a
          href="https://www.instagram.com/syed_atir_mir/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
        </a>
        <a href="https://github.com/Atir-786" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-atir-233668225/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" />
        </a>
      </div>
    </main>
  );
}
