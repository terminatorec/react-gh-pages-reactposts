import React from 'react'
import {BrowserRouter,Switch,Route,Routes,Router,Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar