import React from "react";
import { books } from "../../../bookdata/book";
import { Link } from "react-router-dom";

function NewArrivalDisplay(): React.ReactElement {
  const displayBooks = books.slice(0, 7);
  return (
    <div className="bg-white h-full rounded-r-sidebar flex gap-12 px-12 overflow-x-auto min-w-0 flex-grow hide-scrollbar">
      {displayBooks
        .filter((book) => book.newArrival)
        .map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="flex justify-center items-center flex-shrink-0"
          >
            <div className="shadow-low py-3 px-4 rounded-10">
              <img
                src={book.img}
                alt={book.title}
                className="object-contain W-28"
              />
            </div>
          </Link>
        ))}
    </div>
  );
}

export default NewArrivalDisplay;
