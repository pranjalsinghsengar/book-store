import React, { useContext, useState } from "react";
import { BookContext } from "../context";
import CloseButton from "../components/closeButton";
import { v4 as uuid } from "uuid";

export const style = {
  inputStyle:
    "p-2 border outline-none rounded capitalize font-semibold text-zinc-600",
};

const CreateBooks = () => {
  const { books, setBooks, setOpenCreate } = useContext(BookContext);
  const [input, setInput] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;

        setInput({ ...input, imgUrl: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  console.log(small_id);

  const SaveInputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: small_id });
  };

  const CreateHandler = () => {
    if (
      input?.type &&
      input?.title &&
      input?.imgUrl &&
      input?.author &&
      input?.price
    ) {
      setBooks([...books, input]);
      setInput(null);
    }
  };
  // console.log(books);

  console.log("input", input);
  return (
    <div className='flex flex-col items-center  gap-10 h-full'>
      <CloseButton
        containerCSS=' flex justify-end w-full  '
        buttonCSS='p-2 px-4 text-white bg-orange-600 border-none text-2xl pt-0'
        onClick={() => setOpenCreate(false)}
      />
      <div className='h-1/3  w-full '>
        {input?.imgUrl ? (
          <div className='h-full w-full flex justify-center items-center group relative'>
            <img src={input?.imgUrl} alt='' className='h-full shadow-xl' />
            <div className='h-full group-hover:visible invisible  w-full absolute top-0 bg-slate-50/5 backdrop-blur-[.1rem] flex justify-center items-center '>
              <p className='absolute text-xl text-orange-600 font-semibold capitalize bg-white/50'>
                Change image
              </p>
              <input
                name='imgUrl'
                type='file'
                placeholder=''
                onChange={handleFileInputChange}
                className={`${style.inputStyle} h-full w-full z-10  cursor-pointer opacity-0  `}
              />
            </div>
          </div>
        ) : (
          <div className='font-bold text-slate-400 h-full w-full relative flex justify-center items-center'>
            <p className='absolute'> Upload Book Image</p>
            <input
              name='imgUrl'
              type='file'
              placeholder=''
              onChange={handleFileInputChange}
              className={`${style.inputStyle} h-full border w-full z-10 cursor-pointer opacity-0  `}
            />
          </div>
        )}
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-wrap gap-5'>
          <input
            name='title'
            value={input?.title && input?.title}
            placeholder='book title'
            onChange={SaveInputHandler}
            className={`${style.inputStyle}  `}
          />
          <select
            className={`${style.inputStyle}    `}
            onChange={SaveInputHandler}
            name='type'
            value={input?.type}
          >
            <option>Select your type</option>
            <option>type 1</option>
            <option>type 2</option>
            <option>type 3</option>
          </select>

          <input
            name='author'
            value={input?.author}
            placeholder='author'
            onChange={SaveInputHandler}
            className={`${style.inputStyle}    `}
          />
          <input
            name='price'
            value={input?.price}
            type='number'
            placeholder='price'
            onChange={SaveInputHandler}
            className={`${style.inputStyle}    `}
          />
          <input
            name='originalPrice'
            value={input?.originalPrice}
            type='number'
            placeholder='original price'
            onChange={SaveInputHandler}
            className={`${style.inputStyle}    `}
          />
          {/* <input
          name='imgUrl'
          type='file'
          placeholder=''
          onChange={handleFileInputChange}
          className={`${style.inputStyle}    `}
        /> */}
        </div>
        <textarea
          rows={5}
          value={input?.description}
          name='description'
          placeholder='Summery'
          onChange={SaveInputHandler}
          className={`${style.inputStyle} w-full `}
        />
      </div>
      <button
        onClick={CreateHandler}
        className='px-7 py-2 border bg-orange-500 text-white font-bold capitalize text-xl'
      >
        add Book
      </button>
    </div>
  );
};

export default CreateBooks;
