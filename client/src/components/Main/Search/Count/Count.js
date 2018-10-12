import React from "react";

const Count = () => (
  <div className="form-group">
      <label htmlFor="pwd">Number of Records to Retrieve:</label>
      <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton">
          <option defaultValue value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
      </select>
  </div>
)

export default Count;