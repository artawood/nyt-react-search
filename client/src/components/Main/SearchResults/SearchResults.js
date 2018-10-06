import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
    <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header"><strong>Search Results</strong></div>
                <div className="card-body" id="search-results">
                </div>
            </div>
        </div>
    </div>
)

export default SearchResults;