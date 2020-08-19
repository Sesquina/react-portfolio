import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Hamburgers.css';
import Project from './Project.js';

import projectone from './img/macconnectfour.jpg';
import projecttwo from './img/macmainbitcon.jpg';
import projectthree from './img/macledger.jpg';
import projectfour from './img/project-tn-04.png';


class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
    hamburgerState: "off"
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
                <div className="work-mobile"><Link to="/" className="active">Portfolio</Link></div>
                
                <div className="about-mobile"><Link to="/about">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="active">Portfolio</Link></div>
              
              <div className="about"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Full Stack Developer
          </div>
          <div className="speciality">
            Cryptocurrency Enthusiast
          </div>
        </section>
        <section className="projects">
          {window.innerWidth<=1009 ?
            <div className="left">
              <p className="projects-intro">
               Websites don't have to be static, I make pages come to life.<br/>
               My emphasis is on making sites that are responsive and intuitive. <br/>
               I care a lot about user experience, minimalism, collaboration and clean code.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={["Beautifully fast dashboard with React, Context API, styled-components & CSS Grid"]}
                color="rgba(11, 156, 150, 0.95)"
                title="Crypto Dashboard"
                category="React Application"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={["Adaptation of the classic Connect Four game using Cryptocurrency as the game pieces ", <br/>, "Pure HTML, CSS, JS and jQuery"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Crypto Connect Four"
                category="JavaScript | jQuery"
                index="1"
              />
            </div> :
            <div className="left">
              <p className="projects-intro">
               Websites don't have to be static, I make pages come to life.<br/>
               My emphasis is on designing sites that are responsive and intuitive. <br/>
               I care a lot about minimalism, collaboration and clean code. <br/>

               Please Enjoy! <br/>
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={["Adaptation of Connect Four using Cryptocurrency as the game pieces.", <br/>, "HTML, CSS, Vanilla JS and jQuery"]}
                color="rgba(11, 156, 150, 0.95)"
                title="Connect Four"
                category="JavaScript | jQuery"
                index="0"
              />
              <Project
                aos=""
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw"
                class="project-last"
                hmw={["One stop Price & News Website"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Crypto News Database"
                category="React | APIs"
                index="1"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Project
                aos="fade-up"
                image={this.state.projectTwoImage}
                link="/prismlayout"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["Beautifully fast dashboard with React, Context API, styled-components & CSS Grid"]}
                color="rgba(251, 192, 96, 0.95)"
                title="Crypto Dashboard"
                category="React Web App"
                index="2"
              />
              <Project
                aos="fade-up"
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["Landing Page for Smart Contract", <br/>, "interactive prototypes", <br/>, "with React.js?"]}
                color="rgba(114, 164, 238, 0.95)"
                title="30 Days of Framer X"
                category="Interactive Prototypes"
                index="3"
              />
            </div> :
            <div className="right">
              <Project
                aos=""
                image={this.state.projectTwoImage}
                link="/prismlayout"
                hmwClass="hmw"
                class="project-default"
                hmw={["Beautifully fast & responsive",<br/>, "Crypto Currency Dashboard using",<br/>," React, Cryptocompare API," ,<br/>,"Context API & CSS Grid"]}
                color="rgba(251, 192, 96, 0.95)"
                title="Crypto Dash"
                category="ReactJS | APIs | CSS Grid"
                index="2"
              />
              <Project
                aos=""
                image={this.state.projectThreeImage}
                link="/framer30"
                hmwClass="hmw"
                class="project-default"
                hmw={["Landing page for Blockchain Website.", <br/>, "Using HTML, CSS & JS "]}
                color="rgba(114, 164, 238, 0.95)"
                title="Ledger"
                category="HTML | CSS | JS"
                index="3"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Main;