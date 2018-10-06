import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Search from "./components/Main/Search";
import SearchResults from "./components/Main/SearchResults";
import SavedArticles from "./components/Main/SavedArticles";
import './App.css';

const App = () => (
  <Router>
  <div>
    <div className="container">
      <Jumbotron />
      <Navbar />
      <Route exact path="/" component={Search} />
      <Route exact path="/" component={SearchResults} />
      <Route exact path="/saved" component={SavedArticles} />
    </div>
  </div>
  </Router>
)

export default App;
