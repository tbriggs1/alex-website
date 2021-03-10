import React from 'react';
import alex from '../images/Alex.jpg';

const AboutSection = () => {
   return(
       <div className="mainContent">
          <div className="about-section">
              <div className="info">
                  <h1>Hi! I'm <span>Alex Harrsion</span></h1>
                  <h3>I'm a passionate <span>Photographer</span> and <span>Videographer</span> <br/> based in West Yorkshire, although I like to adventure everywhere</h3>
              </div>
              <div className="alexPicture">
                    <img src={alex} alt="caption of alex"/>
              </div>
          </div>
       </div>
   )
}

export default AboutSection;