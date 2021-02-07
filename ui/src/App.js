import React from 'react'
import Header from "./components/header/Header"
import Home from "./components/views/home/Home"
import MySongs from "./components/views/mySongs/MySongs"
import AddSongText from "./components/views/addSongText/AddSongText"
import SongText from "./components/views/songText/SongText"
import "./app.scss"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/songtext">
            <SongText/>
          </Route>
          <Route path="/addsongtext">
            <AddSongText/>
          </Route>
          <Route path="/mysongs">
            <MySongs/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
