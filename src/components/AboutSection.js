import React from 'react';
import {Link} from 'react-router-dom';

const AboutSection = () => {
   return(
       <div className="main-content">
          <section className="about-section">
              <div className="info">
                  <h2>Hi! I'm <span>Alex Harrsion</span></h2>
                  <h3>I'm a passionate <span>Photographer</span> and <span>Videographer</span> <br/> based in West Yorkshire, although I like to adventure everywhere</h3>
              </div>
              <button className="contact-button"><Link to="/contact">Contact Me Here!</Link></button>
          </section>
       </div>
   )
}

export default AboutSection;