import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';

class ProjectNav extends Component {
  state = {
    logoColor: this.props.logoColor,
    menuColor: this.props.menuColor
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="header-project">
        <div className="navigation">
          <div className="samira"><Link to="/" style={{color: this.state.logoColor}}>Samira Esquina</Link></div>
          <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="overlay mobile">
            <div className="submenus">
              <div className="work-mobile"><Link to="/">Portfolio</Link></div>
              <div className="about-mobile"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="navigation-sub">
            <div className="work"><Link to="/" style={{color: this.state.menuColor}}>Portfolio</Link></div>
            <div className="about"><Link to="/about" style={{color: this.state.menuColor}}>About</Link></div>
          </div>
        </div>
        <div className="project-info">
          <img src={this.props.logo} alt="Prism Logo" className="logo-image"/>
          <div className="project-title">{this.props.title}</div>
          <div className="project-domain">{this.props.domain}</div>
          <div className="project-details-top">
            <div className="project-details-title">Tools:</div><div className="project-details-text">{this.props.tools}</div>
          </div>
          <div className="project-details project-details-second">
            <div className="project-details-title-second">Tools</div><div className="project-details-text">{this.props.toolsTwo}</div>
          </div>
          <div className="project-details project-details-third">
            <div className="project-details-title">Site:</div><div className="project-details-text">{this.props.site}</div>
          </div>
          <div className="project-details project-details-bottom">
            <div className="project-details-title">Git:</div><div className="project-details-text">{this.props.git}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectNav;