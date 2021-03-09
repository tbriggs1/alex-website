import React from 'react';
import AboutSection from '../components/AboutSection.js';
import Services from '../components/Services.js';
import '../styles/pages.scss';
const AboutMe = () => {
    return(
        <div className="page-content">
            <AboutSection />
            <Services />
        </div>
    )
}

export default AboutMe;