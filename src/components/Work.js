import React from 'react';
import Binks from '../images/binks.PNG'
import Wedding from '../images/chriswedding.PNG';
import Photoshop from '../images/photoshop.PNG';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Work = () => {
    return(
        <section className="main-work-section">
            <div className="Work">
                <div className="background-container">
                    <div className="text-background"></div>
                        <div className="worker-text">
                            <h2><span>Binkys Butchers</span></h2>
                            <h4>On this project I worked on creating a promotional video for a local butchers</h4>
                             <Link to="/FirstWork"><motion.button whileHover={{ scale: 1.2 }}>Check it out!</motion.button></Link>
                        </div>
                </div>
                <div className="work-background">
                    <img src={Binks} alt="Binks the butcher"/>
                </div>
            </div>
            <div className="Work1">
                <div className="work-background">
                    <img src={Wedding} alt="Great wedding day"/>
                </div>
                <div className="worker-text">
                    <h2><span>Wedding Video</span></h2>
                    <h4>For this piece I went out to narnia to film a fanastic wedding</h4>
                    <Link to="/SecondWork"><motion.button whileHover={{ scale: 1.2 }}>Check it out!</motion.button></Link>
                </div>
            </div>
            <div className="Work">
                <div className="background-container">
                    <div className="text-background"></div>
                        <div className="worker-text">
                            <h2><span>Promo Video</span></h2>
                            <h4>Shooting a video with a couple of hippies</h4>
                            <Link to="/ThirdWork"><motion.button whileHover={{ scale: 1.2 }}>Check it out!</motion.button></Link>
                        </div>
                </div>
                <div className="work-background">
                    <img src={Photoshop} alt="Binks the butcher"/>
                </div>
            </div>
        </section>
    )
}

export default Work;