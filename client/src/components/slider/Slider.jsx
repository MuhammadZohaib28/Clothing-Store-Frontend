import React, { useEffect, useState } from "react";
import "./slider.scss";
import data from "./Data";
import backward from "../../images/back.png";
import forward from "../../images/forward.png";
import pause from "../../images/pause.png";
import play from "../../images/play.png";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  

  useEffect(() => {
    const interval = setInterval(() => {
      {
        !isPaused &&
          setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevSlide = () => {
    setCurrSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };
  return (
    <div className="slider">
      <div className="container">
        <img src={data[currSlide]} alt=""  className="sliderimages" />
        <div className="buttons">
          <button onClick={goToPrevSlide}>
            <img src={backward} className="slidericon" />
          </button>
          <button onClick={handlePause}>
            {isPaused ? (
              <img src={pause} className="slidericon pause" />
            ) : (
              <img src={play} className="slidericon" />
            )}
          </button>
          <button onClick={goToNextSlide}>
            <img src={forward} className="slidericon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;




