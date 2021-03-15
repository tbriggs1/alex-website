import React from 'react';
import AboutSection from '../components/AboutSection.js';
import Services from '../components/Services.js';
import FAQ from '../components/FAQ';
import '../styles/pages.scss';
import {motion} from 'framer-motion';
import {aboutPageAnimation} from "../components/Animations.js"

const AboutMe = () => {
    return(
        <motion.div className="page-content" exit="exit" variants={aboutPageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <Services />
            <FAQ />
        </motion.div>
    )
}

export default AboutMe;