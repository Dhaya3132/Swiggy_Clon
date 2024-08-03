import React from 'react'
import Food_Item from './FoodItem'
import Header from './Header'

export const Offers = () => {
  return (
    <div>
      <Header />
      <div className='mx-auto p-10'>
        <h2 className='font-semibold text-4xl '>Top Offer for you..</h2>
        <Food_Item />
      </div>
    </div>

  )
}
