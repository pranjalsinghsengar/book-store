import { useContext } from "react";
import { BookContext } from "../context";
import Book from "../containers/book";
import CreateBooks from "../containers/createBooks";
import { useNavigate } from "react-router-dom";
import BookDetail from "./bookDetail";

export const DeleteHandler = (item, books, setBooks) => {
  const filtered = books.filter((x) => x.id !== item.id);

  setBooks(filtered);
  // console.log("item", item);
  // console.log("filter", filter);
};

const Home = () => {
  const { books, setBooks, openCreate, search, setSearch, setOpenCreate } =
    useContext(BookContext);
  const navigate = useNavigate();
  console.log(books);
  const homeHandler = () => {
    setOpenCreate(false);
  };

  return (
    <div onClick={homeHandler} className='h-full'>
      {/* <Banner /> */}
      <div className='flex flex-wrap gap-5 justify-center'>
        {books.map((item, index) => {
          return (
            index >= 0 && (
              <Book
                key={index}
                item={item}
                onClick={() =>
                  navigate("bookDetails", { state: { BookDetail: item } })
                }
                DeleteHandler={() => DeleteHandler(item, books, setBooks)}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Home;
