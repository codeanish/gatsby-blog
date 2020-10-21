import { Link } from 'gatsby'
import React from 'react'
import styles from './nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">{'>'}codeanish</Link>
            </div>
            <ul className={styles.nav}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/about">ABOUT</Link></li>                
            </ul>
        </nav>
    );
}

export default Nav;