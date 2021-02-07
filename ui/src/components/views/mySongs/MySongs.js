import React from 'react';
import "./mySongs.scss"
import album1 from "../../../assets/album1.jpg"
import album2 from "../../../assets/album2.jpg"
import album3 from "../../../assets/album3.jpg"
import search from "../../../assets/search.svg"


function MySongs() {
    return (
        <div className="my-songs">
            <div className='search-drawer'>
                <div className="search-bar">
                    <form action="/action_page.php">
                        <input type="search" placeholder="Search" name="search"></input>
                    </form>
                </div>
                <button type="button" className="filter">Filter<span class="material-icons">filter_list</span></button>    
                <button type="button" className="add-song"><span class="material-icons">add_box</span>Add Song</button>
            </div>
            <div className="song-list">
            <table>
                <tr>
                    <th id="art">Art</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Last Modified</th>
                </tr>
                <tr>
                    <td><img src={album1} className="album-art"></img></td>
                    <td>命に嫌われている</td>
                    <td>カンザキイオリ</td>
                    <td>24-Nov-20 1:38pm</td>
                </tr>
                <tr>
                    <td><img src={album2} className="album-art"></img></td>
                    <td>1997</td>
                    <td>Regal Lily</td>
                    <td>14-Nov-20 5:12pm</td>
                </tr>
                <tr>
                    <td><img src={album3} className="album-art"></img></td>
                    <td>気になるあの子</td>
                    <td>相対性理論</td>
                    <td>19-Oct-20 7:18am</td>
                </tr>
                </table>
            </div>
        </div>
    )
};

export default MySongs;