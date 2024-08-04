import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../App';

function FoodCard({ item }) {
    const { cart, setCart } = useContext(cartContext);

    const handleCart = () => {
        setCart([...cart, item])
    }

    const handleRemoveItem = () => {
        setCart(cart.filter((data) => (
            data.id !== item.id
        )))
    }
    return (
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

            {cart.includes(item) ? <button className="text-white bg-orange-600 px-6 py-2 rounded-full font-medium text-xs cursor-pointer" onClick={handleRemoveItem} >Remove Item</button>
                : <button className="text-white bg-orange-600 px-6 py-2 rounded-full font-medium text-xs cursor-pointer" onClick={handleCart}>Add to Cart</button>}
        </div>
    )
}

export default FoodCard;