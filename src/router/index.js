import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import BookDetail from "../page/bookDetail";

const BookRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bookDetails' element={<BookDetail />} />
    </Routes>
  );
};

export default BookRouter;
