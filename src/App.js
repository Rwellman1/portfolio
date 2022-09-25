import logo from './logo.svg';
import './CSS/App.css';
import "./CSS/Navbar.css"
import "./CSS/Home.css"
import "./CSS/WhatIDo.css"
import "./CSS/Portfolio.css"
import "./CSS/AboutMe.css"
import "./CSS/Contact.css"
import linkedIn from "./components/images/linkedin-icon.png"
import reactLogo from "./components/images/react-logo.png"
import jsLogo from "./components/images/js-logo.png"
import htmlLogo from "./components/images/html-logo.png"
import cssLogo from "./components/images/css-logo.png"
import colourPicker from "./components/images/colourpicker.png"
import portfolioSite from "./components/images/portfolio-site.png"
import bookFinder from "./components/images/book-finder.png"
import gibsonSite from "./components/images/gibson-site.png"
import Portfolio from './components/Portfolio';

import ScrimbaProject from './components/ScrimbaProjects';
import blackjack from "./components/images/blackjack-min.jpg"
import tenzies from "./components/images/tenzies-min.jpg"
import memeGenerator from "./components/images/meme_generator-min.jpg"
function App() {
  return (
    <div className="App">  
      <section className="page-container ">  
        <div className="home-flex">
            <h1>Ryan Wellman</h1>
            <div className="color-strip"></div>
            <h2>Frontend Developer</h2>
            <div className="home-button">
              <a href="#portfolio"><h3  className="home-btn1">Portfolio</h3></a>
              <a href="#contact"><h3  className="home-btn2">Contact</h3></a>
              <a href="https://www.linkedin.com/in/ryan-wellman-04952b227/"> 
                <img className='linkedin' src={linkedIn} alt="linkedin logo"/>
              </a>
            </div>
        </div>
      </section>

      <section id="portfolio" className="page-container port-container">
        <div className="nav-container ">
          <h2 className="nav-title">Portfolio</h2>
          <nav className="navbar port-nav">
            <ul className>
              <a href="#portfolio"><li>Portfolio</li></a>
              <a href="#about"><li>About Me</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </nav>
        </div>
        <div className="project-list">
          <Portfolio 
            title = "Gibson guitars landing page"
            languages = "React | SwiperJs | CSS | HTML"
            info = "I recreated the landing page for Gibson guitars, combining two of my greatest passions."
            siteImg = {gibsonSite}
            gitLink = "this is the gitlink.com"
          />
          <Portfolio 
            title = "Book search"
            languages = "React | CSS | HTML"
            info = "My first react porject, featuring the google books api I included a bookshelf which adds and removes selected books."
            siteImg = {bookFinder}
            gitLink = "this is the gitlink.com"
          />
          <Portfolio 
            title = "Portfolio website"
            languages = "React | CSS | HTML"
            info = "Using React, I designed and developed my portfolio from scratch. I designed the site using figma first."
            siteImg = {portfolioSite}
            gitLink = "this is the gitlink.com"
          />
          <Portfolio 
            title = "Colour Picker"
            languages = "JavaScript | CSS | HTML"
            info = "A colour picker app I made using vanilla Javascript. This features 'thecolorapi', using values from the dropdown menu and colour pallet to fetch a series of different colour schemes."
            siteImg = {colourPicker}
            siteLink = 'https://codepen.io/ryan-wellman/pen/dyZdzBV'
            gitLink = "this is the gitlink.com"
          />
          <h3 className='scrimba-title'>Scrimba Projects</h3>
          <p className='scrimba-p'>A few of my favourite projects created on the Frontend Developer path course with Scrimba. 
            All projects have a link to the live project and source code.
          </p>
          <ScrimbaProject 
            projectTitle = "Tenzies"
            languages = "React | HTML | CSS"
            info = "A dice game I made using React with Scrimba. This features react confetti and nanoid"
            image = {tenzies}
            link = "https://scrimba.com/scrim/coaf5495490a7ef418d33d62c"
          />
          <ScrimbaProject 
            projectTitle = "Meme generator"
            languages = "React | HTML | CSS"
            info = "A meme generator I made using javascript with Scrimba"
            image = {memeGenerator}
            link = "https://scrimba.com/scrim/cd9K3mAq"
          />
        </div>
      </section>

      <section id="about" className="page-container about-me-container">
        <div className="nav-container ">
          <h2 className="nav-title title3">About Me</h2>
          <nav className="navbar ">
            <ul className="about-me-nav">
                <a href="#portfolio"><li>Portfolio</li></a>
                <a href="#about"><li>About Me</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
          </nav>
        </div>
        <div className="about-me-text">
          <div className="about-me-quote-container">
            <p className="about-me-quote">“For the things we have to learn before we can do them, we learn by doing them.”</p>
          </div>
          <div className="about-me-flex">
            <div className="about-me-text-container">
              <div>
                <h3>Skills</h3>
                <ul className="about-me-list">
                  <li>React <img className='about-logo' src={reactLogo}/></li>
                  <li>Javascript <img className='about-logo' src={jsLogo}/></li>
                  <li>CSS <img className='about-logo' src={cssLogo}/></li>
                  <li>HTML <img className='about-logo' src={htmlLogo}/></li>
                </ul>
                <h3>My story</h3>
                <p className="about-me-p">
                    I have a strong passion for web development. Specializing in Javascript, React, CSS and HTML. 
                </p>
                <p className="about-me-p">
                    Self-development and learning are two qualities I pride myself on. with the aid of online boot camp 
                    'Scrimba', I have managed to successfully take the leap from Guitar Tutor to Web developer.
                    During this time I have created a wide variety of projects on my own initiative. 
                </p>
              </div>
            
            </div>
          </div>    
        </div>
      </section>

      <section id="contact" className="page-container contact-container">
        <div className="nav-container ">
          <h2 className="nav-title contact-title">Contact</h2>
          <nav className="navbar">
            <ul>
              <a href="#portfolio"><li>Portfolio</li></a>
              <a href="#about"><li>About Me</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </nav>
        </div>
        <div>
          <p>Please get in touch at: <a href="mailto:rwellman.dev@gmail.com" className="download-link">rwellman.dev@gmail.com</a></p>
          <p>Download CV <a className="download-link" href="src\components\Ryan Wellman-Frontend Developer.pdf" download>here</a></p>
        </div>
        <div className="contact-extra">
          <a href="https://www.linkedin.com/in/ryan-wellman-04952b227/"> 
              <img src={linkedIn} alt="linkedin logo"/>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
