import React from 'react';
import {motion} from 'framer-motion';
import {fade} from '../components/Animations.js';
import {UseScroll} from '../components/Scroll.js';

const AboutSection = () => {
    const [element, controls] = UseScroll();
   return(
       <motion.div className="main-content" >
          <section className="about-section">
              <motion.div className="info" variants={fade} animate={controls} initial="hidden" ref={element}>
                  <h2>Hi! I'm <br/><span>Alex Harrsion</span></h2>
                  <h3>I'm a passionate <br/><span>Photographer</span> and <span>Videographer</span> <br/> based in West Yorkshire, although I like to adventure everywhere</h3>
              </motion.div>
          </section>
       </motion.div>
   )
}

export default AboutSection;