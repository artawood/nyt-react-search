import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Search from "./components/Main/Search";
import SearchResults from "./components/Main/SearchResults";
import SavedArticles from "./components/Main/SavedArticles";
import API from "./utils/API";
import './App.css';

class App extends Component {
  state = {
    articles: [],
    articlesSearch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchArticle = event => {
    event.preventDefault();
    API.getArticles(this.state.articlesSearch)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
      <div>
        <div className="container">
          <Jumbotron />
          <Navbar />
          <Route exact path="/" component={Search}
            name="articlesSearch"
            value={this.state.articlesSearch}
            onChange={this.handleInputChange}
            placeholder="Search for articles"
            onClick={this.searchArticle}
          />
          <Route exact path="/" component={SearchResults} />
          <Route exact path="/saved" component={SavedArticles} />
        </div>
      </div>
      </Router>
    )
  }
} 

export default App;
