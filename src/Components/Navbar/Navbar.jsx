import React from 'react';
import logo from "../../logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" />  

        <div>
            <Link to= "/tvshows">TV Shows</Link>
        </div>
    </nav>
  )
}

export default Navbar
