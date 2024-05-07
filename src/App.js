import logo from "./logo.svg";
import "./App.css";
import Banner from "./containers/banner";
import Book from "./containers/book";
import CreateBooks from "./containers/createBooks";
import { useContext } from "react";
import { BookContext } from "./context";
import Header from "./containers/header";
import Layout from "./layout/layout";
import Home from "./page/home";
import BookRouter from "./router";

function App() {
  // const books = [
  //   {
  //     type: "candy",
  //     title: "Think Like a Monk: Train Your Mind for Peace and...",
  //     author: "shivam sengar",
  //     price: "599",
  //     img: "2.jpg",
  //   },
  //   {
  //     type: "candy",
  //     title: "Think Like a Monk: Train Your Mind for Peace and...",
  //     author: "shivam sengar",
  //     price: "599",
  //     img: "2.jpg",
  //   },
  // ];

  return (
    <Layout>
      <BookRouter />
      {/* <Home />   */}
    </Layout>
  );
}

export default App;
