import React from "react";
import { books } from "../../../bookdata/book";
import { Link } from "react-router-dom";

function NewArrivalDisplay(): React.ReactElement {
  return (
    <div className="bg-white h-full rounded-r-sidebar flex gap-12 px-12 overflow-x-auto hide-scrollbar">
      {books
        .filter((book) => book.newArrival)
        .map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="flex justify-center items-center flex-shrink-0"
          >
            <div className="shadow-low py-4 px-6 rounded-sidebar">
              <img
                src={book.img}
                alt={book.title}
                className="object-contain "
              />
            </div>
          </Link>
        ))}
    </div>
  );
}

export default NewArrivalDisplay;
