'use client';
import React from 'react'
import styles from '@/app/(main)/(pages)/facilities/scholarship/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

const Scholarship = () => {
  return (
    <div className='pt-5'>
       <div className='cssBgGreenFirstSection'>
          <div className="container">
            <div className="row">
                <motion.div className={`col-12 col-lg-9 ${styles.cssContentText}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                    <p>MACET offers scholarships for the deserving cum poor students. Scholarships are granted to them based on certain standards set by the college. The key objective of scholarship is to encourage and motivate deserving students to pursue further studies regardless of any financial constraint.</p>
                    <p>The scholarship program at MACET covers a portion or full tuition fees depending on the student's academic performance, financial background, and overall conduct. Applications are thoroughly reviewed by a dedicated committee to ensure fairness and transparency in the selection process. Students are also guided and supported throughout the application process to help them access the benefits they are eligible for.</p>
                    <p>In addition to internal scholarships, the college assists students in applying for various government and private scholarship schemes. Regular workshops and awareness sessions are conducted to inform students about different funding opportunities. This holistic approach ensures that no talented student is deprived of quality education due to financial limitations.</p>
                </motion.div>
                <motion.div className="col-12 col-lg-3" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                    <div className={`mt-3 mt-lg-0 ${styles.cssImageBox}`}>
                        <div className='m-auto'>
                            <Image src="/images/department/CSE/Faculty_Profile/Mr_Ozair_Ahmad.webp" height={200} width={200} alt='Mr. Ozair Ahmad' title='Mr. Ozair Ahmad' style={{height: '176px', width: '176px'}}/>
                        </div>
                        <div className={`mt-2 ${styles.cssImageCaptionBox}`}>
                            <h6>Mr. Ozair Ahmad</h6>
                            <p>Institute Nodal Officer</p>
                        </div>
                    </div>
                </motion.div>
            </div>  
         </div>
       </div>
       <div className='pt-5 pb-5'>
          <div className="container">
            <motion.div className="row" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                    <div className="col-12">
                      <div className="cssUnderlineHeading mb-0">
                         <h2 className="cssHeadingUnderlinePageText">Scholarship and Loan Schemes:</h2> 
                      </div>                      
                   </div>         
            </motion.div>  
            <motion.div className="row" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                   <div className="col-lg-4">
                     <Image src="/images/scholarship/MOMA.webp" alt="Ministry of Minority Affairs" height={225} width={428} className='rounded w-100 h-auto'/> 
                   </div>   
                   <div className={`col-lg-8 pt-3 pt-lg-0 ${styles.cssContentText}`}>
                      <h5 className="mb-3 text-center text-lg-start"> Ministry of Minority Affairs (MOMA) </h5>
                      <p>Under this MOMA Scheme, students can take financial support that belong to minority communities - viz. Muslim, Christian, Sikh, Buddhist, Jain, Parsi (Zoroastrian) and want to pursue the professional and technical courses.</p>
                      <p>The details are available on the link <Link href="https://scholarships.gov.in" target='_blank' style={{color: "#213a67"}}>https://scholarships.gov.in</Link></p>
                   </div> 
            </motion.div>
            <motion.div className="row pt-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                 <div className={`col-lg-8 order-lg-1 order-2 pt-3 pt-lg-0  ${styles.cssContentText}`}>
                      <h5 className="mb-3 text-center text-lg-start"> Bihar Kalyan Vibhag Scholarship</h5>
                      <p>Welfare Department, Govt. of Bihar is providing Bihar Kalyan Vibhag Scholarships to Minority/OBC/SC/ST categories students pursuing Technical education in recognized college/Institution. For availing this scholarship, students must be domicile of Bihar and their family annual income should not be above 2.50 Lakhs.</p>
                      <p>The details are available on the link https://state.bihar.gov.in/ <Link href="https://scholarships.gov.in" target='_blank' style={{color: "#213a67"}}>https://scholarships.gov.in</Link></p>
                   </div>   
                   <div className="col-lg-4 order-lg-2 order-1">
                     <Image src="/images/scholarship/BiharKalyanVibhagScholarship.webp" height={239} width={428} alt="Bihar Kalyan Vibhag Scholarship" className='rounded w-100 h-auto'/> 
                   </div>
            </motion.div>
            <motion.div className="row pt-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.2 }}>
                <div className="col-lg-4">
                     <Image src="/images/scholarship/StudentCreditCardScheme.webp" height={252} width={435} alt="Ministry of Minority Affairs" className='rounded w-100 h-auto'/> 
                   </div>   
                     <div className={`col-lg-8 pt-3 pt-lg-0 ${styles.cssContentText}`}>
                      <h5 className="mb-3 text-center text-lg-start"> Ministry of Minority Affairs (MOMA) </h5>
                      <p>Under this MOMA Scheme, students can take financial support that belong to minority communities - viz. Muslim, Christian, Sikh, Buddhist, Jain, Parsi (Zoroastrian) and want to pursue the professional and technical courses.</p>
                      <p>The details are available on the link <Link href="https://scholarships.gov.in" target='_blank' style={{color: "#213a67"}}>https://scholarships.gov.in</Link></p>
                   </div>  
            </motion.div>
          </div>
       </div>
    </div>
  )
}

export default Scholarship  
