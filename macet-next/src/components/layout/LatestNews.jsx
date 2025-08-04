import React from 'react'
import './LatestNews.css'
import { FaBell } from 'react-icons/fa';

const LatestNews = ({ newsItems }) => {
  return (
    <>
      <div id="marque-section" className="stickyBottom">
        <div className="marginTop">
          <div className="row">
            <div className="col-2 col-md-2 latestNews custom-btn btn-11">
              <p className="heading">
                <span className="text-uppercase d-none d-md-block">
                  Latest News{" "}
                </span>
                <FaBell />
              </p>
            </div>
            <div className="col-10 col-md-10 newsWrapper">
              <div className="newsTicker">
                <div className="newsContent">
                 <marquee behavior="smooth" direction="left">
                  {newsItems?.map((item, index) => (
                    <span key={index} className='text-white'>
                      <a href={item.targetLink} target="_blank" rel="noopener noreferrer">
                        {item.title}
                        &nbsp;
                        <img
                          src="https://res.cloudinary.com/gumlapolytechnic/image/upload/v1544438294/General/new_icon_blink.gif"
                          alt="new"
                          loading="lazy"
                        />
                      </a>
                      {index !== newsItems.length - 1 && <>| &nbsp;&nbsp;</>}
                    </span>
                  ))}
                 </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestNews
