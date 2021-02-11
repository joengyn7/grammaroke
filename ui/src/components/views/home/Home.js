import React from 'react';
import warning from "../../../assets/warning.png"
import "./home.scss"

function Home() {
    return (
        <div className="container">
            <div className="home">
                <h1>Welcome <br />to Grammaroke.</h1>
                <div className="bullets">
                    <div>
                        <span class="material-icons first">fiber_manual_record</span>
                        <span>Study and sing along to your favorite songs.</span>
                    </div>
                    <div>
                        <span class="material-icons second">fiber_manual_record</span>
                        <span>Add color coded notes. Use for translation, grammar, particles, conjugatin rules.</span>
                    </div>
                    <div>
                        <span class="material-icons third">fiber_manual_record</span>
                        <span>Apply your knowledge immediately. Language learning made fun.</span>
                    </div>
                    <div>
                        <span class="material-icons fourth">fiber_manual_record</span>
                        <span>Check out the full Case Study <a href="https://kendojo.myportfolio.com/grammaroke">here.</a></span>
                    </div>
                </div>
                <div className="warning">
                    <img src={warning} alt="empty"></img>
                    <span>This site is still under development.<br />For updates, please visit the Github <a href="https://github.com/joengyn7/grammaroke">here</a>.</span>
                </div>
            </div>
            <div className="lyrics-view">
                <h3>Lyrics View Screen</h3>
                <div>
                    <ul>
                        <li className="gray-lyrics">Song lyrics appear in a waterfall style and cascade upward</li>
                        <li className="gray-lyrics">Prior lines fade into the background while the current line is bolded </li>
                        <li className="bold-lyrics">The current line remains fixed on the screen and bolded</li>
                        <li className="gray-lyrics">Comments and notes appear when the line is in focus</li>
                        <li className="gray-lyrics">Upcoming lyrics appear here</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Home;