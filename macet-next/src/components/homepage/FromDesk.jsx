import React from 'react'
import styles from '@/app/(main)/(pages)/page.module.css'
import Image from 'next/image'
import { IoIosCloseCircleOutline } from "react-icons/io";

const FromDesk = () => {
  return (
    <div className='Css-space'>
       <div className="container">
        <div className="row gy-5">
            <div className="col-12">
                 <div className="cssUnderlineHeading justify-content-center">
                     <h2 className="cssHeadingUnderlineText">From the Desk of ...</h2> 
                 </div>
            </div>
            {/* President */}
            <div className="col-lg-4">
                <div className={styles.cssMessageCard}>
                    <div className={styles.cssMessageCardImage}>
                        <img src="/images/macetimages/president.webp"  alt="President" loading="lazy"/>
                    </div>
                    <h3>President</h3>
                    <p>Dr. Ahmad Abdul Hai</p>  
                    <button className={styles.cssViewProfilePresidentBtn} data-bs-toggle="modal" data-bs-target="#presidentMessageModal"> View Message</button>
                    {/* President Model */}
                    <div className="modal fade" id="presidentMessageModal" tabIndex="-1" aria-labelledby="presidentMessageLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                          <div className={`modal-header ${styles.cssModalPrasidentHeader}`}>
                            <h5 className="modal-title text-white" id="presidentMessageLabel"> From the Desk of President</h5>
                            <button type="button" className={styles.cssModelPresidentCloseBtn}  data-bs-dismiss="modal" aria-label="Close"> <IoIosCloseCircleOutline color='white' size={30}/></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">   
                              <div className={`col-lg-9 col-12 ${styles.cssModelText}`}>
                                  <p> It is pleasure and an honor for me to welcome you to the MACET website.</p>
                                  <p> I still remember way back in 1985, when Hon’ble Justice S. Sarwar Ali came over to my humble residence to first discuss the issue of establishing a minority technical college. It took nearly two years for this formalities to be concluded and MACET became a reality in 1987. </p>
                                  <p> A lot of eminent personalities from the administrative and academic fields have put in their sweat and labour to bring this institution to its present status. I salute their memory.</p>
                                  <p> Today I am proud to say that with the blessing of Almighty Allah we are the best Engineering College in Bihar in the private sector. This is not to convey that we don’t have problems and deficiencies but the struggle is on and Insha’Allah we shall take MACET to greater heights in the days to come.</p>
                              </div>
                              <div className="col-12 col-lg-3"> 
                                <div className={styles.cssModelBodyImage}>
                                  <figure>
                                    <Image src="/images/macetimages/president.webp" height={191} width={186} alt="President" loading="lazy" />
                                    <figcaption style={{ textAlign: "center", marginTop: "8px", fontSize: "16px" }}>
                                      Dr. Ahmad Abdul Hai
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
              {/* Vice President */}
            <div className="col-lg-4">
                <div className={`${styles.cssMessageCard} ${styles.cssMessageCardVicePresident}`}>
                    <div className={styles.cssMessageCardImage}>
                        <img src="/images/macetimages/Vice_Presedent.webp"  alt="President" loading="lazy"/>
                    </div>
                    <h3>Vice President</h3>
                    <p>Mr. Syed Shafiuzzaman Mashhadi</p>  
                    <button className={styles.cssViewProfilePresidentBtn} data-bs-toggle="modal" data-bs-target="#vicepresidentMessage"> View Message</button>
                    {/*Vice President Model */}
                    <div className="modal fade" id="vicepresidentMessage" tabIndex="-1" aria-labelledby="vicepresidentMessageLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                          <div className={`modal-header ${styles.cssModalPrasidentHeader}`}>
                            <h5 className="modal-title text-white" id="presidentMessageLabel"> From the Desk of Vice President</h5>
                            <button type="button" className={styles.cssModelPresidentCloseBtn}  data-bs-dismiss="modal" aria-label="Close"> <IoIosCloseCircleOutline color='white' size={30}/></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">   
                              <div className={`col-lg-9 col-12 ${styles.cssModelText}`}>
                                  <p> <b>Martin Luther King Jr. once said:</b></p>
                                  <p> <i>"If you can't fly, run. If you can't run, walk. If you can't walk, crawl — but by all means, keep moving."</i></p>
                                  <p> At MACET, we believe that learning is not just about books or exams — it's about building character, resilience, and a mindset that never gives up.</p>
                                  <p> Many of you come from challenging backgrounds, and I want to remind you — your determination is your greatest strength. Keep pushing, keep learning, and remember:</p>
                                  <p>Knowledge is power — and with it, you have the ability to change your life and the world around you.</p>
                              </div>
                              <div className="col-12 col-lg-3"> 
                                <div className={styles.cssModelBodyImage}>
                                  <figure>
                                    <Image src="/images/macetimages/Vice_Presedent.webp" height={191} width={186} alt="President" loading="lazy" />
                                    <figcaption style={{ textAlign: "center", marginTop: "8px", fontSize: "16px" }}>
                                     Mr. Syed Shafiuzzaman Mashhadi
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
              {/* Director */}
            <div className="col-lg-4">
                <div className={` ${styles.cssMessageCard} ${styles.cssMessageCardDirector}`}>
                    <div className={styles.cssMessageCardImage}>
                        <img src="/images/macetimages/Dr-Asim-Kumar.webp"  alt="President" loading="lazy"/>
                    </div>
                    <h3>Director</h3>
                    <p>Prof. (Dr.) Asim Kumar</p>  
                    <button className={styles.cssViewProfilePresidentBtn} data-bs-toggle="modal" data-bs-target="#directorMessage"> View Message</button>
                    {/* Director */}
                    <div className="modal fade" id="directorMessage" tabIndex="-1" aria-labelledby="directorMessageLabel" aria-hidden="true">
                      <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content">
                          <div className={`modal-header ${styles.cssModalPrasidentHeader}`}>
                            <h5 className="modal-title text-white" id="presidentMessageLabel"> From the Desk of Director</h5>
                            <button type="button" className={styles.cssModelPresidentCloseBtn}  data-bs-dismiss="modal" aria-label="Close"> <IoIosCloseCircleOutline color='white' size={30}/></button>
                          </div>
                          <div className="modal-body">
                            <div className="row">   
                              <div className={`col-lg-9 col-12 ${styles.cssModelText}`}>
                                  <p> At Maulana Azad College of Engineering and Technology, Patna we are committed to nurturing engineers who shall be the future visionaries of India’s technology space. We believe that quality education and technological development lie at the core of our social progress. Towards this, the goal of our institution is to provide an environment that fosters creativity and support interdisciplinary educational activities. Empowering the marginalised communities with quality education is one of the key hallmarks of our institution.</p>
                                  <p>A majority of students of our college come from underprivileged backgrounds and the institution strives to provide them education at subsidised rates to further the ideals of social equity and inclusive learning.</p>
                                  <p> The college is rated amongst the topmost Engineering institutions in the state of Bihar. The students are admitted through a competitive selection process and receive inputs through classroom teaching, research projects and industry interactions in the form of internships. A series of activities such as technical festivals, sports festivals, and industry-focussed seminars are also organised for the students to ensure their wholesome development.</p>
                              </div>
                              <div className="col-12 col-lg-3"> 
                                <div className={styles.cssModelBodyImage}>
                                  <figure>
                                    <Image src="/images/macetimages/Dr-Asim-Kumar.webp" height={191} width={186} alt="President" loading="lazy" />
                                    <figcaption style={{ textAlign: "center", marginTop: "8px", fontSize: "16px" }}>
                                     Prof. (Dr.) Asim Kumar
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default FromDesk
