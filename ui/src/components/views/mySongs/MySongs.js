import React from 'react';
import SongCard from '../../songCard/SongCard'
// import "./mySongs.scss" Replaced with module
import {grid} from './mySongs.module.scss'

const fakeData = [
    {
        imgSrc: "https://lh3.googleusercontent.com/proxy/LnsRYZwA7A-vXl99sq-orFRAJuA-LOTcbHYiU3NF5eTuZ61HBh3Pf6qyAFtlJBw6iI-qXRYf87Vb8PMrf6ZXNui7AmBQ3FnRPRV-HA",
        songTitle: "One",
        artist: "Kano"
    },
    {
        imgSrc: "https://lh3.googleusercontent.com/proxy/zb21C5qhg1GpaLTAYKIH1qM8YAY62HxJHhpQhjRNLDq6j3kNU28P9WTQL7jaM3jOJzHV--b_voU0Rua9a0HNrTy2AalHfv-JlRjilg",
        songTitle: "Two",
        artist: "Kano"
    },
    {
        imgSrc: "https://lh3.googleusercontent.com/proxy/sjlFCdypnPGjdHCCrrVY4MQLIpk2OFHMBLZn3bNlLUFFgz_eCBJJoGMpmvw-LfeQpPOxOTlbCwsUd2jG6nQwRA6MBTT4L2QQOXVUV6EC",
        songTitle: "Three",
        artist: "Kano"
    }]

function MySongs() {
    return (
        <div>
            <div>
                <input type="text"/>
                <span>All Songs</span>
                <button>View</button>
            </div>
                
            <div className={grid}>
                {fakeData.map(({imgSrc, songTitle, artist}) => <SongCard imgSrc={imgSrc} songTitle={songTitle} artist={artist}/>)}
            </div>
        </div>
    )
};

export default MySongs;