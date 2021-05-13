import {img} from "./songCard.module.scss"

function SongCard({imgSrc, songTitle, artist}) {
    return (
        <div>
            <img className={img} src={imgSrc}></img>
            <div className="background">
                <span>{songTitle}</span>
                <span>{artist}</span>
                <button>Edit</button>
            </div>
        </div>
    );
  }
  
  export default SongCard;