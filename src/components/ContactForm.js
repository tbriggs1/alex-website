import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
    return (
        <div id="contact">
            <div className="form-container">
                <div className="form">
                    <h2>Get a <span>Quote</span></h2>
                    <h4>Fill in the form or contact me on my social media - I will try and reply ASAP</h4>
                    <div className="info">
                        <div className="number">
                        <FontAwesomeIcon className="number-icon" icon={faPhone} size="3x"/>
                        <h4>+447935353511</h4>
                        </div>
                        <div className="email">
                        <FontAwesomeIcon className="email-icon" icon={faEnvelope} size="3x"/>
                        <h4>AlexHarrsion@hotmail.com</h4>
                        </div>
                        <div className="social-links">
                            <FontAwesomeIcon icon={faInstagram} size="3x"/>
                            <FontAwesomeIcon icon={faYoutube} size="3x"/>
                            <FontAwesomeIcon icon={faTwitter} size="3x"/>
                        </div>
                        </div>
                </div>
                <div className="form-div">
                    <form>
                        <div className="name-form">
                            <label for="name">Name:</label>
                            <input type="text" name="name" required /> 
                        </div>
                        <div className="email-form">
                            <label for="email"></label>
                            <input type="email" name="email" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
             </div>
        </div>
    )
}

export default ContactForm;