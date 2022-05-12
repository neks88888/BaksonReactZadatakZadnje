import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TicketsContext } from "../context/TicketsContext";

function IndividualTicket() {
  let { id } = useParams();
  const { allTickets } = useContext(TicketsContext);
  const indTick = allTickets.find((ticket) => +ticket.id === +id);

  return (
    <div>
      <h1>
        Nesto {id}, {indTick.author}
      </h1>
    </div>
  );
}

export default IndividualTicket;
