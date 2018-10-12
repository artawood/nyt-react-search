import React, { Component } from "react";
//Front End Components
import "./Search.css";
import Input from "./Input";
import Count from "./Count";
import StartYear from "./StartYear";
import EndYear from "./EndYear";
import SearchButton from "./SearchButton";
import ClearButton from "./ClearButton";

//API
import API from "../../../utils/API"

class Search extends Component {

  state = {
      articles: [],
      search: ""
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.search)
      .then(res => this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
      console.log(this.state.search);
  };
  
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <strong><i className="fa fa-list-alt"></i> Search Parameters</strong>
            </div>
            <div className="card-body">
              <form>
                <Input
                    name="search"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    placeholder="Enter keywords to search articles"
                 />
                <Count />
                <StartYear />
                <EndYear />
                <SearchButton
                    onClick={this.handleFormSubmit}
                />
                <ClearButton />
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header"><strong>Search Results</strong></div>
                <div className="card-body" id="search-results">
                {!this.state.articles.length ? (
                <h2 className="text-center"> No Articles to Display</h2> ) : (
                    <div>
                        {this.state.articles.map(article => {
                            return (
                                <h1>{article.response.docs.headline.main}</h1>
                            )
                        })}
                    </div>
                    )
                }
                </div>
            </div>
        </div>
      </div>
    )
  }
}

    


export default Search;