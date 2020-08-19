import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import profile from "./img/profile.jpeg";
import resume from "./Resume_SamiraEsquina.pdf";
import link from "./img/link-icon.svg"

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link
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
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="samira"><Link to="/" className="active">Samira Esquina</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile"><Link to="/">Portfolio</Link></div>
                <div className="about-mobile"><Link to="/about" className="active">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/">Portfolio</Link></div>
              <div className="about"><Link to="/about" className="active">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Full Stack Developer
          </div>
          <div className="speciality">
            UX/UI Enthusiast
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image"/>
            {window.innerWidth<=1009 ?
              <div className="about-content">
                <div>
                  <div className="my-name"><h1>Hi, I'm Samira</h1 ></div>
                  I am a Full Stack Software Developer passionate about bridging technology and design. Here are a few things that describe me.<br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title"><h1>Motivation</h1></span>
                  <blockquote>"Creative solutions are almost always preceded by some degree of risk, arrogance, confusion and conflict." -Chris Voss</blockquote> The decision to become a Software Developer came about due to my frustration with archaic technologies being used in the industries I worked in. I knew there had to be more efficient solutions to these problems. And so began my journey into learning how to develop them.<br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title"><h1>Design Experience</h1></span>
                  I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web, mobile and desktop.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                <span className="about-title"><h1>Programming Style</h1></span>
                The programming philosopy I follow is simple "Think twice, Code once". 
                <br/>If Programming is the Toolbox, then Languages, Frameworks and Libraries are the Tools. I choose the tools based on the most efficient solution.
                I am capable of creating prototypes with web based technologies such as HTML, CSS, JavaScript, React, Java and Python. 
                My knowledge of technical limitations and possibilities also lead to strong designer-developer relationships.<br/><br/>
                Feel free to contact me for any inquiries about my portfolio and work opportunities.
                </div>
              </div> :
              <div className="about-content">
               <div>
               <div className="my-name"><h1>Hi, I'm Samira</h1 ></div>
                  I'm a Full Stack Software Developer passionate about bridging technology and design. Here are a few things that describe me.<br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title"><h1>Motivation</h1></span>
                  <blockquote>"Creative solutions are almost always preceded by some degree of risk, arrogance, confusion and conflict." -Chris Voss</blockquote> The decision to become a Software Developer came about due to my frustration with archaic technologies being used in the industries I worked in. I knew there had to be more efficient solutions to these problems. And so began my journey into learning how to develop them.<br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title"><h1>Design Experience</h1></span>
                  I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web, mobile and desktop.<br/><br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title"><h1>Programming Style</h1></span>
                The programming philosopy I follow is simple "Think twice, Code once". 
                <br/>If Programming is the Toolbox, then Languages, Frameworks and Libraries are the Tools. I choose the tools based on the most efficient solution.
                I am capable of creating prototypes with web based technologies such as HTML, CSS, JavaScript, React, Java and Python. 
                My knowledge of technical limitations and possibilities also lead to strong designer-developer relationships.<br/><br/>
                Feel free to contact me for any inquiries about my portfolio and work opportunities.
                </div>
              </div>
            }
        </section>
        <div className="about-resume">
          <a href={resume} download className="about-download-button">DOWNLOAD CV</a>
        </div>
      </div>
    );
  }
}

export default About;