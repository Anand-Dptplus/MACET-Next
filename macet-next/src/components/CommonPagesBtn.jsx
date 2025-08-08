import React from 'react'
import Link from 'next/link'
import styles from '@/app/(main)/(pages)/(about)/about-us/page.module.css'

const CommonPagesBtn = ({ buttons }) => {
  return (
    <div className={styles.marginTopAboutButtons}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.btnFlexWrap}>
              {buttons.map((btn) => (
                <div key={btn.text} className={styles.aboutButtonsContainer}>
                  <Link href={btn.href} className={styles.customBtn}>
                    <span className={styles.btnText}>{btn.text}</span>
                    <span className={styles.btnIcon}>
                      <img src={btn.img} alt={btn.alt} loading="lazy" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonPagesBtn
