import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-50 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between dark:bg-slate-900 dark:text-white">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Hello, Welcome here to learn something{" "}
          <span className="text-pink-600">new everyday!!!</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl  dark:bg-slate-900 dark:text-white">
          Success doesn’t come overnight, it comes from consistent learning.
          Stay curious, stay focused, and never stop improving yourself. Your
          hard work will speak louder than words! 💫
        </p>
        <div className="pt-8">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className=" dark:bg-slate-900 dark:text-white"
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className="pt-5">
          <button className="btn btn-secondary">Secondary</button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="banner.jpg"
          alt="Banner"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
