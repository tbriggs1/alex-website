import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <header className="main-header">
                <nav className="Navbar">
                    <h1 className="al-title"><Link to="/">Alex Harrison</Link></h1>
                            <ul className="nav-content">
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/">1. About</Link>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/work">2. Work</Link>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }}>
                                    <Link to="/contact">3. Contact</Link>
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


