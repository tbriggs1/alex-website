import React from 'react';
import Alex2 from '../images/Alex2.jpg'
import {fade} from '../components/Animations.js';
import {UseScroll} from '../components/Scroll.js';
import {motion} from 'framer-motion';

const WorkIntroductionJs = () => {
    const [element, controls] = UseScroll();
    return (
        <section className="main-section">
            <motion.div className="main-div" variants={fade} animate={controls} inital="hidden" ref={element}>
                <div className="work-intro">
                    <div className="work-img">
                        <img src={Alex2} alt="work introduction"/>
                    </div>
                    <div className="work-text">
                        <h2><span>Come check out my work below!</span></h2>
                        <h3>I've worked on many projects around the world over the years, from custom vides, promotional content, business content and social media promotions! 
                            <br /> I'm happy to take on new and cool projects, if you have any queries then don't hesitate to contact me!
                        </h3>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default WorkIntroductionJs;