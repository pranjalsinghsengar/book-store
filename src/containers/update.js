import React, { useCallback, useContext, useEffect, useState } from "react";
import CloseButton from "../components/closeButton";
import { style } from "./createBooks";
import { BookContext } from "../context";
import { DeleteHandler } from "../page/home";
import { useNavigate } from "react-router-dom";

const Update = ({ item }) => {
  const { books, setBooks, isEdit, setIsEdit } = useContext(BookContext);
  const [isConfirm, setIsConfirm] = useState(false);
  const [details, setDetails] = useState(item);
  const navigate = useNavigate();

  useEffect(() => {
    if (item) {
      setDetails(item);
    }
  }, [item]);

  const handleFileInputChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setDetails({ ...details, imgUrl: base64String });
        };
        reader.readAsDataURL(file);
      }
    },
    [details]
  );

  const SaveInputHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      if (details[name] !== value) {
        setDetails({ ...details, [name]: value });
      }
    },
    [details]
  );

  const CreateHandler = useCallback(() => {
    // Check if there are actual changes
    if (
      !books.some(
        (book) =>
          book.id === details.id &&
          JSON.stringify(book) === JSON.stringify(details)
      )
    ) {
      const filter = books.filter((item) => item.id !== details.id);
      setBooks([...filter, details]);
      setIsConfirm(false);
      setIsEdit(false);
    }
  }, [books, details, setBooks]);

  return (
    <div className='absolute bg-red-500/10 border-r shadow-lg  backdrop-blur-md py-10 px-5 h-3/4'>
      {isConfirm && (
        <Confirmation
          setIsConfirm={setIsConfirm}
          CreateHandler={CreateHandler}
        />
      )}

      <CloseButton
        containerCSS=' flex justify-end w-full  '
        buttonCSS='p-2 px-4 text-white bg-orange-600 border-none text-2xl pt-0'
        onClick={() => {
          setIsConfirm(false);
          setIsEdit(false);
        }}
      />
      <div className='flex items-center gap-10 w-full h-full relative'>
        <div className='h-4/5 w-1/2'>
          {details?.imgUrl ? (
            <div className='h-full w-full flex justify-center items-center group relative'>
              <img src={details?.imgUrl} alt='' className='h-full shadow-xl' />
              <div className='h-full group-hover:visible invisible w-full absolute top-0 bg-slate-50/5 backdrop-blur-[.1rem] flex justify-center items-center'>
                <p className='absolute text-xl text-orange-600 font-semibold capitalize bg-white/50'>
                  Change image
                </p>
                <input
                  name='imgUrl'
                  type='file'
                  onChange={handleFileInputChange}
                  className={`${style.inputStyle} h-full w-full z-10 cursor-pointer opacity-0`}
                />
              </div>
            </div>
          ) : (
            <div className='font-bold text-slate-400 h-full w-full relative flex justify-center items-center'>
              <p className='absolute'>Upload Book Image</p>
              <input
                name='imgUrl'
                type='file'
                onChange={handleFileInputChange}
                className={`${style.inputStyle} h-full border w-full z-10 cursor-pointer opacity-0`}
              />
            </div>
          )}
        </div>
        <div className='flex flex-col gap-5 px-40 '>
          <div className='flex flex-col gap-5 '>
            <div className='flex flex-wrap gap-5'>
              <input
                name='title'
                value={details?.title || ""}
                placeholder='book title'
                onChange={SaveInputHandler}
                className={style.inputStyle}
              />

              <select
                className={style.inputStyle}
                onChange={SaveInputHandler}
                name='type'
                value={details ? details.type : ""}
              >
                <option>Select your type</option>
                <option>type 1</option>
                <option>type 2</option>
                <option>type 3</option>
              </select>

              <input
                name='author'
                value={details?.author || ""}
                placeholder='author'
                onChange={SaveInputHandler}
                className={style.inputStyle}
              />
              <input
                name='price'
                value={details?.price || ""}
                type='number'
                placeholder='price'
                onChange={SaveInputHandler}
                className={style.inputStyle}
              />
              <input
                name='originalPrice'
                value={details?.originalPrice || ""}
                type='number'
                placeholder='original price'
                onChange={SaveInputHandler}
                className={style.inputStyle}
              />
            </div>
            <textarea
              rows={5}
              value={details?.description || ""}
              name='description'
              placeholder='Summary'
              onChange={SaveInputHandler}
              className={`${style.inputStyle} w-full`}
            />
          </div>
          <div>
            <button
              onClick={() => setIsConfirm(true)}
              className='px-7 py-2 border bg-orange-500 text-white font-bold capitalize text-xl mt-5'
              disabled={isConfirm}
            >
              Update
            </button>
            <button
              onClick={() => {
                DeleteHandler(details, books, setBooks);
                navigate("/");
              }}
              className='px-7 py-2 border bg-orange-500 text-white font-bold capitalize text-xl mt-5'
              disabled={isConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

const Confirmation = ({ CreateHandler, setIsConfirm }) => {
  return (
    <div className='absolute w-full h-full flex justify-center items-center'>
      <div className='bg-orange-600/20 backdrop-blur-lg flex flex-col gap-6 items-center justify-center px-10 py-10  z-10 '>
        <p className='text-lg md:text-2xl font-semibold  capitalize'>
          Are you
          <span className='text-xl md:text-3xl font-bold text-orange-600'>
            {" "}
            OK{" "}
          </span>{" "}
          with that
        </p>
        <div className='flex gap-5'>
          <button
            onClick={() => setIsConfirm(false)}
            className='border border-orange-600 hover:bg-orange-600 hover:text-white px-5 py-1 text-orange-800'
          >
            No
          </button>
          <button
            onClick={CreateHandler}
            className='border border-orange-600 hover:bg-orange-600 hover:text-white px-5 py-1 text-orange-800'
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
