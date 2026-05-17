import React from "react";
import list from "../data/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"

const Course = () => {
    console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="p-8 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-8">
            Welcome to a space where learning never stops and growth never ends.
            Every click brings you closer to new knowledge and exciting
            opportunities. Let’s explore, learn, and grow together — because
            your journey starts right here, right now! 🚀
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-5 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
