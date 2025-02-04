import React from "react";
import { books } from "../../../bookdata/book";
import HomeCard from "../../ui/card/HomeCard";

function DisplayBook(): React.ReactElement {
  return (
    <div className="flex items-center gap-14">
      {books.map((book) => (
        <HomeCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export default DisplayBook;
