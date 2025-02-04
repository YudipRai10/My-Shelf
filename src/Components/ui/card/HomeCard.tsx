import React from "react";
import { Books } from "../../../bookdata/book";
import { Link } from "react-router-dom";

interface bookProps {
  book: Books;
}

function HomeCard({ book }: bookProps): React.ReactElement {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="bg-white w-40 rounded-sidebar flex flex-col gap-3 py-4 pr-4 pl-5">
        <img src={book.img} alt={book.title} className="object-contain" />
        <div className="flex flex-col gap-1">
          <p className="text-xs leading-4 overflow-hidden whitespace-nowrap text-ellipsis">
            {book.title}
          </p>
          <p className="text-xxs leading-3">
            {book.author}, {book.year}
          </p>
          <p className="text-xxs leading-3">
            {book.rating} <span className="text-rating">/5</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default HomeCard;
