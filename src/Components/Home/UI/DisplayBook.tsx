import React from "react";
import { books } from "../../../bookdata/book";
import HomeCard from "../../ui/card/HomeCard";

function DisplayBook(): React.ReactElement {
  const booksDisplay = books.slice(0, 7);
  return (
    <div className="flex items-center gap-16">
      {booksDisplay.map((book) => (
        <HomeCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export default DisplayBook;
