import React from 'react'
import styles from '@/app/(main)/(pages)/page.module.css'

const MissionVisionContent = () => {
  return (
    <div className='Css-space'>
       <div className="container">
         <div className="row">
           {/* Mission */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
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
       </div>
    </div>
  )
}

export default MissionVisionContent
