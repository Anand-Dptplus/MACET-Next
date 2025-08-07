'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa";

const OwlSlider = ({
  items,
  itemsPerView,
  autoplay,
  autoplayInterval = 3000,
  nav = false, // 🔹 default: no arrows
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [slideSize, setSlideSize] = useState('100%');

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  // Responsive slide size
  useEffect(() => {
    if (!itemsPerView) return;

    const updateSlideSize = () => {
      const width = window.innerWidth;
      let perView = 1;

      for (const breakpoint in itemsPerView) {
        if (width >= breakpoint) {
          perView = itemsPerView[breakpoint];
        }
      }

      setSlideSize(`${100 / perView}%`);
    };

    updateSlideSize();
    window.addEventListener('resize', updateSlideSize);
    return () => window.removeEventListener('resize', updateSlideSize);
  }, [itemsPerView]);

  // Scroll buttons
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="position-relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{ flex: `0 0 ${itemsPerView ? slideSize : "100%"}` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Only show arrows if nav=true */}
      {nav && (
        <div className="embla-nav-btns d-flex justify-content-center gap-3 mt-3">
          <button
            onClick={scrollPrev}
            className="btn Css-prev-next-button"
            aria-label="Previous"
          >
           <FaArrowLeft style={{ color: 'white', height: '18px', width: '12px' }}/>
          </button>
          <button
            onClick={scrollNext}
            className="btn Css-prev-next-button"
            aria-label="Next"
          >
            <FaArrowRight style={{ color: 'white', height: '18px', width: '12px' }}/>
          </button>
        </div>
      )}

    </div>
  );
};

export default OwlSlider;
