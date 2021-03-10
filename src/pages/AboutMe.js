import React from 'react';
import AboutSection from '../components/AboutSection.js';
import Services from '../components/Services.js';
import FAQ from '../components/FAQ';
import '../styles/pages.scss';
import Nav from '../components/Nav.js';

const AboutMe = () => {
    return(
        <div className="page-content">
            <Nav />
            <AboutSection />
            <Services />
            <FAQ />
        </div>
    )
}

export default AboutMe;