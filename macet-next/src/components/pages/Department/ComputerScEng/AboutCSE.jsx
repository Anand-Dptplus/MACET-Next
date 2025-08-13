import React from 'react'
import Image from 'next/image';
import styles from '@/app/(main)/(pages)/departments/ugbtech/btech-in-computerscience-and-engineering/page.module.css';

const AboutCSE = ({ data }) => {
  return (
    <section className="Css-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className={styles.cssAboutContainer}>
              <div className={`m-auto ${styles.cssLeftImgContainer}`}>    
                <Image
                  src={data.profile.image}
                  alt={data.profile.imageAlt}
                  title={data.profile.imageTitle}
                  width={220}
                  height={220}
                  loading="lazy"
                />
              </div>
              <div className={`mt-4 ${styles.cssImageCaptionContainer}`}>
                <h6 className={styles.cssNameCaption}>{data.profile.name}</h6>
                <p className={styles.cssDesignationCaption}>{data.profile.designation}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className={styles.cssContentContainer}>
              {data.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCSE;
