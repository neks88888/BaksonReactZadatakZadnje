import React, { useContext, useState } from "react";
import { TicketsContext } from "../context/TicketsContext";
import SingleTicketGridView from "../components/SingleTicketGridView";
import ReactPaginate from "react-paginate";

const Grid = () => {
  const {
    allTickets,
    searchTerm,
    searchAlgorithm,
    pageNumber,
    setPageNumber,
    ticketsPerPage,
    pagesVisited,
    pageCount,
    changePage,
  } = useContext(TicketsContext);

  const at = searchAlgorithm(searchTerm, SingleTicketGridView, false).slice(
    pagesVisited,
    pagesVisited + 10
  );

  return (
    <React.Fragment>
      <div className="height">
        <div className="flex">{at}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </React.Fragment>
  );
};

export default Grid;
