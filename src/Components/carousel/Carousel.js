import React from "react";
import { useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    "https://boomersacademy.com/wp-content/uploads/2023/11/slide-1-1-1.webp",
    "https://boomersacademy.com/wp-content/uploads/2023/11/slide-2-1.webp",
    "https://boomersacademy.com/wp-content/uploads/2023/11/slide-3-new-1.webp",
  ];

  useEffect(() => {
    const carouselElement = document.getElementById("carouselExample");
    const carousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 3000,
      pause: false,
    });
    return () => carousel.dispose();
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100 carousel-images carousel-image"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
