import React from 'react'
import Header from "./components/header/Header"
import Drawer from "./components/drawer/Drawer"
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
  const [drawerOpen, setDrawerOpen] = React.useState(true)

  return (
    <div className="app">
      <BrowserRouter>
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
        <div className="grid-container">
          <Header setDrawerOpen={setDrawerOpen}/>
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
