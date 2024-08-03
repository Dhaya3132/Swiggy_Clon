import React from 'react'
import { Search } from './Search'
import Food_Item from './FoodItem'
import Header from './Header'

export const Searchtab = () => {
  return (
    <div>
      <Header />
      <div className='p-10 mx-auto'>
        <h2 className='font-bold text-3xl'>Search Restaurants near by you...</h2>
        <Food_Item />
      </div>
    </div>

  )
}
