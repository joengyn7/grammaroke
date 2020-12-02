import "./app.scss"
const songTitle = '命に嫌われている'

function App() {
  return (
    <div className="App">

      {/* Header */}
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
      {/* End Header */}

      {/* Toolbar */}
      <div className="toolbar">
        <button>1<span>Add Text</span></button>
        <button>2<span>Style Guides</span></button>
        <button>3</button>
        <button>4</button>
      </div>
      {/* End Toolbar */}
    </div>
  );
}

export default App;
