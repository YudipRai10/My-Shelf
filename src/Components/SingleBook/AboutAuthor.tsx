import React from "react";
import { Link } from "react-router-dom";
import aboutAuthor from "../../assets/aboutauthor.png";
import { Books, books } from "../../bookdata/book";

const AboutAuthor: React.FC<{ author: string; singleBook: Books }> = ({
  author,
  singleBook,
}) => {
  const relatedBooks = books.filter(
    (book) => book.author === singleBook?.author && book.id !== singleBook?.id
  );

  return (
    <div className="bg-white ml-40 px-7 2xl:w-[445px] py-8 rounded-10 text-primary relative">
      <p className="text-xl font-semibold">
        <span className=" text-highlight">About</span> Author
      </p>
      <div className="flex items-center gap-16">
        <p className="text-xl">{author}</p>
        <img
          src={aboutAuthor}
          alt="about author image"
          className="object-contain"
        />
      </div>
      <p className="text-xs mb-6">
        {author} is a usability consultant who has more than 30 years of
        experience as a user advocate for companies like Apple, Netscape, AOL,
        Lexus, and others. Based in part on the success of his first book, Don't
        Make Me Think, he has become a highly sought-after speaker on usability
        design.
      </p>

      <div>
        {relatedBooks.length > 0 && (
          <>
            <p className="font-bold text-base">Other Books</p>
            <div className="flex items-center gap-5">
              {relatedBooks.map((book) => (
                <Link to={`/book/${book.id}`} key={book.id}>
                  <img
                    src={book.img}
                    alt={book.title}
                    className="object-contain w-18"
                  />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutAuthor;
