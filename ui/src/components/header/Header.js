import "./header.scss"
import {Link} from "react-router-dom";

const songTitle = 'GRAMMAROKE'

function Header({setDrawerOpen}) {
  return (
    <header>
      <button className="menu" onClick={() => setDrawerOpen(true)}><span class="material-icons">menu</span></button>
      
      <div className="nav">
        <Link to="/" className="link">
          <span class="material-icons">home</span>
          <div className="text">Home</div>
        </Link>
        <Link to="/mysongs" className="link">
          <span class="material-icons">library_music</span>
          <div>My Songs</div>
        </Link>
      </div>

      <div className="song-title">
        <div>{songTitle}</div>
      </div>

      <div className="nav">
        <Link className="link">
          <span class="material-icons">account_circle</span>
          <div><a>Profile</a></div>
        </Link>
        <Link className="link">
          <span class="material-icons">settings</span>
          <div><a>Settings</a></div>
        </Link> 
      </div>
    </header>
  );
}

export default Header;