import React from "react";


// ReactDOM.render(element, document.body)
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
          {" "}
          |{" "}{" "}
            <a
            href="https://www.twitter.com/"
            target="_blank" rel="noreferrer"
          >
            Twitter
          </a>
          
          {" "}
          |{" "}{" "}
         <a href="https://github.com/ghideluw" target="_blank" rel="noreferrer">
            Github
          </a>
          
        </p>
      </div>
    </footer>
  );
}

export default Footer;