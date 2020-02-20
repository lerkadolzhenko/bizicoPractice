import React from "react";

const PaginationItem = ({ number, onPageChange, currentPage }) => {
  return (
    <li
      onClick={() => onPageChange(number)}
      key={number}
      className={`page-item ${currentPage === number ? "active" : ""}`}
    >
      <span className="page-link">{number}</span>
    </li>
  );
};

export default PaginationItem;
