import React from 'react';
import  {Data}  from '../Products';

const Products = () => {
    return (
        <div className='flex flex-wrap justify-center items-center '>
            {
            Data.map((item,index) => (
                <div className='border-solid border-b-2 border-slate-200 w-80 h-80' key={index}>
                    <div className="">
                        <img src={item.thumbnail}  alt="Product Image" />
                    </div>
                    <div className="">
                        <h3>{item.title}</h3>
                        <p>Price :{item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))
        }
        </div>
        
    )
}

export default Products;