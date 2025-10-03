import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTelegram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="contact-footer">
      <p>
        © 2025 Interior Design Co. Crafting spaces that inspire. Follow us on
        social media to see our latest projects and ideas.
      </p>

      <div className="contact-social-links">
        <a
          href="https://www.instagram.com/zyn_interior/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a
          href="https://twitter.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>

        <a
          href="https://www.linkedin.com/in/yohanis-wandifraw-63b171193"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
