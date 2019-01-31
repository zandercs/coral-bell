import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
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

          <Route path="/architecture-travel" render={(props) => <Category selection="Architecture &amp; Travel" />}/>
          <Route path="/commercial" render={(props) => <Category selection="Commercial" />}/>
          <Route path="/engagement-wedding" render={(props) => <Category selection="Engagements &amp; Weddings" />}/>
          <Route path="/family" render={(props) => <Category selection="Family" />}/>
          
          <Route path="/contact" component={Contact}/>
          <footer>&copy; 2016</footer>
        </div>
      </Router>
    )
  }
}

export default Main;
