import React from "react";
import logo from "../image/image.jfif";
import { Link } from "react-router-dom";

function SingleTicket(props) {
  let { id, author, width, height } = props.data;
  const date = new Date(Date.now());
  const month = date.toLocaleString("default", { month: "long" });
  let day = date.getUTCDate();
  let currentYear = new Date().getFullYear();

  return (
    <div className="flexing">
      <div className="left">
        <img className="image" src={logo} alt="Hanz Zimmer Logo" />
        <div className="date">
          <div>{month.toUpperCase()}</div>

          <div>{day}</div>

          <div>{currentYear}</div>
        </div>
        <div className="auth-width-height">
          <div>{author}</div>

          <div>{width}</div>

          <div>{height}</div>
        </div>
      </div>
      <div className="link">
        <Link
          to={`/singleticket/${id}`}
          //target="_blank"
          rel="noopener noreferrer"
        >
          BUY TICKETS
        </Link>
      </div>
    </div>
  );
}

export default SingleTicket;
