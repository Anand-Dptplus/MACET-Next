import React from 'react'
import Image from "next/image";
import styles from '@/app/(main)/(pages)/page.module.css'
import Link from "next/link";

const GlanceMission = () => {
  return (
    <div className={`Css-space ${styles.cssGlanceMission}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cssUnderlineHeading justify-content-center">
              <h2 className="cssHeadingUnderlineText">Mission and Vision</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {/* Mission */}
          <div className="col-12 col-lg-6">
            <div className={`card ${styles.macetMissionCard}`}>
              <div className={styles.macetMissionTitle}>Mission</div>
              <div className={styles.macetMissionVShape}></div>
              <div className={styles.macetMissionContent}>
                <div className={styles.macetMissionIconBox}>
                  <img
                    src="/images/macetimages/eventgallery/mission-macet.webp"
                    className={styles.macetMissionIcon1}
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <div className={styles.macetMissionLine}></div>
                <div className={styles.macetMissionDetailsWrapper}>
                  <div className={styles.macetMissionDetail}>
                    <div className={styles.macetMissionCheckIcon}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p className={`description ${styles.macetMissionDescription}`}>
                      To foster scientific and technical temperament among the under privilege section of society particularly among the minorities, taking inspiration from Holy Book Quran, "Read : Thy Lord is the most bounteous (Quran 30: 96:3)".
                    </p>
                  </div>
                  <div className={styles.macetMissionDetail}>
                    <div className={styles.macetMissionCheckIcon}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p className={styles.macetMissionDescription}>
                      Inculcating in students a respect for fellow human beings and responsibility towards the society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Vision */}
          <div className="col-12 col-lg-6">
            <div className={`card ${styles.macetMissionCard}`}>
              <div className={styles.macetMissionTitle}>Vision</div>
              <div className={styles.macetMissionVShape}></div>
              <div className={styles.macetMissionContent}>
                <div className={styles.macetMissionIconBox}>
                  <img
                    src="/images/macetimages/eventgallery/vision-macet.webp"
                    className={styles.macetMissionIcon2}
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <div className={styles.macetMissionLine}></div>
                <div className={styles.macetMissionDetailsWrapper}>
                  <div className={styles.macetMissionDetail}>
                    <div className={styles.macetMissionCheckIcon}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p className={`${styles.macetMissionDescription}`}>
                      To impart innovative and interactive learning process to target multifaceted personality development.
                    </p>
                  </div>
                  <div className={styles.macetMissionDetail}>
                    <div className={styles.macetMissionCheckIcon}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p className={styles.macetMissionDescription}>
                      To integrate spiritual and moral values with education and to develop human potential to its ability.
                    </p>
                  </div>
                  <div className={styles.macetMissionDetail}>
                    <div className={styles.macetMissionCheckIcon}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <p className={styles.macetMissionDescription}>
                      To prepare students from diverse backgrounds to have aptitude for research and spirit of professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="row pt-5 mt-4 pb-4">
          <div className="col-12">
            <div className="cssUnderlineHeading justify-content-center">
              <h2 className="cssHeadingUnderlineText">Glance of Maulana Azad Day</h2>
            </div>
          </div>
        </div>
        <div className="row gy-2">
          {[
            "/images/macetimages/eventgallery/glance-img1.webp",
            "/images/macetimages/eventgallery/glance-img2.webp",
            "/images/macetimages/eventgallery/glance-img3.webp",
            "/images/macetimages/eventgallery/glance-img4.webp",
            "/images/macetimages/eventgallery/glance-img5.webp",
            "/images/macetimages/eventgallery/glance-img6.webp"
          ].map((src, idx) => (
            <div
              className="col-12 col-lg-4 wow animate__animated animate__fadeInLeft"
              key={idx}
            >
              <div className={styles.macetGlanceImageBox}>
                <img
                  src={src}
                  alt="image"
                  className={`rounded ${styles.macetGlanceImage}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="row">
            <div className="col-12">
                <div className="btn-group mt-lg-3 d-flex justify-content-center">
                    <Link href="/event-gallery" className="tmp-btn btn-green">Read More</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GlanceMission;
