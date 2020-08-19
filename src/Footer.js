import React, { Component } from "react";
import "./App.css";
import "./Responsive.css";
import linkedin from "./img/linkedin-in-brands.svg";
import email from "./img/envelope-regular.svg";
import github from "./img/github-brands.svg";

const name = "Samira Esquina";
const currentDate = new Date();
const year = currentDate.getFullYear();

class Footer extends Component {
  state = {
    linkedin: linkedin,
    email: email,
    github: github,
  };

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">Let's work together!</div>
        <div className="social-links">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/samiraesquina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedin"
                src={this.state.linkedin}
                alt="Linkedin Logo"
              />
            </a>
          </div>
          <div className="social">
            <a
              href="mailto:samiraesquina@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="email" src={this.state.email} alt="Email Logo" />
            </a>
          </div>
          <div className="social-last">
            <a
              href="https://github.com/Sesquina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github"
                src={this.state.github}
                alt="Github Logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          Created by {name} © {year}
        </div>
      </div>
    );
  }
}

export default Footer;
