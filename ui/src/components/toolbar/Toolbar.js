import "./toolbar.scss"

function Toolbar() {
  return (
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
  );
}

export default Toolbar;
