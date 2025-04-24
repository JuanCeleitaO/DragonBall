import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-stats">
        <span>PERSONAJES: 58</span>
      </div>
      <hr className="footer-divider" />
      //{" "}
      <div className="server-status">
        // <span>ESTADO DEL SERVIDOR:</span>
        //<span className="status-indicator">●</span>
        //
      </div>
      <div className="footer-logos">
        
      </div>
      <div className="footer-icons">

        <a
          href="https://web.dragonball-api.com/"
          target="_blank"
          rel="api original"
        >
          🔗
        </a>
      </div>
      <div className="footer-credits">
        <span>
          por <strong>Juan Acosta y Juan Celeita</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
