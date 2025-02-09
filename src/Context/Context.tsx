import React, { createContext, useEffect, useState } from "react";
import { Books } from "../bookdata/book";
import { ValuesProps } from "../CustomHook/useBorrowForm";

export interface BookItemProps extends Books, ValuesProps {}

interface BookContextProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isBorrow: boolean;
  setIsBorrow: React.Dispatch<React.SetStateAction<boolean>>;
  booksSaved: BookItemProps[];
  setBooksSaved: React.Dispatch<React.SetStateAction<BookItemProps[]>>;
  handleReturn: (id: number) => void;
}

export const BookContext = createContext<BookContextProps>({
  searchValue: "",
  setSearchValue: () => {},
  showModal: false,
  setShowModal: () => {},
  isBorrow: false,
  setIsBorrow: () => {},
  booksSaved: [],
  setBooksSaved: () => {},
  handleReturn: () => {},
});

interface BookProviderProps {
  children: React.ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const initialBook = JSON.parse(localStorage.getItem("booksSaved") || "[]");
  const [searchValue, setSearchValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isBorrow, setIsBorrow] = useState<boolean>(false);
  const [booksSaved, setBooksSaved] = useState<BookItemProps[]>(initialBook);

  useEffect(() => {
    localStorage.setItem("booksSaved", JSON.stringify(booksSaved));
  }, [booksSaved]);

  const handleReturn = (id: number) => {
    setBooksSaved((prev) => prev.filter((book) => book.id !== id));
  };

  const values = {
    searchValue,
    setSearchValue,
    showModal,
    setShowModal,
    isBorrow,
    setIsBorrow,
    booksSaved,
    setBooksSaved,
    handleReturn,
  };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
