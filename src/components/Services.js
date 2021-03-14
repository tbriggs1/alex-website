import React from 'react';
import {Link} from 'react-router-dom';
import clock from '../images/clock.svg';


const Services = () => {
    return(
        <div className="main-services">
            <div className="services">
                <div className="card card1">
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Weddings</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </div>
                <div className="card card2">
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Businesses</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </div>
                <div className="card card3">
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Promotional</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </div>
                <div className="card card4">
                    <img src={clock} alt="wedding" height="60px" />
                    <h2>Promotional</h2>
                    <p>Beautiful wedding videos and photos taken </p>
                </div>
                <div className="text-service">
                    <div className="service-text">
                        <h2>Very High Quality <br/><span>Content</span> and <span>Service</span></h2>
                        <p>I use a mixture of hardware and software to make sure my clients have the best technology available to them, but no technology beats a pair of steady hands,
                            unless of course you have the stabilizer! Fancy an arial shot? I also have a drone available for great content. Some example projects I've worked on are listed to the left
                        </p>
                        <button className="contact-button"><Link to="/contact">Contact Me!</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;