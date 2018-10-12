import React from "react";

const SearchButton = props => (
  <button className="btn btn-primary" onClick={()=>props.onClick}><i className="fa fa-search"></i> Search</button>
)

export default SearchButton;