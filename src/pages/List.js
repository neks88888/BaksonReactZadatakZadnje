import React, { useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";
import SingleTicket from "../components/SingleTicket";
import ReactPaginate from "react-paginate";

const List = () => {
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
  const lw = searchAlgorithm(searchTerm, SingleTicket, true).slice(
    pagesVisited,
    pagesVisited + ticketsPerPage
  );
  return (
    <React.Fragment>
      <div className="height">
        <div className="flex2">{lw}</div>
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

export default List;
