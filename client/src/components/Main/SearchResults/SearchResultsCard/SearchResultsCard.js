import React from "react";
import "./SearchResultsCard.css";

const SearchResultsCard = props => (
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

export default SearchResultsCard;