import React from 'react';
import Toolbar from "../../toolbar/Toolbar"
import empty from "../../../assets/empty-state.png"
import "./addSongText.scss"

function AddSongText({setCurrentView}) {
  const [didClick, setDidClick] = React.useState(false)
  const [text, setText] = React.useState("")

  const clickedSave = () => {
    const sanitized = text.split("\n").map(s => s.trim())
    const stanzas = []
    let newStanza = true;
    let currentStanza;
    sanitized.forEach(s => {
      if (s === "") {
        newStanza = true;
      } 
      else {
        if (newStanza === true) {
          newStanza = false;
          stanzas.push([])
          currentStanza = stanzas[stanzas.length - 1]
        }
        currentStanza.push(s)
      }
    })
    console.log(stanzas)


    setCurrentView("song-text")
  }

  return (
    <div className="AddSongText">
        <Toolbar />
        <div className="body">       
            {didClick 
              ? <>
                  <textarea value={text} onChange={e => {setText(e.target.value)}}/>
                  <button onClick={clickedSave}>Save</button> 
                </>
              : <>
                  <img src={empty} alt="empty"></img>
                  <button onClick={() => setDidClick(true)}>Add Text</button>
                </>}
        </div>
    </div>
  );
}

export default AddSongText;
