import "./header.scss"
const songTitle = '命に嫌われている'

function Header() {
  return (
    <header>
        <div className="nav">
            <a href="#homepage">Home</a>
            <span>/</span>
            <a href="#mysongs">My Songs</a>
        </div>
        <div className="song-title">
            <div>{songTitle}</div>
        </div>
    </header>
  );
}

export default Header;
