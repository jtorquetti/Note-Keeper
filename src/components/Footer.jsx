import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="https://www.facebook.com/joao.torquetti">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/jaotorquetti/">
        <InstagramIcon />
      </a>
      <a href="https://github.com/jtorquetti">
        <LinkedInIcon />
      </a>
      <a href="mailto:joao.torquetti@outlook.ie">
        <GitHubIcon />
      </a>
      <p class="copyright">Copyright ⓒ Joao Torquetti {year}</p>
    </footer>
  );
}

export default Footer;
