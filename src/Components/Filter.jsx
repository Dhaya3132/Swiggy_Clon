import React from "react";

function Filter(){
    return(
        <div className="flex gap-5 justify-start items-center mt-6">
            <button className="px-5 py-3 bg-orange-600 text-white rounded-full text-sm shadow-lg">Filter by</button>
            <button className="px-4 py-2.5 bg-orange-50 rounded-full text-sm  border border-solid border-slate-300 shadow-xl">Ratings 4.0 +</button>
        </div>
    )
}

export default Filter;