import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

const Freebook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-lp5p.onrender.com/book");

        setBook(res.data.filter((data) => data.category === "Free"));
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-6 ">
      {/* Header */}
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
      <p className="pb-6">
        Your growth matters! 🌟 <br />
        That’s why we’re offering free courses to help you learn, practice, and
        shine. Start today — your future self will thank you tomorrow. 💫
      </p>

      {/* Slider */}
      <Slider {...settings}>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Freebook;
