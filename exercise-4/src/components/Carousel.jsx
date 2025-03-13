import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  // State to manage the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the click on the left button
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle the click on the right button
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick} />

      {/* Display the current image */}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick} />
    </div>
  );
};