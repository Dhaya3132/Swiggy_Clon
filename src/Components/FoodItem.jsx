import { FoodMenu } from "../Data/FootItem";
import { Search } from "./Search";
import { useState } from "react";
import Filter from "./Filter";
import FoodCard from "./FoodCard";

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
            <div id="products" className="mt-10 flex flex-wrap justify-center items-center gap-5">
                {filterdFood.map((item) => (
                    <FoodCard item={item} key={item.id}/>
                ))}
            </div>
        </div>

    )
}
export default Food_Item;