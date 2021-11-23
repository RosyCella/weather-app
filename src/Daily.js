import React from "react";
import "./Daily.css";

export default function Daily() {
  return (
    <div className="container Daily">
      <div className="row">
        <div className="col-sm-3">
          <div className="bignumber">7°</div>
        </div>
        <div className="col-sm-4">
          <i className="fas fa-cloud-sun-rain iconbig"></i>
        </div>

        <div className="col-sm-5 info">
          <h5> Information for today</h5>
          <span className="info"> Humidity: 13% </span> <br />
          <span className="info"> Feels like: 4.3° </span>
        </div>
      </div>
    </div>
  );
}
