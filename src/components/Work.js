import React from 'react';
import Binks from '../images/binks.PNG'
import Wedding from '../images/chriswedding.PNG';

const Work = () => {
    return(
        <div>
            <div className="Work">
                <div className="background-container">
                    <div className="text-background"></div>
                        <div className="worker-text">
                            <h1>Binkys Butchers</h1>
                            <h3>On this project I worked on creating a promotional video for a local butchers</h3>
                            <button>Check it out!</button>
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
                    <h1>Wedding Video</h1>
                    <h3>For this piece I went out to narnia to film a fanastic wedding</h3>
                    <button>Check it out!</button>
                </div>
            </div>
        </div>
    )
}

export default Work;