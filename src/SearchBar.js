import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar container">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h1>Melbourne</h1>
            <h2>Sunday, 27 June</h2>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-5">
            <form>
              <input
                type="text"
                placeholder="Enter new city"
                className="enterCity"
              />

              <input type="submit" value="Search" className="SearchButton" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
