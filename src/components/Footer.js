import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {
    return(
        <div>
            <footer className="footer-main-header">
                            <h1>Pages:</h1>
                            <ul className="footer-content">
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/">1. About Us</Link>
                                </motion.li>
                                <div className="footer-line"></div>
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/work">2. Our Work</Link>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/contact">3. Contact Us</Link>
                                </motion.li>
                        </ul>
            </footer>
        </div>
    )
};

export default Footer;

