import Toolbar from "../../toolbar/Toolbar"
import empty from "../../../assets/empty-state.png"
import "./addSongText.scss"

const songTitle = '命に嫌われている'

function AddSongText() {
  return (
    <div className="AddSongText">
        <Toolbar />
        <div className="body">
            <img src={empty} alt="empty"></img>
            <button>Add Text</button>
        </div>
    </div>
  );
}

export default AddSongText;
