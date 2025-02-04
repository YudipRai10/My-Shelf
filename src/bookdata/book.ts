import bible from "../assets/bible.png";
import dontmake from "../assets/dontmake.png";
import harrypotter from "../assets/harrypotter.png";
import learnUx from "../assets/learnUX.png";
import richdad from "../assets/richdad.png";
import roadtoreact from "../assets/roadtoreact.png";
import sprint from "../assets/sprint.png";
import thedesign from "../assets/thedesign.png";

export interface Availability {
  hardCopy: boolean;
  eBook: boolean;
  audioBook: boolean;
}

export interface Books {
  id: number;
  title: string;
  author: string;
  year: number;
  rating: number;
  category: string;
  subCategory?: string;
  availability: Availability;
  status: "In-shelf" | "Borrowed";
  location: string;
  newArrival: boolean;
  img: string;
}

export const books: Books[] = [
  {
    id: 1,
    title: "Don’t Make Me think",
    author: "Steve Krug",
    year: 2000,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      hardCopy: true,
      eBook: true,
      audioBook: true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${dontmake}`,
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
      hardCopy: true,
      eBook: true,
      audioBook: true,
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
      hardCopy: true,
      eBook: true,
      audioBook: true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: true,
    img: `${harrypotter}`,
  },
  {
    id: 4,
    title: "Learn UX:Designing Great Products with Agile Teams",
    author: "Jeff Gothelf",
    year: 2014,
    rating: 4.5,
    category: "Computer Science",
    subCategory: "UX Design",
    availability: {
      hardCopy: true,
      eBook: true,
      audioBook: true,
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
      hardCopy: false,
      eBook: true,
      audioBook: false,
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
      hardCopy: true,
      eBook: true,
      audioBook: true,
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
      hardCopy: true,
      eBook: true,
      audioBook: true,
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
      hardCopy: true,
      eBook: true,
      audioBook: true,
    },
    status: "In-shelf",
    location: "CS A-15",
    newArrival: false,
    img: `${richdad}`,
  },
];
