import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Data} from '../Data/FootItem';

const FoodScroll = () => {

  const handleLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const handleRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className='w-9/12 mx-auto mt-5 p-5 border-solid border-b-4 border-slate-200' >

      <div className='flex justify-between items-center'>
        <h2 className='text-3xl font-bold'>What's on your mind?</h2>
        <div className='flex gap-3'>
          <FontAwesomeIcon icon={faArrowLeft} className='m-1 border-2 border-slate-200 p-2 rounded-full' onClick={handleLeft} />
          <FontAwesomeIcon icon={faArrowRight} className='m-1 border-2 border-slate-200 p-2 rounded-full' onClick={handleRight} />
        </div>
      </div>

      <div className='flex items-center justify-center  overflow-x-scroll scroll scroll-smooth  no-scrollbar' id='slider'>
        {Data.map((image) => (
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/${image}`} alt="Image" className='w-56 h-56' />
        ))}
      </div>
    </div>


  )
}

export default FoodScroll;

