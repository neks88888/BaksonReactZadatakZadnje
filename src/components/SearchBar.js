import React, { useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(TicketsContext);
  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Search the tickets you want"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your searching tickets info with anyone else.
      </small>
    </div>
  );
}

export default SearchBar;
