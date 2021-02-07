import "./header.scss"
import {Link} from "react-router-dom";

const songTitle = 'GRAMMAROKE'

function Header() {
  return (
    <header>
      <div className="menu"><span class="material-icons">menu</span></div>
      
      <div className="nav">
        <div className="link">
          <div><span class="material-icons">home</span></div>
          <div><Link to="/">Home</Link></div>
        </div>
        <div className="link">
          <div><span class="material-icons">library_music</span></div>
          <div><Link to="/mysongs">My Songs</Link></div>
        </div>
      </div>

      <div className="song-title">
        <div>{songTitle}</div>
      </div>

      <div className="nav">
        <div className="link">
          <div><span class="material-icons">account_circle</span></div>
          <div><a>Profile</a></div>
        </div>
        <div className="link">
          <div><span class="material-icons">settings</span></div>
          <div><a>Settings</a></div>
        </div> 
      </div>
    </header>
  );
}

export default Header;