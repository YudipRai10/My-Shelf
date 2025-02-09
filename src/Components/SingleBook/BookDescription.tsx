import React, { useContext } from "react";
import { StarRating } from "../ui/rating/StarRating";
import Availability from "../Search/UI/Availability";
import Status from "../Search/UI/Status";
import { WhiteDropDown } from "../ui/svg/Svg";
import { Avail } from "../../bookdata/book";
import { BookContext } from "../../Context/Context";

interface DescriptionProps {
  id: number;
  title: string;
  author: string;
  year: number;
  rating: number;
  availability: Avail;
  status: "In-shelf" | "Borrowed";
  location: string;
  edition?: string;
}

const BookDescription: React.FC<DescriptionProps> = ({
  title,
  author,
  year,
  edition,
  rating,
  availability,
  id,
  status,
  location,
}) => {
  const { setShowModal, setIsBorrow } = useContext(BookContext);

  const clickBorrow = () => {
    setIsBorrow(true);
    setShowModal(true);
  };

  const clickReadNow = () => {
    setIsBorrow(false);
    setShowModal(true);
  };

  return (
    <div className="ml-20 2xl:w-carousel">
      {/* Title */}
      <div className="flex flex-col gap-1.5 mb-7">
        <p className="text-4xl max-w-lg overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </p>
        <p className="text-base">
          By <span className="underline">{author}</span>, {year}
        </p>
        <p className="text-base text-edition">{edition}</p>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-4 text-feature text-sm mb-7">
        <div className="flex items-center gap-2.5">
          <StarRating rating={rating} />
          <p>{rating.toFixed(1)} Ratings</p>
        </div>
        <p>25 Currently reading</p>
        <p>119 Have read</p>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-24 mb-11">
        <div className="flex items-start justify-start gap-10 text-primary">
          <div>
            <p className="text-sm font-bold mb-2.5">Availability</p>
            <Availability availability={availability} />
          </div>
          <div>
            <p className="text-sm font-bold mb-2.5">Status</p>
            <Status status={status} id={id} location={location} />
          </div>
        </div>
        <button className="bg-list flex items-center gap-2 text-white text-base pl-4 pr-2 py-2.5 rounded-md whitespace-nowrap">
          Add to List <WhiteDropDown />
        </button>
      </div>

      {/* Borrow/Read Now buttons */}
      <div className="flex items-center gap-9">
        <button
          onClick={clickBorrow}
          className="bg-borrow text-white px-14 py-5 rounded-md font-semibold text-xl leading-3"
        >
          BORROW
        </button>
        <button
          onClick={clickReadNow}
          className="bg-read text-white px-16 py-5 rounded-md ml-1 text-xl leading-3 whitespace-nowrap"
        >
          Read Now
        </button>
      </div>
    </div>
  );
};

export default BookDescription;
