import React, { useContext, useEffect, useState } from "react";
import { Books, books } from "../../bookdata/book";
import { BookContext } from "../../Context/Context";
import Title from "./UI/Title";
import Ratings from "./UI/Ratings";
import Category from "./UI/Category";
import Availability from "./UI/Availability";
import Status from "./UI/Status";
import { Preview } from "./UI/Preview";

function SearchBody(): React.ReactElement {
  const initialBooks = books.slice(0, 7);
  const [displayBooks, setDisplayBooks] = useState<Books[]>(initialBooks);
  const { searchValue } = useContext(BookContext);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setDisplayBooks(initialBooks);
    } else {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setDisplayBooks(filteredBooks);
    }
  }, [searchValue]);

  return (
    <div>
      {displayBooks.map((book, index) => {
        const {
          img,
          title,
          year,
          author,
          edition,
          rating,
          category,
          subCategory,
          availability,
          status,
          id,
          location,
        } = book;
        return (
          <div
            key={index}
            className="bg-white grid grid-cols-5 items-center mb-3 2xl:grid-cols-[440px_130px_260px_210px_auto] py-3 rounded-10 hover:shadow-2xl animate-fadeDown"
          >
            {/* Title */}
            <Title
              img={img}
              title={title}
              year={year}
              author={author}
              edition={edition}
            />

            {/* Ratings */}
            <Ratings rating={rating} />

            {/* Category */}
            <Category category={category} subCategory={subCategory} />

            {/* Availability */}
            <Availability availability={availability} />

            {/* Status */}
            <div className="flex items-center">
              <Status status={status} id={id} location={location} />

              <Preview status={status} id={id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBody;
