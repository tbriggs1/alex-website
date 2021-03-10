import React from 'react';
import alex from '../images/Alex.jpg';

const AboutSection = () => {
   return(
       <div className="mainContent">
          <div className="about-section">
              <div className="info">
                  <h1>Hi my name is <span>Alex Harrsion</span></h1>
                  <h3>I'm a passionate photographer and videographer based in West Yorkshire, although I like to adventure everywhere</h3>
              </div>
              <div className="alexPicture">
                    <img src={alex} alt="caption of alex" height="650px"/>
              </div>
          </div>
       </div>
   )
}

export default AboutSection;