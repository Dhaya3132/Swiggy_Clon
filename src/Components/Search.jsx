import React, { useState } from 'react'

export const Search = ({productSearch}) => {
  const [inputs, setinput] = useState('');
  const handleInput = (e) => {
    setinput(e.target.value)
  }
  const handleSearch = () => {
    console.log(inputs)
    productSearch(inputs)
  }
  return (
    <div className='flex gap-4 mt-5 justify-center items-center'>
        <input type="text" placeholder='Hotels near by you...'  className='md:p-4 p-3 md:w-2/4 w-full  rounded-full border-solid border-2 border-slate-300 outline-none shadow-md' onChange={handleInput}/>
        <button className='md:px-7 md:py-4 md:text-lg px-4 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-2xl cursor-pointer' onClick={handleSearch}>Search</button>
    </div>
  )
}
