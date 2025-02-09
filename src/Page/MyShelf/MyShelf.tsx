import React, { useContext, useState } from "react";
import { BookContext } from "../../Context/Context";

function MyShelf(): React.ReactElement {
  const { booksSaved, handleReturn } = useContext(BookContext);
  const options = [
    "All Books",
    "Borrowed Books",
    "E-books",
    "Audio Books",
    "Articles & Journals",
  ];

  const [selectOption, setSelectOption] = useState<string>(options[0]);
  return (
    <div className=" px-2 lg:px-12 h-full">
      <p className="text-primary font-bold text-2xl">
        Your <span className="text-highlight">Shelf</span>
      </p>

      <ul className="flex items-center gap-20 my-9">
        {options.map((option) => (
          <li
            className={`${
              selectOption === option ? "text-primary" : "text-shelfTab"
            } font-medium text-xl cursor-pointer`}
            key={option}
            onClick={() => setSelectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-4 gap-x-17 gap-y-7 h-[650px] overflow-y-auto hide-scrollbar">
        {booksSaved.map((book) => (
          <div key={book.id} className="bg-white rounded-10 flex h-72">
            <div className="w-1/2 flex justify-center items-center flex-col gap-3">
              <img src={book.img} alt={book.title} />
              <div className="w-32">
                <p className="text-sm leading-4 overflow-hidden whitespace-nowrap text-ellipsis">
                  {book.title}
                </p>
                <p className="text-xxs leading-3 my-1.5">
                  {book.author}, {book.year}
                </p>
                <p className="text-xxs leading-3">
                  {book.rating} <span className="text-rating">/5</span>
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center flex-col">
              <div>
                <p className="text-sm text-primary mb-2.5">Borrowed on</p>
                <p className="text-xxs text-little">11 Mar 2023 09:00 AM</p>
              </div>
              <div className="my-2.5">
                <p className="text-sm text-primary mb-2.5">Borrowed on</p>
                <p className="text-xxs text-little">11 Mar 2023 09:00 AM</p>
              </div>
              <div className="w-32 bg-borrowed text-sm text-center text-white py-2.5 rounded mb-4">
                Borrowed
              </div>
              <button
                onClick={() => handleReturn(book.id)}
                className="border border-preview text-preview w-32 text-sm text-center py-2.5 rounded hover:bg-preview hover:text-white transition-colors duration-300 ease-in-out"
              >
                Return
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyShelf;
