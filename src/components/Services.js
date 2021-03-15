import React from 'react';
import {Link} from 'react-router-dom';
import clock from '../images/clock.svg';
import {titleAnim, photoAnim} from '../components/Animations.js';
import {UseScroll} from '../components/Scroll.js';
import {motion, AnimatePresence} from 'framer-motion';



const Services = () => {
    const [element, controls] = UseScroll();
    return(
        <AnimatePresence>
        <div className="main-services">
            <div className="services">
                <motion.div className="card card1" variants={photoAnim} animate={controls} initial="hidden" ref={element}  exit={{ opacity: 0 }}>
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Weddings</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </motion.div>
                <motion.div className="card card2" variants={photoAnim} animate={controls} initial="hidden" ref={element}  exit={{ opacity: 0 }}>
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Businesses</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </motion.div>
                <motion.div className="card card3" variants={photoAnim} animate={controls} initial="hidden" ref={element}  exit={{ opacity: 0 }}>
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Promotional</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </motion.div>
                <motion.div className="card card4" variants={photoAnim} animate={controls} initial="hidden" ref={element}  exit={{ opacity: 0 }}>
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Promotional</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </motion.div>
                <div className="text-service">
                    <motion.div className="service-text" variants={titleAnim} animate={controls} initial="hidden" ref={element}  exit={{ opacity: 0 }}>
                        <h2>Very High Quality <br/><span>Content</span> and <span>Service</span></h2>
                        <p>I use a mixture of hardware and software to make sure my clients have the best technology available to them, but no technology beats a pair of steady hands,
                            unless of course you have the stabilizer! Fancy an arial shot? I also have a drone available for great content. Some example projects I've worked on are listed to the left
                        </p>
                        <button className="contact-button"><Link to="/contact">Contact Me!</Link></button>
                    </motion.div>
                </div>
            </div>
        </div>
        </AnimatePresence>
    )
};

export default Services;