import React from 'react'
import Nav from './nav'
import "../styles/global.scss"
import styles from './layout.module.scss'

const Layout = ({children}) => {
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Nav/>
            </div>
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    )
}

export default Layout;