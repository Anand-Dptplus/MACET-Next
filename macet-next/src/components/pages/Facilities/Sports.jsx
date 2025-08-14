import React from 'react'
import styles from '@/app/(main)/(pages)/facilities/sports/page.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import SharedLoader from '@/components/SharedLoader';
const Lab = dynamic(() => import("@/components/pages/Facilities/Lab"), {loading: () => <SharedLoader />});
import GlanceofSports from '@/data/facilities/Sports/GlanceofSports.json'
const GoverningBodyContent = dynamic(() => import("./GoverningBodyContent"), {loading: () => <SharedLoader />});
import CollegeSportsCommittee from '@/data/facilities/Sports/CollegeSportsCommittee.json'

const Sports = () => {
  return (
    <div className='pt-5'>
       <div className='cssBgGreenFirstSection'>
          <div className="container">
            <div className="row">
                <div className={`col-12 col-lg-9 ${styles.cssContentText}`}>
                    <p>Games and Sports activities are essential for the students in order to enhance general health, sports skills, foster growth in leadership, and enhance sense of community and to maintain quality of life.</p>
                    <p>At MACET, we offer innumerable sports opportunities to every student by organizing within college and inter college sports events. The College boasts of different sports facilities in the campus itself like badminton court, Football, Volleyball, Kabaddi and Cricket ground.</p>
                    <p>There are a wide number of activities and programs available to students on campus. Each of these extracurricular activities has their own short and long-term benefits. Every year, the College is organizing various sports activities like Sports Week, Milan 2021, Saarang 2020.</p>
                    <p>Additionally, we emphasize the importance of teamwork, discipline, and strategic thinking by encouraging students to actively participate in team-based sports, which contribute to both personal and professional development.</p>
                </div>
                <div className="col-12 col-lg-3">
                    <div className={`mt-3 mt-lg-0 ${styles.cssImageBox}`}>
                        <div className='m-auto'>
                            <Image src="/images/macetimages/facilities/Moazam.webp" height={200} width={200} alt='S. Moazzam Hussain' title='S. Moazzam Hussain' style={{height: '176px', width: '176px'}}/>
                        </div>
                        <div className={`mt-2 ${styles.cssImageCaptionBox}`}>
                            <h6>S. Moazzam Hussain</h6>
                            <p>Incharge</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
       <div className='pt-5 pb-5'>
          <div className="container">
            <div className="row">
                    <div className="col-12">
                      <div className="cssUnderlineHeading mb-0">
                         <h2 className="cssHeadingUnderlinePageText">College Sports Committee</h2> 
                      </div>
                     <div>
                        <GoverningBodyContent members={CollegeSportsCommittee} cardHeight={330}/>
                      </div>
                </div>
            </div>
          </div>
       </div>
       <div className={`pb-5 ${styles.cssGlanceSportsSection}`}>
          <div className="container">
            <div className="row">
                <div className="col-12">
                     <div className="cssUnderlineHeading">
                         <h2 className="cssHeadingUnderlinePageText">A Glance of Sports</h2> 
                     </div>
                     <div>
                          <Lab data={GlanceofSports}/>
                     </div>
                </div>
            </div>  
          </div>
       </div>
    </div>
  )
}

export default Sports
