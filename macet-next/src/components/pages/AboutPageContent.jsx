import React from 'react'
import styles from '@/app/(main)/(pages)/(about)/about-us/page.module.css'
import Image from 'next/image'

const AboutPageContent = () => {
  return (
    <div className="Css-space">
      <div className="container">
        {/* Section 1 */}
        <div className={styles.rowSpace}>
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className={styles.aboutSectionTextBorder}>
              <p className={styles.aboutText}>
                The <b>“Maulana Azad College of Engineering & Technology″</b> was started in the year 1987 under the Millat 
                Education Society. This was the first technical self-financed minority institution in the entire northern India.
              </p>
              <p className={styles.aboutText}>
                In the year 1987-88, the scenario of technical education particularly amongst the Muslims was very poor. The presence of Muslims in the technical education was abysmal low, even less than 3%. There was no concept of Private Engineering Colleges in Bihar. Then Governor of Bihar His Excellency Dr. A. R. Kidwai has noticed this matter very seriously and shared his concern with the noble personalities of that time like (Late) Mr. Justice Sarwar Ali, Dr. Ahmad Abdul Hai and others. With this genesis, a society named as Millat Education Society was formed under the Society Registration Act 21, 1860; under the (Late) Mr. Justice Sarwar Ali as President, (Late) Mr. Fahimuddin Ahmad as Secretary and Dr. Ahmad Abdul Hai as Treasure. This society had decided to open an Engineering College in the first meeting of the Governing Body wide resolution Item No.2 dated 01.02.1987. The main mission of the society was to promote establishment of scientific/professional technical institution among the Muslims particularly, so that their educational and economic levels are enhanced.
              </p>
            </div>
          </div>
          <div className={`col-12 col-lg-5 order-1 order-lg-2 ${styles.heightBox} position-relative`}>
            <Image src="/images/macetimages/about-img2.webp" height={425} width={441} alt="about image" className={`w-100 rounded ${styles.cssAboutFirstImage}`} loading="lazy"/>
          </div>
        </div>

        {/* Section 2 */}
        <div className={styles.rowSpace}>
          <div className={`col-12 col-lg-5 ${styles.heightEndImgBox}`}>
            <Image src="/images/about/Macet-aboutimg2.jpg" height={449} width={441} alt="about image" className={`w-100 rounded ${styles.cssAboutSecontImage}`} loading="lazy"/>
          </div>
          <div className="col-12 col-lg-7">
            <div className={styles.aboutSectionTextBorder}>
              <p className={styles.aboutText}>
                The college was initially started in the Mariam Building at Anisabad, Patna, donated by (Late) Ms. Begum Aziza Imam. It has got recognition from All India Council of Technical Education (AICTE), New Delhi in the year 1994 wide AICTE File No.720-73-209/RC/94 for running Under Graduate B. Tech. Courses in Engineering & Technology Program. In the year 2000, the college was shifted at Neora in the sprawling campus spread over an area of approx. 18 acres. Since then, it is running successfully four years B. Tech Courses in Engineering & Technology Program.
              </p>
              <p className={styles.aboutText}>
                From Session 2023-24, AICTE, New Delhi has given approval for Diploma & Undergraduate Courses in Engineering & Technology Program . In <b>Diploma Courses</b> Annual Intake is of <b>180</b>, viz. <b>Civil Engg</b>. - <b>60</b>, <b>Computer Sc. & Engg.</b> - <b>60</b> and <b>Electrical Engg.</b> - <b>60</b>. In <b>Undergraduate Courses, the annual intake is of 300</b>, viz. <b>Civil Engg. – 60</b> , <b>Electrical & Electronics Engg. – 30</b>, <b>Computer Sc. & Engg. – 60</b>, <b>Computer Sc. & Engg.(Artificial Intelligence and Machine Learning) – 30</b>, <b>Computer Sc. & Engg.(Data Science) – 60 and Mechanical Engg. – 60</b>. It also has well established departments of Physics, Mathematics and Social Science. All the departments have well qualified experienced faculty and well equipped laboratories. There is a one computer centre having large number of application software and well connected with Internet.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className={`mb-0 ${styles.rowSpace}`}>
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className={`${styles.aboutSectionTextBorder} pb-xxl-5`}>
              <p className={styles.aboutText}>
                We have two Smart Classes having BRIO INTERACTIVE FLAT PANEL 75 INCH. We are having well established library comprising more than 4500 titles and approx. 25000 volumes covering various fields. It has separate common room for both boys and girls and also separate PRAYER Hall for both. There is also a good cafeteria in the campus. Therefore the college promotes good healthy environment for imparting high quality education and values. All these amenities are accommodated in six building comprising approx. 16500 sqm, namely – Class Room Complex, Laboratory Complex Building and Administrative cum Library Building, Workshop, Seminar Hall Complex and other Amenities Building.
              </p>
              <p className={styles.aboutText}>
                At present in the college, there are approximately 1000+ students, in which 30% are girl students. The college continuously encourage the girls student particularly Muslims to take admission in technical fields and provide very conducive environment in the campus for their growth and empowerment.
              </p>
              <p className={styles.aboutText}>
                The college also has an established Training and Placement Cell which helps students in getting jobs through campus selection. Through this cell large numbers of students are placed in various organizations such as IBM, Wipro, Microsoft, TCS, TCE, NTPC, NHPC, BHEL DRDO, NAL etc.
              </p>
            </div>
          </div>
          <div className={`col-12 col-lg-5 order-1 order-lg-2 position-relative ${styles.heightThirdBox}`}>
            <Image src="/images/about/Macet-aboutimg3.jpg" height={459} width={441} alt="about image" className={`w-100 rounded ${styles.cssThirdAboutImg}`} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPageContent
