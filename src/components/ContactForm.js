import React from 'react';

const ContactForm = () => {
    return (
        <div id="contact">
            <div className="form">
                <h2>Contact Me</h2>
            </div>
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
    )
}

export default ContactForm;