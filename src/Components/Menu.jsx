import React from "react";
import Food_Item from "./FoodItem";
function Menu() {
    return (
        <section className="p-5 mx-auto md:w-4/5 w-9/12">
            <h2 className="font-semibold md:text-3xl text-2xl">Top Restaurants in your location</h2>
            <Food_Item />
        </section>
    )
}

export default Menu;