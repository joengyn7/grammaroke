import React from 'react';
import SongCard from '../../songCard/SongCard'
import './mySongs.scss'
import view_list from '../../../assets/view_list.svg'

import one from '../../../assets/one.jpeg'
import two from '../../../assets/two.jpeg'
import three from '../../../assets/three.png'
import regal1997 from '../../../assets/1997.jpg'
import 気になるあの子 from '../../../assets/気になるあの子.jpg'
import 命に嫌われている from '../../../assets/命に嫌われている.jpg'
import Elma from '../../../assets/elma.jpeg'
import CoffeeTime from '../../../assets/CoffeeTime.jpeg'
import SeasideSoil from '../../../assets/SeasideSoil.webp'


// TODO Connect API to use real data
const fakeData = [
    {
        imgSrc: one,
        songTitle: "One",
        artist: "Kano - 鹿乃"
    },
    {
        imgSrc: two,
        songTitle: "Two",
        artist: "Kano - 鹿乃"
    },
    {
        imgSrc: three,
        songTitle: "Three",
        artist: "Kano - 鹿乃"
    },
    {
        imgSrc: regal1997,
        songTitle: "1997",
        artist: "Regal Lily"
    },
    {
        imgSrc: 気になるあの子,
        songTitle: "気になるあの子",
        artist: "相対性理論"
    },
    {
        imgSrc: 命に嫌われている,
        songTitle: "命に嫌われている",
        artist: "カンザキイオリ"
    },
    {
        imgSrc: Elma,
        songTitle: "Elma",
        artist: "Yorushika"
    },
    {
        imgSrc: CoffeeTime,
        songTitle: "Coffee Time",
        artist: "Yorushika"
    },
    {
        imgSrc: SeasideSoil,
        songTitle: "Seaside Soil",
        artist: "Orangestar"
    }]

function MySongs() {
    return (
        <div className="my-songs">
            <div className="sub-header">
                <input type="search" class="material-icons" placeholder="search"></input>
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