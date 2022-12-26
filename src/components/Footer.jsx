import React from "react";
import githubIcon from "../assets/github-icon.png";

export default function Footer() {
  return (
    <footer>
      <p className="footer--text">Made with ❤️ by </p>
      <a className="contact-container" target="_blank" href="https://github.com/Abhijeet-Gautam5702">
        <span className="footer--profile-name">Abhijeet Gautam</span>
        <img className="footer--img" src={githubIcon} alt="profile" />
      </a>
    </footer>
  );
}
