import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Search from "./components/Main/Search";
import SavedArticles from "./components/Main/SavedArticles";
import './App.css';

class App extends Component {

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
      <div>
        <div className="container">
          <Jumbotron />
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={SavedArticles} />
        </div>
      </div>
      </Router>
    )
  }
} 

export default App;
