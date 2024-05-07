import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Update from "../containers/update";
import { BookContext } from "../context";

const BookDetail = () => {
  const [details, setDetails] = useState(null);
  const { isEdit, setIsEdit } = useContext(BookContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { BookDetail } = state;
  useEffect(() => {
    if (BookDetail) {
      setDetails(BookDetail);
    }
  }, []);
  // console.log("bookDetails", details);
  return (
    <div className='h-full  relative flex justify-center items-center'>
      <div className='h-full  py-20 px-5  flex justify-between'>
        <div className='h-full w-1/2 p-10 flex justify-center items-center relative'>
          <span className='w-96 h-96 bg-slate-600/5 rounded-full absolute scale-150 -z-10'></span>
          <img
            src={BookDetail?.imgUrl}
            alt=' '
            className='h-full max-w-full shadow-2xl '
          />
        </div>
        <div className='mt-3 w-1/2 flex flex-col gap-4 p-10 pl-20'>
          <p className='font-semibold text-5xl '>{BookDetail?.title}</p>
          <span className='text-xl'>
            <i className=' text-zinc-500 font-semibold'>
              ~ by {BookDetail?.author}{" "}
            </i>
            <p className='text-red-400 uppercase font-black tracking-widest '>
              {BookDetail?.type}
            </p>
          </span>
          <p className='px-14 tracking-wider leading-8 my-5'>
            {BookDetail?.description}
          </p>
          <p className='font-bold text-6xl mx-5'>
            ₹{BookDetail?.price}{" "}
            {BookDetail?.originalPrice && (
              <span className='line-through text-slate-400'>
                ₹{BookDetail?.originalPrice}
              </span>
            )}{" "}
          </p>
        </div>
        <button
          className='bg-orange-600  bottom-20 right-20 px-10 py-2 fixed'
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "no-edit" : "edit"}
        </button>
      </div>
      {isEdit && <Update item={details} />}
    </div>
  );
};

export default BookDetail;
