import React from "react";
import { FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/ghideluw" target="_blank" rel="noreferrer">
            Luwam Ghide
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/luwam-ghide/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          <li>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </li>
            <a
            href="https://www.twitter.com/"
            target="_blank" rel="noreferrer"
          >
            Twitter
          </a>
          <li>
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </li>
          {" "}
          |{" "}{" "}
         <a href="https://github.com/ghideluw" target="_blank" rel="noreferrer">
            Github
          </a>
          <li>
          <FontAwesomeIcon icon="fa-brands fa-github" />
            </li>
        </p>
      </div>
    </footer>
  );
}

export default Footer;