"use client";
import React, { useEffect } from "react";
import "./Banner.css";

const Banner = ({ bannerimg }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <div className="Css-p-relative">
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {bannerimg?.map((item, index) => (
              <div
                className={`carousel-item Cssbannerimgheight ${
                  index === 0 ? "active" : ""
                }`}
                key={item.id}
              >
                <img src={item.bannerImg} alt={item.title} className="w-100" />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev Css-prev-icon"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon Css-carousel-prev-icon-z"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
