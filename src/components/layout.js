import React from 'react'
import Nav from './nav'
import "./layout.scss"

const Layout = ({children}) => {
    return(
        <div>
            <Nav/>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;