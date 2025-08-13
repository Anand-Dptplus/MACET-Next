import React from "react";
import styles  from '@/app/(main)/(pages)/departments/ugbtech/btech-in-computerscience-and-engineering/page.module.css'
import Image from "next/image";

const MentorCard = ({mentorsdata}) => {
  return (
    <div className="Css-space">
        <div className="container">
            <div className="row gy-lg-4 gy-xxl-3">
                {mentorsdata.map((member, idx) => (
                    <div key={idx} className="col-lg-3">
                        <div className={styles.cssMentorsCard}>
                            <div className={styles.cssCardLeftdesing}></div>
                            <div className={styles.cssCardRightdesing}></div>
                            <div className={styles.cssMentorsimgBox}> 
                                <Image src={member.img} height={113} width={113} alt={member.name}/>
                            </div>
                            <div className={styles.cssMentorsCardContent}>
                                <p className="mb-2"><span>Mentor’s Name:</span> {member.name}</p>
                                <p className="mb-2"><span>Batch:</span> {member.batch}</p>
                                <p className="mb-2"><span>Email Id:</span><span><a href={`mailto:${member.email}`}> {member.email}</a></span></p>
                                <p className="mb-2"><span>Contact No:</span><span><a href={`tel:${member.contact}`}> {member.contact}</a></span></p>
                            </div>
                        </div>
                    </div>
                  ))}
            </div>
        </div>
    </div>
  );
};

export default MentorCard;
