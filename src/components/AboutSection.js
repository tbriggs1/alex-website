import React from 'react';
import alex from '../images/Alex.jpg';

const AboutSection = () => {
   return(
       <div>
           <div className='about-content'>
            <div className="about-text">
                <h1>Hello! My Name Is <br/><span>Alex Harrison</span></h1>
                <h3>I'm a passoniate photographer and videographer based in <span>West Yorkshire</span>, although adventure takes me everywhere! </h3>
            </div>
            <div className="img-text">
                <img className="about-img" src={alex} alt="alex the artist"/>
            </div>
            </div>
       </div>
   )
}

export default AboutSection;