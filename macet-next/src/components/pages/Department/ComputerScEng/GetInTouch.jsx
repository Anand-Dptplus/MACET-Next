import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import styles from '@/app/(main)/(pages)/departments/ugbtech/btech-in-computerscience-and-engineering/page.module.css';
import Image from "next/image";

const GetInTouch = ({ contactdata }) => {
  if (!contactdata) return null; 

  return (
    <div className="Css-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.cssGetInTouchBox}>
              <div className={`m-auto ${styles.cssGetInTouchImageBox}`}>
                <Image 
                  src={contactdata.img} 
                  alt={contactdata.name}  
                  title={contactdata.name} 
                  height={200}
                  width={200}
                  loading="lazy" 
                  className="m-auto"
                />
              </div>
              <div className={styles.cssGetInTouchImageSideContent}>
                <h6>{contactdata.name}</h6>
                <p>{contactdata.role}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.cssDepartmentGetintouchbox}>
              <p className={styles.cssGateintouchDepartmentHeading}>
                {contactdata.department}
              </p>
              <h4 className="mt-5 mb-4">Contact address</h4>
              <div className={styles.cssGetInTouchContactInfo}>
                <div className="mb-3">
                  <IoMdCall />   
                  <strong>&nbsp;Phone:&nbsp;</strong>
                  <a href={`tel:${contactdata.phone}`}>{contactdata.phone}</a>
                </div>
                <div className="mb-3">
                  <IoIosMail />
                  <strong>&nbsp;E-mail:&nbsp;</strong>
                  <a href={`mailto:${contactdata.email}`}>{contactdata.email}</a>
                </div>
                <div>
                  <IoLocationSharp />
                  <strong>&nbsp;Address:&nbsp;</strong>
                  <a 
                    href={contactdata.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {contactdata.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default GetInTouch;
