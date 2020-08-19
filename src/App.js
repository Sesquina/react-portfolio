import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Main from './Main.js';

import PrismLayout from './projects/PrismLayout.js';

import Framer from './projects/Framer.js';

import About from './About.js';
import Footer from './Footer.js';
import AOS from 'aos';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    AOS.init();

    return (
      <div className="App">
        <Route
          exact path="/"
          component={Main}
        />
      
        <Route
          path="/prismlayout"
          component={PrismLayout}
        />
       
        <Route
          path="/framer30"
          component={Framer}
        />
        <Route
          path="/about"
          component={About}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;