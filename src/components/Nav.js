import React from 'react';
import {motion} from 'framer-motion';
import {Link, useLocation} from 'react-router-dom';

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <div>
            <header className="main-header">
                <nav className="Navbar">
                    <h1 className="al-title">Alex Harrison</h1>
                            <ul className="nav-content">
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/">1. About Us</Link>
                                </motion.li>
                                <div className="nav-line"></div>
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/work">2. Our Work</Link>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/contact">3. Contact Us</Link>
                                </motion.li>
                        </ul>
                        <div className="burger-menu">
                            <div className="burger"></div>
                            <div className="burger"></div>
                            <div className="burger"></div>
                        </div>
                </nav>
            </header>
        </div>
    )
};

export default Nav;

