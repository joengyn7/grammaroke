import React from 'react'
import {Link} from "react-router-dom";
import "./drawer.scss"

function Drawer({drawerOpen, setDrawerOpen}) {
    return (
        <div className="drawer-container" style={{ transform: drawerOpen ? undefined : 'translatex(-100%)' }}>
            <button class="material-icons" onClick={() => setDrawerOpen(false)}>close</button>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/mysongs">My Songs</Link></div>
            <div><a>Profile</a></div>
            <div><a>Settings</a></div>
        </div>
    );
  }
  
  export default Drawer;