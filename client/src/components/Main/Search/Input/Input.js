import React from "react";
import "./Input.css";

const Input = props => (
  <div className="form-group">
      <label htmlFor="search">Search Term:</label>
      <input type="text" className="form-control" id="search-term" {...props} />
  </div>
)

export default Input;