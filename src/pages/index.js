import React from "react"
import {Link} from 'gatsby'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Home;