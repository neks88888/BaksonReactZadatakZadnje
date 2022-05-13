import React, { useContext } from "react";
import cardImg from "../image/image.jfif";
import { useParams } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";

function IndividualTicket() {
  let { id } = useParams();
  const { allTickets } = useContext(TicketsContext);
  const indTick = allTickets.find(
    (ticket) => parseInt(ticket.id) == parseInt(id)
  );

  return (
    <React.Fragment>
      <div className="card mb-3 karta-velika">
        <img className="card-img-top" src={cardImg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Author: {id ? indTick.author : "null"}</h5>
          <p className="card-text">Id: {indTick.id}</p>
          <p className="card-text"> Height: {indTick.height}</p>
          <p className="card-text">Width: {indTick.width}</p>

          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IndividualTicket;
