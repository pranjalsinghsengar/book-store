import React, { createContext, useState } from "react";

export const BookContext = createContext();

const RouterContext = ({ children }) => {
  const [openCreate, setOpenCreate] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const [books, setBooks] = useState([
    {
      id: "sdfsdfsad",
      type: "candy",
      title: "Think Like a Monk: Train Your Mind for Peace and...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "shivam sengar",
      price: "599",
      originalPrice: "899",
      imgUrl: "2.jpg",
    },
    {
      id: "312312324",
      type: "candy",
      title: "Think Like a Monk: Train Your Mind for Peace and...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "shivam sengar",
      price: "599",
      originalPrice: "899",
      imgUrl: "2.jpg",
    },
  ]);

  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.warn("BOOKS DATA", books);
  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        openCreate,
        setOpenCreate,
        search,
        setSearch,
        searchQuery,
        setSearchQuery,isEdit, setIsEdit
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default RouterContext;
