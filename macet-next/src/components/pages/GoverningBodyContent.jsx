import React from "react";
import styles from "@/app/(main)/(pages)/(about)/governing-body/page.module.css";

const GoverningBodyContent = ({ members, cardHeight }) => {
  return (
    <div className="Css-space">
      <div className="container">
        <div className={`row ${styles.governingRowSpace}`}>
          {members.map((member, idx) => (
            <div key={member.name + idx} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div 
                className={styles.governingBodyCard} 
                style={{ height: `${cardHeight}px` }} // height prop se apply
              >
                <div className={styles.governingHoverBg}></div>
                <div className={styles.governingImgContainer}>
                  <img src={member.img} alt={member.name} title={member.name} loading="lazy" />
                </div>
                <div className={styles.governingTextContainer}>
                  <h3>{member.name}</h3>
                  {member.degree && <p>{member.degree}</p>}
                  <p>{member.role}</p>  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoverningBodyContent;
