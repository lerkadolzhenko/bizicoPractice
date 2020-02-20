import React from "react";
import { Link } from "react-router-dom";

export const BookItem = ({ book, isDetailPage }) => {
  // console.log(book);
  // {book.ID}
  // console.log(isDetailPage);
  const date = new Date(book.PublishDate).toLocaleDateString();
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{book.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text">{book.Description}</p>
        {isDetailPage && (
          <Link
            className="btn btn-primary"
            role="button"
            to={`/book/${book.ID}`}
          >
            See more...
          </Link>
        )}
      </div>
    </div>
  );
};
