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
        <input type="text" placeholder='Hotels near by you...'  className='p-4 w-2/4  rounded-full border-solid border-2 border-slate-300 outline-none shadow-md' onChange={handleInput}/>
        <button className='px-7 py-4 text-lg bg-orange-600 text-white font-semibold rounded-full shadow-2xl cursor-pointer' onClick={handleSearch}>Search</button>
    </div>
  )
}
