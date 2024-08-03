import { FoodMenu } from "../Data/FootItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Food_Item() {
    return (
        <div id="products" className="mt-10 flex flex-wrap justify-center items-center gap-9">
            {FoodMenu.map((item) => (
                <div id="foot_item" key={item.id}>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.img}`} alt="FoodImage" className="w-72 h-60 rounded-3xl object-cover" />
                    <h2 className="font-bold text-xl m-2">{item.title}</h2>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faStar} className="bg-orange-50 rounded-full p-1" style={{ color: "#FFD43B", }} />
                        <p className="font-semibold text-lg text-slate-500 ">{item.Rating}</p>
                    </div>
                    <h6 className="text-lg font-semibold m-2">{item.location}</h6>
                    <button className="text-white bg-orange-600 px-6 py-2 rounded-full font-semibold">Add to Cart</button>

                </div>
            ))}
        </div>
    )
}
export default Food_Item;