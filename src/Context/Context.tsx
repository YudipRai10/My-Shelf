import React, { createContext, useState } from "react";

interface BookContextProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isBorrow: boolean;
  setIsBorrow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookContext = createContext<BookContextProps>({
  searchValue: "",
  setSearchValue: () => {},
  showModal: false,
  setShowModal: () => {},
  isBorrow: false,
  setIsBorrow: () => {},
});

interface BookProviderProps {
  children: React.ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isBorrow, setIsBorrow] = useState<boolean>(false);

  const values = {
    searchValue,
    setSearchValue,
    showModal,
    setShowModal,
    isBorrow,
    setIsBorrow,
  };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
