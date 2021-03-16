import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/contact.scss'
import ContactForm from '../components/ContactForm';
import {motion} from 'framer-motion';
import {pageAnimation} from "../components/Animations.js"

const Contact = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
        <ContactForm />
        </motion.div>
    )
}

export default Contact;