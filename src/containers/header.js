import React, { useContext, useState } from "react";
import { BookContext } from "../context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const {
    books,
    openCreate,
    setOpenCreate,
    search,
    setSearch,
    searchQuery,
    setSearchQuery,
  } = useContext(BookContext);

  const [option, setOption] = useState("title");
  console.log("option", option);
  const SearchHandler = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = books.filter((book) =>
      book[option].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(e.target.value ? filtered : []);
  };

  return (
    <div className='py-6 shadow-lg flex justify-between px-14 items-center h-20'>
      <p
        className='font-black tracking-wider text-xl cursor-pointer'
        onClick={() => navigate("/")}
      >
        BOOK STORE
      </p>
      <div className='flex items-center gap-4 border px-3'>
        <input
          value={searchQuery}
          placeholder={`search by ${option}`}
          className='  py-2 outline-none'
          onChange={SearchHandler}
        />
        <select
          className='capitalize px-5 py-2'
          onChange={(e) => setOption(e.target.value)}
        >
          <option>title</option>
          <option>author</option>
        </select>
      </div>
      <div className='flex gap-4'>
        <button
          className='border px-4 py-2 bg-orange-500 text-white'
          onClick={() => setOpenCreate(!openCreate)}
        >
          {openCreate ? "Close" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default Header;
