import React from "react";
import PaginationItem from "./components/PaginationItem";
import "./pagination.scss";

const OFFSET = 3;

let slicedArray = [];
export const Pagination = ({
  arrayOfItems,
  itemsPerPage,
  onPageChange,
  currentPage
}) => {
  const arrayOfPages = [
    ...Array(Math.ceil(arrayOfItems.length / itemsPerPage) + 1).keys()
  ].slice(1); //1..n pages

  if (arrayOfPages.length - currentPage > OFFSET) {
    slicedArray = arrayOfPages.slice(currentPage - 1, currentPage + OFFSET);
  } 
  else {
    slicedArray = arrayOfPages.slice(currentPage - OFFSET-1, currentPage);
  }
  if (!arrayOfPages || arrayOfPages.length <= 1) {
    // don't display pager if there is only 1 page
    return null;
  }

  // Logic for displaying page numbers
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center py-3">
        <li
          className={`page-item ${
            currentPage === 1 ? "disabledBtn" : "btnHover"
          }`}
          onClick={() => onPageChange(1)}
        >
          <span className="page-link">&lt;&lt;</span>
        </li>
        <li
          className={`page-item ${
            currentPage === 1 ? "disabledBtn" : "btnHover"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span className="page-link">Previous</span>
        </li>
        {slicedArray.map((number) => (
          <PaginationItem
            key={number}
            onPageChange={onPageChange}
            number={number}
            currentPage={currentPage}
          />
        ))}
        <li
          className={`page-item ${
            currentPage === arrayOfPages.length ? "disabledBtn" : "btnHover"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span className="page-link">Next</span>
        </li>
        <li
          className={`page-item ${
            currentPage === arrayOfPages.length ? "disabledBtn" : "btnHover"
          }`}
          onClick={() => onPageChange(arrayOfPages.length)}
        >
          <span className="page-link">&gt;&gt;</span>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
