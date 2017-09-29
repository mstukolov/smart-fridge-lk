import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import indexPageComponent from "./components/indexPageComponent";
import TheParent from "./tests/theParent";
import TheThird from "./tests/theThird";
import LeafletComponent from "./tests/leaflet-maps";
import WebixComponent from "./tests/webix-sample";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={indexPageComponent}/>
          <Route exact path="/parent" component={TheParent}/>
          <Route exact path="/third" component={TheThird}/>
          <Route exact path="/leaflet-maps" component={LeafletComponent}/>
          <Route exact path="/webix-sample" component={WebixComponent}/>
      </div>
    );
  }
}

export default App;
