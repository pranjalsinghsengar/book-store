import React, { useContext } from "react";
import { BookContext } from "../context";
import Book from "./book";
import CloseButton from "../components/closeButton";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { search, setSearch, setSearchQuery } = useContext(BookContext);
  const navigate = useNavigate();

  return (
    search.length > 0 && (
      <div className='flex px-10  py-10 shadow-xl bg-white absolute z-10 max-h-[70%] overflow-y-scroll'>
        <div className='flex flex-wrap justify-start gap-5'>
          {search.map((item, index) => {
            return (
              <div key={index}>
                <Book
                  key={index}
                  item={item}
                  onClick={() => {
                    navigate("bookDetails", { state: { BookDetail: item } });
                    setSearch([]);
                    setSearchQuery("");
                  }}
                />
              </div>
            );
          })}
        </div>
        <CloseButton
          containerCSS='text-3xl hover:bg-orange-100 border border-orange-600 text-orange-600 font-bold flex item-center px-5 '
          buttonCSS=' border-none'
        />
      </div>
    )
  );
};

export default Search;
