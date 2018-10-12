import React from "react";
import Input from "../Input";
import "./Search.css";

const Search = props => (
    <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <strong><i className="fa fa-list-alt"></i> Search Parameters</strong>
                </div>
                <div className="card-body">
                    <form>
                        <Input/>
                        {/* <div className="form-group">
                            <label htmlFor="pwd">Number of Records to Retrieve:</label>
                            <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton">
                                <option defaultValue value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="start-year">Start Year (Optional):</label>
                            <input type="text" className="form-control" id="start-year"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-year">End Year (Optional):</label>
                            <input type="text" className="form-control" id="end-year"/>
                        </div>
                        <button type="submit" className="btn btn-primary" id="run-search" onClick={props.onClick}><i className="fa fa-search"></i> Search</button>
                        <button className="btn btn-secondary" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Search;