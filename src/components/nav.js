import { Link } from 'gatsby'
import React from 'react'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;