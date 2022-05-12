import React from "react";
import logo from "../image/image.jfif";
import { Link } from "react-router-dom";

function SingleTicketGridView(props) {
  let { id, author, width, height } = props.data;
  return (
    <div className="card" style={{ width: "22%", margin: "0.2rem" }}>
      <img className="card-img-top" src={logo} alt="Card image cap" />
      <h5 className="card-title">{author}</h5>
      <div className="card-body">
        <p className="card-text">{width}</p>
        <p className="card-text">{height}</p>
      </div>
    </div>
  );
}

export default SingleTicketGridView;
