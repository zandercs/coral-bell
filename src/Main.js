import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import CustomNavBar from "./components/CustomNavBar";
import "./index.css";

class Main extends Component {
  render(){
    return(
      <Router>
        <div>
          <CustomNavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <footer>&copy; 2016</footer>
        </div>
      </Router>
    )
  }
}

export default Main;
