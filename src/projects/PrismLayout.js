import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import { ExternalLink } from 'react-external-link';
import img00 from '../img/bc2.png';
import img01 from '../img/cryptodash.png';
import img06 from '../img/cryptodash.png';
import img07 from '../img/bitcoindash.png';


class PrismLayout extends Component {
  state = {
    logoImage: img00,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleSolutions = (index) => {
    let solutionTitles = document.querySelectorAll(".solution-title");
    let solutionA = document.querySelector(".tobe");
    let solutionB = document.querySelector(".asis");

    for (let title of solutionTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
    }

    solutionTitles[index].classList.add("active");

    if (index === 0) {
      solutionA.classList.add("display");
      solutionB.classList.remove("display");
    } else {
      solutionA.classList.remove("display");
      solutionB.classList.add("display");
    }
  }




  render() {
    return (
      <section className="project-content prismlayout">
        <div className="cover">
        <ProjectNav
            logoColor="#000000"
            menuColor="#000000"
            logo={this.state.logoImage}
            title={["CryptoDash"]}
            domain="Crypto Currency Dashboard"
            tools="React | High Charts "
            toolsTwo="CryptoCompare API | Context API"
            site={<ExternalLink href="https://cryptodashboardcoins.netlify.app/" />}
            git ={<ExternalLink href="https://github.com/Sesquina/CryptoDashboard" />}
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="summary-container">
            <div className="summary-container-left">
              <div className="content-title white">Summary</div>
              <div className="content end white">
                In this project, I designed a dashboard to show Cryptocurrency data in realtime. Utilizing React and HighCharts enabled me to create the dashboard. The data was pulled form the Crypto Compare API. 
              </div>
            </div>
            <div className="summary-container-right">
              <div className="content-title white">Functions</div>
              <div className="content end white">
                • Data initializes from remembered favorites, or forwards to Settings page.<br/>
                • Renders a line chart for the 10 historical points on current favorite symbol.<br/>
                • Select to render historical points on Date: Days Weeks Months.
              </div>
            </div>
          </div>
        </div>
        <div className="compare">
          <div className="compare-title" >
            <div className="solution-title active" onClick={()=>this.toggleSolutions(0)}>Home Page</div>
            <div className="solution-title inactive" onClick={()=>this.toggleSolutions(1)}>Coin Page</div>
          </div>
          <div className="image-wrap"><img src={img06} alt="To-Be" className="tobe display"/></div>
          <div className="image-wrap"><img src={img07} alt="As-Is" className="asis"/></div>
        </div>
        <div className="thanks">
          <div className="thanks-text">Thanks for watching!</div>
          
          <form action="http://prismlive.com/en_us/pcapp/" method="get" target="_blank" className="download">
            <button type="submit" className="download-button">SOURCE CODE</button>
          </form>
          <form action="http://prismlive.com/en_us/pcapp/" method="get" target="_blank" className="download">
            <button type="submit" className="download-button">LIVE SITE</button>
          </form>
        </div>
        <div className="bottom-navigation">
          <Link to="/prismvideo" className="link link-inactive">PRISM Video Editing Redesign</Link>
          <Link to="/prismlayout" className="link link-active">CryptoDash</Link>
          <Link to="/framer30" className="link link-inactive">30 Days of Framer X</Link>
        </div>
      </section>
    );
  }
}

export default PrismLayout;