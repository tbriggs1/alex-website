import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <div className="Navbar">
                <h1 className="al-title">Alex Harrison</h1>
                    <div className="nav-content">
                    <ul>
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
            </div>
            </div>
        </div>
    )
};

export default Nav;

