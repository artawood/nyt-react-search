import React from "react";
import "./Search.css";

const Search = () => (
    <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <strong><i className="fa fa-list-alt"></i> Search Parameters</strong>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="search">Search Term:</label>
                            <input type="text" className="form-control" id="search-term"></input>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Number of Records to Retrieve:</label>
                            <select id="article-count" class="custom-select" aria-labelledby="dropdownMenuButton">
                                <option selected value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="start-year">Start Year (Optional):</label>
                            <input type="text" class="form-control" id="start-year"></input>
                        </div>
                        <div class="form-group">
                            <label for="end-year">End Year (Optional):</label>
                            <input type="text" class="form-control" id="end-year"></input>
                        </div>
                        <button type="submit" class="btn btn-primary" id="run-search"><i class="fa fa-search"></i> Search</button>
                        <button class="btn btn-secondary" id="clear-all"><i class="fa fa-trash"></i> Clear Results</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Search;