import bible from "../assets/bible.png";
import dontmake from "../assets/dontmake.png";
import harrypotter from "../assets/harrypotter.png";
import learnUx from "../assets/learnUX.png";
import richdad from "../assets/richdad.png";
import roadtoreact from "../assets/roadtoreact.png";
import sprint from "../assets/sprint.png";
import thedesign from "../assets/thedesign.png";
import creativity from "../assets/creativity.png";
import rocket from "../assets/rocket.png";

export interface Avail {
  "Hard Copy": boolean;
  "E-Book": boolean;
  "Audio Book": boolean;
}

export interface Books {
  id: number;
  title: string;
  author: string;
  year: number;
  rating: number;
  category: string;
  subCategory?: string;
  availability: Avail;
  status: "In-shelf" | "Borrowed";
  location: string;
  newArrival: boolean;
  img: string;
  edition?: string;
}

export const books: Books[] = [
  {
    id: 1,
    title: "Don’t Make Me Think",
    author: "Steve Krug",
    year: 2000,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${dontmake}`,
    edition: "Second Edition",
  },
  {
    id: 2,
    title: "Holy Bible",
    author: "King James",
    year: 1990,
    rating: 4.5,
    category: "Religions",
    subCategory: "Christianity",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${bible}`,
  },
  {
    id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 2002,
    rating: 4.5,
    category: "Fantasy",
    subCategory: "Magic",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${harrypotter}`,
  },
  {
    id: 4,
    title: "Learn UX: Designing Great Products with Agile Teams",
    author: "Jeff Gothelf",
    year: 2014,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${learnUx}`,
  },
  {
    id: 5,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: 1988,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      "Hard Copy": false,
      "E-Book": true,
      "Audio Book": false,
    },
    status: "Borrowed",
    location: "Sriram",
    newArrival: true,
    img: `${thedesign}`,
  },
  {
    id: 6,
    title:
      "Sprint: How to solve big problems and test new ideas in just five days",
    author: "Jake Knapp",
    year: 2000,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${sprint}`,
  },
  {
    id: 7,
    title: "The Road to React",
    author: "Steve Krug",
    year: 2000,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "Frontend Design",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${roadtoreact}`,
  },
  {
    id: 8,
    title: "Rich Dad Poor Dad",
    author: "Robert T.Kiyosaki",
    year: 1997,
    rating: 5,
    category: "Financial MGMT",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${richdad}`,
  },
  {
    id: 9,
    title: "SpiderMan",
    author: "Stan Lee",
    year: 1980,
    rating: 4.5,
    category: "Fantasy",
    subCategory: "Adventure",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${dontmake}`,
  },
  {
    id: 10,
    title: "Source Code: My Beginnings",
    author: "Bill Gates",
    year: 2020,
    rating: 4.5,
    category: "Life",
    subCategory: "Auto-Bio",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${bible}`,
  },
  {
    id: 11,
    title: "The Housemaid",
    author: "Freida McFadden",
    year: 2002,
    rating: 4.5,
    category: "Thriller",
    subCategory: "Crime",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${harrypotter}`,
  },
  {
    id: 12,
    title: "You're My Little Cuddle Bug",
    author: "Nicola Edwards",
    year: 2023,
    rating: 4.5,
    category: "Kids",
    subCategory: "Adventure",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${learnUx}`,
  },
  {
    id: 13,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 1988,
    rating: 4.5,
    category: "Thriller",
    subCategory: "Dystopian",
    availability: {
      "Hard Copy": false,
      "E-Book": true,
      "Audio Book": false,
    },
    status: "Borrowed",
    location: "Sriram",
    newArrival: true,
    img: `${thedesign}`,
  },
  {
    id: 14,
    title: "Harry Potter and Goblet of Fire",
    author: "J.K. Rowling",
    year: 2000,
    rating: 4.5,
    category: "Fantasy",
    subCategory: "Magic",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${harrypotter}`,
  },
  {
    id: 15,
    title: "To Kill a MockingBird",
    author: "Harper Lee",
    year: 1960,
    rating: 4.5,
    category: "Novels",
    subCategory: "Literature",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${roadtoreact}`,
  },
  {
    id: 16,
    title: "The Book Thief",
    author: "Markus Zusak",
    year: 2005,
    rating: 5,
    category: "Novel",
    subCategory: "Historical",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${richdad}`,
  },
  {
    id: 17,
    title: "Rocket Surgery Made Easy",
    author: "Steve Krug",
    year: 2005,
    rating: 5,
    category: "Novel",
    subCategory: "Historical",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${rocket}`,
  },
  {
    id: 18,
    title: "The Practice of Creativity",
    author: "Steve Krug",
    year: 2005,
    rating: 5,
    category: "Novel",
    subCategory: "Historical",
    availability: {
      "Hard Copy": true,
      "E-Book": true,
      "Audio Book": true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${creativity}`,
  },
];
