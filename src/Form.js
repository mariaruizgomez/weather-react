import React from "react";

export default function Form(props) {
return (
  <div className="SearchForm">
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
        <div className="current-city">
          <i className="fa-solid fa-location-dot"></i> Las Vegas
        </div>
        <div className="description">Cloudy</div>
      </div>
      <div className="col-12 col-md-6">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoFocus="on"
            
          />
          <div>
            <button className="search-button" title="Submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

}