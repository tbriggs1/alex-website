import React from 'react';
import clock from '../images/clock.svg';


const Services = () => {
    return(
        <div>
            <div className="services">
                <div className="cards">
                    <div className="card">
                        <img src={clock} alt="wedding" height="60px" />
                        <h2>Weddings</h2>
                    </div>
                    <div className="card card-stag">
                        <img src={clock} alt="wedding" height="60px" />
                        <h2>Businesses</h2>
                    </div>
                    <div className="card">
                        <img src={clock} alt="wedding" height="60px" />
                        <h2>Social Media</h2>
                    </div>
                    <div className="card card-stag">
                        <img src={clock} alt="wedding" height="60px" />
                        <h2>Promotional</h2>
                    </div>
                </div>
                <div className="service-text">
                    <h2><span>Very High Quality Images.</span></h2>
                    <h2 className="service-text2"><span>Very High Quality Videos.</span></h2>
                    <p>I use a mixture of hardware and software to make sure my clients have the best technology available to them, but no technology beats a pair of steady hands,
                        unless of course you have the stabilizer! Fancy an arial shot? I also have a drone available for great content. Some example projects I've worked on are listed to the left
                    </p>
                    <button>Contact me!</button>
                </div>
            </div>
        </div>
    )
};

export default Services;