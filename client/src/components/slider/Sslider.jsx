import React, { useEffect, useState } from "react";
import axios from "axios";
import "./slider.css";
import backward from "../../images/back.png";
import forward from "../../images/forward.png";
import pause from "../../images/pause.png";
import play from "../../images/play.png";

const Sslider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const data = res.data.products.map((product) => product.images.map((img) => img));
        setThumbnails(data);
      } catch (error) {
        console.log(error, "Something went wrong");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      {
        !isPaused &&
          setCurrSlide((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrSlide((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="slider">
      <div className="container">
        <img src={thumbnails[currSlide]} alt="" className="sliderimages" />
        <div className="buttons">
          <button onClick={goToPrevSlide}>
            <img src={backward} className="slidericon" alt="backward" />
          </button>
          <button onClick={handlePause}>
            {isPaused ? (
              <img src={pause} className="slidericon pause" alt="pause" />
            ) : (
              <img src={play} className="slidericon" alt="play" />
            )}
          </button>
          <button onClick={goToNextSlide}>
            <img src={forward} className="slidericon" alt="forward" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sslider;
