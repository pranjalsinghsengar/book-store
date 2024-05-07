import React from "react";
import CloseButton from "../components/closeButton";

const Book = ({
  item,
  title,
  price,
  author,
  type,
  img,
  key,
  onClick,
  className,
  DeleteHandler,
}) => {
  return (
    <div
      className={`w-52 border py-5 px-5 cursor-pointer group relative ${className} `}
      key={key}
    >
      <CloseButton
        containerCSS=' absolute right-0 invisible group-hover:visible'
        buttonCSS='px-2 rounded-full pb-.5'
        onClick={DeleteHandler}
      />

      <div onClick={onClick}>
        <div className='h-32 flex justify-center'>
          <img src={item?.imgUrl} alt=' ' className='h-full' />
        </div>
        <div className='mt-3'>
          <p className='text-red-400 uppercase font-semibold text-sm'>
            {item?.type}
          </p>
          <p className='font-semibold text-lg line-clamp-1'>{item?.title}</p>
          <p className='text-lg text-zinc-500'>{item?.author} </p>
          <p className='font-bold'>₹{item?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
