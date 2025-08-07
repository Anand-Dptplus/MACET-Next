"use client";
import React, { useEffect, useRef, useState } from "react";
import { fetchFromApi } from "@/lib/api"; // Make sure this import is correct
import "./NoticeSection.css";

const NoticeSection = () => {
  const noticeRef = useRef(null);
  const academicRef = useRef(null);

  const [noticeData, setNoticeData] = useState([]);

  const academicNotices = [
    { title: "Republic Day", date: "January 26" },
    { title: "Independence Day", date: "August 15" },
    { title: "Gandhi Jayanti", date: "October 2" },
    { title: "Republic Day", date: "January 26" },
    { title: "Independence Day", date: "August 15" },
    { title: "Gandhi Jayanti", date: "October 2" },
  ];

  useEffect(() => {
    // Fetch notice data on mount
    const fetchData = async () => {
      const data = await fetchFromApi('ALLNews/WebNewsType?newstype=NB', 'notice');
      setNoticeData(data || []);
    };  
    fetchData();

    const initializeScroll = (containerRef) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const content = container.querySelector(".scroller-content");
      if (!content) return;
      const clone = content.cloneNode(true);
      container.appendChild(clone);

      let paused = false;
      const scrollSpeed = 0.5;
      const contentHeight = content.scrollHeight;

      const autoScroll = () => {
        if (!paused) {
          container.scrollTop += scrollSpeed;
          if (container.scrollTop >= contentHeight) {
            container.scrollTop = container.scrollTop - contentHeight;
          }
        }
        requestAnimationFrame(autoScroll);
      };

      container.addEventListener("mouseenter", () => (paused = true));
      container.addEventListener("mouseleave", () => (paused = false));
      autoScroll();
    };

    // Delay scroll initialization until data is loaded
    const scrollTimeout = setTimeout(() => {
      initializeScroll(noticeRef);
      initializeScroll(academicRef);
    }, 500);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="Css-notice-bg-area">
      <div className="container">
        <div className="row">
          {/* Left logos */}
          <div className="col-12 col-lg-4 d-flex align-items-center">
            <div className="row Css-notice-row-gap">
              {[
                { img: "/images/approval/AICTE.png", label: "AICTE" },
                { img: "/images/approval/SBTE.png", label: "SBTE" },
                { img: "/images/approval/BEU.png", label: "BEU" },
                { img: "/images/approval/aishe.jpg", label: "AISHE (C-43572)" },
              ].map((item, index) => (
                <div className="col-6" key={index}>
                  <div className="Css-approval-content">
                    <img src={item.img} alt={item.label} loading="lazy" />
                    <h4>{item.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notice Board */}
          <div className="col-12 col-lg-4">
            <div className="notice-section">
              <h2 className="Css-heading-notice-section">📢 Notice Board</h2>
              <div className="scroller-container" ref={noticeRef}>
                <div className="scroller-content">
                  {[...noticeData, ...noticeData].map((item, i) => (
                    <div
                      className="notice-item"
                      key={i}
                      style={i === 0 ? { marginTop: "10px" } : {}}
                    >
                      <div className="notice-title">
                        {item.title}
                        {item.isNew && (
                          <img
                            src="https://res.cloudinary.com/gumlapolytechnic/image/upload/v1544438294/General/new_icon_blink.gif"
                            alt="new"
                            title="new"
                          />
                        )}
                      </div>
                      <div className="notice-date">
                        {new Date(item.startdate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <a
                        href={item.targetLink}
                        target="_blank"
                        className="notice-link"
                      >
                        🔗 View Notice
                      </a>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          {/* Events */}
          <div className="col-12 col-lg-4 Css-padding-events-mob-space">
            <div className="notice-section">
              <h2 className="Css-heading-notice-section">
                <img src="/images/approval/events.png" alt="events" /> Events
              </h2>
              <div className="scroller-container" ref={academicRef}>
                <div className="scroller-content">
                  {academicNotices.map((item, i) => (
                    <div
                      className="notice-item"
                      key={i}
                      style={i === 0 ? { marginTop: "10px" } : {}}
                    >
                      <div className="notice-title">{item.title}</div>
                      <div className="notice-link">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
