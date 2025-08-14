"use client"
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import style from '@/app/(main)/(pages)/departments/ugbtech/btech-in-computerscience-and-engineering/page.module.css';

const Lab = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Lightbox ke liye slides array
  const slides = data.labs.map(lab => ({ src: lab.src }));

  return (
    <div className=''>
      <div className="container">
        <div className="row gy-lg-4">
          {data.labs.map((lab, i) => (
            <div className="col-12 col-lg-3" key={i}>
              <div 
                className={style.cssLabsImageCont} 
                onClick={() => { setIndex(i); setOpen(true); }}
                style={{ cursor: 'pointer' }}
              >       
                <img
                  src={lab.src}
                  alt={`Lab ${i + 1}`}
                  title={`Lab ${i + 1}`}
                  className="img-fluid w-100 rounded bg-white p-1"
                  style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}
                />        
                <div className={style.cssOverlayLabIcon}>
                  <FaEye color='white' size={24}/>
                </div>
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
