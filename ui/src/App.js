import "./app.scss"

const songTitle = '命に嫌われている'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <text>
            <a href="">Home</a>
            <span>/</span>
            <a href="">My Songs</a>
          </text>
        </div>
        <div>
          <div>{songTitle}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
