import './songCard.scss'
import song_settings from '../../assets/song_settings.svg'

function SongCard({imgSrc, songTitle, artist}) {
    return (
        <div className="song-card">
            <img className="album-art" src={imgSrc}></img>
            <div className="background">
                <div className="text">
                    <span>{songTitle}</span><br/>
                    <span>{artist}</span>
                </div>
                <button className="card-btn"><img src={song_settings}/></button>
            </div>
        </div>
    );
  }
  
  export default SongCard;