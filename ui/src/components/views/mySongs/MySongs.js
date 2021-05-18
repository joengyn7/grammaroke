import React from 'react';
import SongCard from '../../songCard/SongCard'
import './mySongs.scss'
import view_list from '../../../assets/view_list.png'

import one from '../../../assets/one.jpeg'
import two from '../../../assets/two.jpeg'
import three from '../../../assets/three.png'

const fakeData = [
    {
        imgSrc: one,
        songTitle: "One One One",
        artist: "Kano Kano Kano"
    },
    {
        imgSrc: one,
        songTitle: "Two Two Two",
        artist: "Kano"
    },
    {
        imgSrc: one,
        songTitle: "Three Three Three",
        artist: "Kano"
    }]

function MySongs() {
    return (
        <div className="my-songs">
            <div className="sub-header">
                <input type="text" placeholder="Search song title, artist, ..."/>
                <span>All Songs</span>
                <button><img src={view_list}/></button>
            </div>
            <hr/>
            <div className="song-grid">
                {fakeData.map(({imgSrc, songTitle, artist}) => <SongCard imgSrc={imgSrc} songTitle={songTitle} artist={artist}/>)}
            </div>
        </div>
    )
};

export default MySongs;