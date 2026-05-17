import React from "react";

function Cards({ item }) {
  return (
    <>
      <div
        className="my-4 card bg-base-100 shadow-md rounded-xl overflow-hidden
    w-full sm:w-80 md:w-90 hover:shadow-xl transition duration-300 hover:scale-105 duration-200
    dark:bg-slate-900 dark:text-white"
      >
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <span className="badge badge-secondary">{item.category}</span>
          </h2>
          <p className="text-gray-700">{item.title}</p>
          <div className="card-actions justify-between mt-3">
            <span className="badge badge-outline">${item.price}</span>
            <button className="btn btn-sm btn-primary rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
