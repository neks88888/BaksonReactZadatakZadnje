import React from "react";
import logo from "../image/image.jfif";
import { Link } from "react-router-dom";

function SingleTicketGridView(props) {
  let { author, width, height } = props.data;
  return (
    <div className="card">
      <img className="card-img-top" src={logo} alt="Card image cap" />
      <h5 className="card-title">{author}</h5>
      <div className="card-body height-card">
        <p className="card-text">
          <i className="fa-solid fa-calendar-week grid-icon"></i> {width}
        </p>
        <p className="card-text">
          <i className="fa-solid fa-headphones-simple grid-icon"></i> {height}
        </p>
      </div>
    </div>
  );
}

export default SingleTicketGridView;
