import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Notfound from "./Components/Notfound";
import Fullpost from "./Components/Fullpost";

function App() {



  return (

      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/Fullpost/:id">
            <Fullpost></Fullpost>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>


  );
}

export default App;
