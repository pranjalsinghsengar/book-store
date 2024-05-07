import React, { useContext } from "react";
import Header from "../containers/header";
import Search from "../containers/search";
import { BookContext } from "../context";
import CreateBooks from "../containers/createBooks";

const Layout = ({ children }) => {
  const { openCreate } = useContext(BookContext);

  return (
    <div className='h-screen w-screen'>
      <Header />
      <Search />
      {openCreate && (
        <div className='absolute bg-orange-500/10 border-l shadow-lg h-full py-8 backdrop-blur-md top-0  w-1/2 right-0 px-10 z-50'>
          <CreateBooks />
        </div>
      )}
      <div className={`relative h-[calc(100%-5rem)]`}>{children}</div>
    </div>
  );
};

export default Layout;
