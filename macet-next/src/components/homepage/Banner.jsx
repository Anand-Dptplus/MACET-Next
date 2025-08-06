"use client";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const mobileBannerImg = [
  { id: 1, bannerImg: '/images/macetimages/mobilebanner/banner1-mob.webp', title: 'Banner 1' },
  { id: 2, bannerImg: '/images/macetimages/mobilebanner/banner2-mob.webp', title: 'Banner 2' },
  { id: 3, bannerImg: '/images/macetimages/mobilebanner/banner3-mob.webp', title: 'Banner 3' },
  { id: 4, bannerImg: '/images/macetimages/mobilebanner/banner4-mob.webp', title: 'Banner 4' },
  { id: 5, bannerImg: '/images/macetimages/mobilebanner/banner5-mob.webp', title: 'Banner 5' },
];

const Banner = ({ bannerimg }) => {
  const [isMobile, setIsMobile] = useState(false);
  const fullText = "MACET";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(250);

  // Bootstrap js import
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  // Typing effect for the banner text
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

  // Mobile banner
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imagesToShow = isMobile ? mobileBannerImg : bannerimg;

  return (
    <>
      <div className="Css-p-relative">
        <div>
          <div id="carouselExampleFade"  className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {imagesToShow?.map((item, index) => (
                <div className={`carousel-item Cssbannerimgheight ${index === 0 ? "active" : ""}`} key={item.id}>
                  <div className="Css-banner-height">
                    <Image src={item.bannerImg} fill alt={item.title} className="w-100" />
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
            <button className="carousel-control-prev Css-prev-icon" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon Css-carousel-prev-icon-z" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
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
      <div className="fixed-buttons d-none d-md-block">
        <Link href="/enquiry" className="side-button">
          <span className="arrow-icon"><FaArrowUp size={16} style={{ paddingRight: "5px" }} /></span>
          ENQUIRY NOW
        </Link>
      </div>
    </>
  );
};

export default Banner;
