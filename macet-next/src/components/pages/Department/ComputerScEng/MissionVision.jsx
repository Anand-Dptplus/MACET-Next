import React from 'react'
import Image from 'next/image';
import styles from '@/app/(main)/(pages)/departments/ugbtech/btech-in-computerscience-and-engineering/page.module.css';

const MissionVision = ({ mission, vision }) => (
  <div className="Css-space">
    <div className="container">
      <div className="row">
        <div className="col-12 m-auto">
          <div className="row">
            <div className="col-lg-8 order-lg-1 order-2">
              <div className={styles.missionTextContainer}>
                <h3>Mission</h3>
                {mission.points.map((point, idx) => (
                  <p key={idx} className={styles.textMissionContent}>{point}</p>
                ))}
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className={styles.missionImgContainer}>
                <Image
                  src={mission.image}
                  alt="macet mission"
                  width={331}
                  height={355}
                  className="rounded w-100 h-auto"
                />  
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className={styles.missionImgContainer}>
                <Image
                  src={vision.image}
                  alt="vision"
                  width={331}
                  height={355}
                  className="rounded w-100 h-auto"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles.missionTextContainer}>
                <h3>Vision</h3>
                {vision.points.map((point, idx) => (
                  <p key={idx} className={styles.textMissionContent}>{point}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MissionVision;
