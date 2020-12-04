import empty from "./assets/empty-state.png"
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
        <button id="btn1">
          <span class="material-icons">library_add</span>
          <span className="btn-text">Add Text</span>
        </button>
        <button id="btn2"> 
          <span class="material-icons">border_color</span>
          <span className="btn-text">Style Guides</span>
        </button>
        <button id="btn3">
          <span class="material-icons">undo</span>
        </button>
        <button id="btn4">
          <span class="material-icons">redo</span>
        </button>
      </div>
      {/* End Toolbar */}

      {/* Body */}
        <div className="body">
          <img src={empty} alt="empty"></img>
          <button>Add Text</button>
        </div>
      {/* End Body */}

    </div>
  );
}

export default App;
