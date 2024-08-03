import { FoodMenu } from "../Data/FootItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Search } from "./Search";
import { useState } from "react";
import Filter from "./Filter";

function Food_Item() {
    const [filterdFood, setFilteredFood] = useState(FoodMenu)

    const onSearchtext = (input) => {
        const FilterFood = FoodMenu.filter((item) => (
            item.title.toLowerCase().includes(input.toLowerCase())
        ))
        setFilteredFood(FilterFood)
    }
    const onFiltering = () => {
        const FilerRating = filterdFood.filter((item) => item.Rating >= '4.3')
        setFilteredFood(FilerRating)
    }
    return (
        <div>
            <Search productSearch={onSearchtext} />
            <Filter filterrating={onFiltering} />
            <div id="products" className="mt-10 flex flex-wrap justify-center items-center gap-9">
                {filterdFood.map((item) => (
                    <div id="foot_item" className="hover:scale-110" key={item.id}>
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

                        <button className="text-white bg-orange-600 px-6 py-2 rounded-full font-medium text-xs cursor-pointer">Add to Cart</button>

                    </div>
                ))}
            </div>
        </div>

    )
}
export default Food_Item;