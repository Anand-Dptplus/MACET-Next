"use client";
import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Ensure valid scroll calculations
      const maxScrollHeight = documentHeight - windowHeight;
      const scrolled = maxScrollHeight > 0 ? (scrollTop / maxScrollHeight) * 100 : 0;

      setScrollProgress(scrolled);

      // Toggle visibility based on scroll position
      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-light border-0 p-0 rounded-circle position-fixed d-flex align-items-center justify-content-center ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        transition: "opacity 0.3s ease",
        zIndex: 9999,
        backgroundColor: "white"
      }}
      aria-label="Scroll to top"
    >
      {/* Progress Circle using SVG */}
      <svg
        width="50"
        height="50"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <circle
          cx="25"
          cy="25"
          r="22"
          stroke="#e0e0e0"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r="22"
          stroke="var(--my-primary-color)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={2 * Math.PI * 22}
          strokeDashoffset={2 * Math.PI * 22 * (1 - scrollProgress / 100)}
          strokeLinecap="round"
          transform="rotate(-90 25 25)"
        />
      </svg>

      <IoMdArrowRoundUp size={20} style={{ zIndex: 1 }} />
    </button>
  );
}
