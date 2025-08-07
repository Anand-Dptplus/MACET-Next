"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaArrowUp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import "./Banner.css";

const mobileBannerImg = [
  { id: 1, bannerImg: '/images/macetimages/mobilebanner/banner1-mob.webp', title: 'Banner 1' },
  { id: 2, bannerImg: '/images/macetimages/mobilebanner/banner2-mob.webp', title: 'Banner 2' },
  { id: 3, bannerImg: '/images/macetimages/mobilebanner/banner3-mob.webp', title: 'Banner 3' },
  { id: 4, bannerImg: '/images/macetimages/mobilebanner/banner4-mob.webp', title: 'Banner 4' },
  { id: 5, bannerImg: '/images/macetimages/mobilebanner/banner5-mob.webp', title: 'Banner 5' },
];

const Banner = ({ bannerimg }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "MACET";
  const typingSpeed = 250;
  const imagesToShow = isMobile ? mobileBannerImg : bannerimg;

  // Mobile check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  // Bootstrap import + force start carousel manually
  useEffect(() => {
    const startCarousel = async () => {
      const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      const el = document.querySelector("#carouselExampleFade");
      if (el && bootstrap && window.bootstrap) {
        // Destroy old instance if any
        const existing = window.bootstrap.Carousel.getInstance(el);
        if (existing) {
          existing.dispose();
        }

        // Create new carousel instance and force ride
        new window.bootstrap.Carousel(el, {
          interval: 3000,
          ride: "carousel", // force it to start automatically
          pause: false,
          wrap: true,
        });
      }
    };

    startCarousel();
  }, [imagesToShow]);

  return (
    <>
      <div className="Css-p-relative">
        <div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              {imagesToShow?.map((item, index) => (
                <div
                  key={item.id}
                  className={`carousel-item Cssbannerimgheight ${index === 0 ? "active" : ""}`}
                >
                  <div className="Css-banner-height">
                    <Image
                      src={item.bannerImg}
                      fill
                      alt={item.title}
                      className="w-100"
                    />
                  </div>
                  <div className="Css-banner-text-button">
                    <h2 className="typewriter-text">{text}</h2>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="Css-Student-Teacher-container me-3">
                        <a href="/" className="Css-banner-first-btn">Student Login</a>
                      </div>
                      <div className="Css-Student-Teacher-container">
                        <a href="/" className="Css-banner-second-btn">Teacher Login</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev Css-prev-icon"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon Css-carousel-prev-icon-z" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="s-soft d-md-block d-none">
        <Link href="https://www.facebook.com/macet.ac.in" target="_blank" className="s-item cssFacebooksidebarIcon">
          <FaFacebookF size={22} />
        </Link>
        <Link href="https://x.com/macet_official" target="_blank" className="s-item cssTwittersidebarIcon">
          <BsTwitterX size={19} />
        </Link>
        <Link href="https://www.linkedin.com/school/macet-patna/" target="_blank" className="s-item cssLinkdinsidebarIcon">
          <FaLinkedinIn size={21} />
        </Link>
      </div>

      {/* Enquiry Button */}
      <div className="fixed-buttons d-none d-md-block">
        <Link href="/enquiry" className="side-button">
          ENQUIRY NOW
          <span className="arrow-icon">
            <FaArrowUp size={16} style={{ paddingRight: "5px" }} />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Banner;
