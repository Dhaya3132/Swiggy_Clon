import React from "react";
import Food_Item from "./FoodItem";
function Menu() {
    return (
        <section className="p-5 mx-auto w-4/5">
            <h2 className="font-semibold text-3xl">Top Restaurants in your location</h2>
            <Food_Item />
        </section>
    )
}

export default Menu;