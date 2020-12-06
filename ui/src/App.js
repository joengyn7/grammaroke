import React from 'react'
import Header from "./components/header/Header"
import AddSongText from "./components/views/addSongText/AddSongText"
import SongText from "./components/views/songText/SongText"
import "./app.scss"

function App() {
  const [currentView, setCurrentView] = React.useState( "add-song-text" )
   
  function renderCurrentView() {
    if (currentView === "add-song-text") {
      return <AddSongText setCurrentView={setCurrentView}/>
    } 
    else if (currentView === "song-text") {
      return <SongText />
    }
  }

  return (
    <div className="App">
      <Header />
      {renderCurrentView()}
    </div>
  );
}

export default App;
