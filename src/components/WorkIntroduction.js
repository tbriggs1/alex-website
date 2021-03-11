import React from 'react';
import Alex2 from '../images/Alex2.jpg'

const WorkIntroductionJs = () => {
    return (
        <div className="main-div">
            <div className="work-intro">
                <div className="work-img">
                    <img src={Alex2} alt="work introduction"/>
                </div>
                <div className="work-text">
                    <h1>Come check out my work below!</h1>
                    <h3>I've worked on many projects around the world over the years, from custom vides, promotional content, business content and social media promotions! 
                        <br /> I'm happy to take on new and cool projects, if you have any queries then don't hesitate to contact me!
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default WorkIntroductionJs;