import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <header className="main-header">
                <nav className="Navbar">
                    <h1 className="al-title">Alex Harrison</h1>
                            <ul className="nav-content">
                                <li>
                                    <Link to="/">1. About Us</Link>
                                    {/* <Line transition={{duration: 0.75}} initial={{width:"0%"}} animate={{width: pathname === '/' ? "50%" : "0%"}}></Line> */}
                                </li>
                                <li>
                                    <Link to="/work">2. Our Work</Link>
                                    {/* <Line transition={{duration: 0.75}} initial={{width:"0%"}} animate={{width: pathname === '/work' ? "50%" : "0%"}}></Line> */}
                                </li>
                                <li>
                                    <Link to="/contact">3. Contact Us</Link>
                                    {/* <Line transition={{duration: 0.75}} initial={{width:"0%"}} animate={{width: pathname === '/contact' ? "50%" : "0%"}}></Line> */}
                                </li>
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

