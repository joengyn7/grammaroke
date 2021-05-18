import React from 'react'
import {Link} from "react-router-dom";
import "./drawer.scss"

//TODO Make drawer close after clicking link
function Drawer({drawerOpen, setDrawerOpen}) {
    return (
        <div className="drawer-container" style={{ transform: drawerOpen ? undefined : 'translatex(-100%)' }}>
            <button class="material-icons" onClick={() => setDrawerOpen(false)}>close</button>
            <div className="links">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/mysongs">My Songs</Link></div>
                <div><a>Profile</a></div>
                <div><a>Settings</a></div>
            </div>
        </div>
    );
  }
  
  export default Drawer;