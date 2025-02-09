import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../bookdata/book";
import { GoBack } from "../../Components/SingleBook/GoBack";
import { ImageFeature } from "../../Components/SingleBook/ImageFeature";
import BookDescription from "../../Components/SingleBook/BookDescription";
import AboutAuthor from "../../Components/SingleBook/AboutAuthor";
import { Overview } from "../../Components/SingleBook/Overview";
import Brief from "../../Components/SingleBook/Brief";
import { BookContext } from "../../Context/Context";
import { DetailsModal } from "../../Components/Modal/DetailsModal";

function SingleBook(): React.ReactElement {
  const { showModal } = useContext(BookContext);
  const { bookid } = useParams();
  const newId = Number(bookid);

  const singleBook = books.find((book) => book.id === newId);

  if (!singleBook) {
    return <div>Book not found</div>;
  }

  const {
    img,
    title,
    author,
    year,
    edition,
    rating,
    availability,
    status,
    id,
    location,
  } = singleBook;

  return (
    <div className="h-full px-2 lg:px-12 pt-5">
      <div className="container">
        <GoBack />

        {/* Book Details */}
        <div className="flex items-start mt-5 mb-10">
          {/* Left Section */}
          <ImageFeature img={img} title={title} />

          {/* Middle Section */}
          <BookDescription
            title={title}
            author={author}
            year={year}
            edition={edition}
            rating={rating}
            availability={availability}
            id={id}
            status={status}
            location={location}
          />

          {/* Right Section */}
          <AboutAuthor author={author} singleBook={singleBook} />
        </div>

        <Overview />

        <Brief />
      </div>

      {showModal && <DetailsModal />}
    </div>
  );
}

export default SingleBook;
