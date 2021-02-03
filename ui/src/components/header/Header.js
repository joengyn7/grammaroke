import "./header.scss"
import {Link} from "react-router-dom";

const songTitle = 'GRAMMAROKE'

function Header() {
  return (
    <header>
        <div className="nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/mysongs">My Songs</Link>
        </div>
        <div className="song-title">
            <div>{songTitle}</div>
        </div>
    </header>
  );
}

export default Header;