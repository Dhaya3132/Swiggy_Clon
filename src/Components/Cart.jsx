import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../App';
import Header from './Header';

export const Cart = () => {
  const { cart } = useContext(cartContext)
  const [Total,setTotal] = useState(0)
  useEffect(()=> {
    setTotal(cart.reduce((acc,cum) => acc + parseInt(cum.Price),0))
  },[cart])
  return (
    <div className='mx-auto'>
      <Header />
      <h2 className='font-semibold font-Poppins text-2xl p-10'>Cart Items</h2>
      <div className='flex justify-center items-center gap-10 flex-wrap mx-auto p-6'>
        {cart.map((item) => (
          <div id="foot_item" className="hover:scale-110" >
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.img}`} alt="FoodImage" className="w-72 h-48 rounded-3xl object-cover" />
            <h2 className="font-bold text-lg m-2">{item.title}</h2>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <FontAwesomeIcon icon={faStar} className="bg-orange-50 rounded-full p-1" style={{ color: "#FFD43B", }} />
                <p className="font-medium text-md text-slate-500 ">{item.Rating}</p>
              </div>
              <div>
                <h6 className="text-md font-light m-2 text-slate-500">{item.location}</h6>
              </div>
            </div>
            <h2 className='font-semibold text-2xl text-black'>{item.Price}$</h2>
          </div>
        ))}
      </div>

      <div className='border-solid border-2 border-slate-300 p-5 rounded-3xl m-5 bottom-0 bg-white shadow-2xl'>
        <h2 className='font-light text-lg'>Total Amount</h2>
        <h2 className='font-semibold text-2xl text-black'>{Total}$</h2>
      </div>
    </div>
  )
}
