import React from "react";
import "./Footer.css";

function Footer() {

  return (
    <footer className="site-footer">

      <p>
        © {new Date().getFullYear()},
        Created by Apeksha.
        All rights reserved.
      </p>

      <nav aria-label="social links">

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer;