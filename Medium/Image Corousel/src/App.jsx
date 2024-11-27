import React, { useState } from "react";
import "./App.css";

//const images = [img1, img2, img3, img4, img5, img6]; ●


const images = [
  "https://carwow-uk-wp-0.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600",
    "/public/img/01.jpg",
    "/public/img/02.jpg",
    "/public/img/03.jpg",
    "/public/img/04.jpg",
    "/public/img/05.jpg",
    "/public/img/06.jpg",
  ];


export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length); // Cycle forward
    console.log("Next Index:", currentIndex);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length); // Cycle backward
    console.log("prev Index:", currentIndex);
  };

  const handlePageClick = (index) => {
    setCurrentIndex(index); // Go to specific image
    console.log("page click Index:", currentIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button
          className="carousel-button prev"
          onClick={handlePrev}
          aria-label="Previous Image"
        >
          ❮
        </button>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button
          className="carousel-button next"
          onClick={handleNext}
          aria-label="Next Image"
        >
          ❯
        </button>
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handlePageClick(index)}
              aria-label={`Go to image ${index + 1}`}
            >
              
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
