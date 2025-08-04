"use client"
import React,{useEffect} from 'react'
import './Banner.css';

const Banner = ({bannerimg}) => {
useEffect(() => {
      if (typeof window !== "undefined") {
        import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
          window.bootstrap = bootstrap;
        });
      }
    }, []);
  return (  
    <div className='Css-p-relative'>
    <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
        {bannerimg?.map((item, index) => (
          <div
            className={`carousel-item Cssbannerimgheight ${item.id === 237 ? "active" : ""}`}
            key={item.id}
          >
           <img
            src={
              item.bannerImg
                ?.replace("https://cdn.academist.app/Cloud/cdnclg/23", "https://nsmch-907076486.imgix.net") +
              "?auto=format&auto=compress"
            }
            alt={item.title}
            className="w-100"
          />
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

    <div>
    </div>
    </div>
  )
}

export default Banner
