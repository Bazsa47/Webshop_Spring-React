import './Style/App.css';
import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Properties from './Components/Properties';
import Favourites from './Components/Favourites';
import Auth from './Components/Auth';
import placeholder from "./Style/img/sample.jpg"

function App() {
  return (
    <div className="App">
             <img src={placeholder} alt="" className ="mainImg"/>
      <Router>
        <div className="container">
          <Nav/>
          <Switch>
            <Route path = "/" exact component= {Home}/>
            <Route path = "/properties" exact component= {Properties}/>
            <Route path = "/favourites" component= {Favourites}/>
            <Route path = "/Auth" component= {Auth}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
