"use client"
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import style from '@/app/(main)/(pages)/departments/ugbtech/btech-in-computerscience-and-engineering/page.module.css';

const Lab = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox ke liye slides array
  const slides = data.labs.map(lab => ({ src: lab.src }));

  return (
    <div className='Css-space'>
      <div className="container">
        <div className="row">
          {data.labs.map((lab, i) => (
            <div className="col-12 col-lg-4" key={i}>
              <div 
                className={style.cssLabsImageCont} 
                onClick={() => { setIndex(i); setOpen(true); }}
                style={{ cursor: 'pointer' }}
              >       
                <img
                  src={lab.src}
                  alt={`Lab ${i + 1}`}
                  title={`Lab ${i + 1}`}
                  className="img-fluid w-100 rounded"
                />        
                <div className={style.cssOverlayLabIcon}>
                  <FaEye color='white' size={24}/>
                </div>
              </div>
              <div className={style.cssLabsImageCaption}>
                <HiComputerDesktop size={21}/>&nbsp; {lab.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
       controller={{
          closeOnBackdropClick: true,  
        }}
      />
    </div>
  );
};

export default Lab;
