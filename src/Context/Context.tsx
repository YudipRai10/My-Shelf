import React, { createContext, useState } from "react";

interface BookContextProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const BookContext = createContext<BookContextProps>({
  searchValue: "",
  setSearchValue: () => {},
});

interface BookProviderProps {
  children: React.ReactNode;
}

export const BookProvider = ({ children }: BookProviderProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const values = { searchValue, setSearchValue };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
