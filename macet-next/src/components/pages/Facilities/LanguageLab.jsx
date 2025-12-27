import React from 'react'
import styles from '@/app/(main)/(pages)/facilities/language-lab/page.module.css'
import Image from 'next/image'

const LanguageLab = () => {
  return (
    <div className='Css-space'>
        <div className='cssBgGreenFirstSection'>
             <div className="container">
                  <div className="row">
                    <div className={`col-12 ${styles.cssContentText}`}>
                        <p>Good Communication skills are indispensable for the success of any profession. Language laboratory plays a central role in the language learning process. MACET too boost of the state of the art English Lab with innovation tools like, corei3 processor system, headsets and microphones to assist the students with the most appropriate pronunciation.</p>
                        <p>The laboratory collection is designed to assist learners in the acquisition and maintenance of aural comprehension, oral and written proficiency and cultural awareness. The language lab offers audio visual aids for both classics and modern orientation. The laboratory collection is designed to assist learners in the acquisition and maintenance of aural comprehension, oral and written proficiency and cultural awareness. The language lab offers audio visual aids for both classics and modern orientation. This Hi-tech Language Laboratory allows the students to listen to model pronunciation, repeat and record the same, listen to their performance, compare with the model and do self-assessment.</p>
                        <p>The lab focuses more on improving the basic skills i.e LSRW. Students from rural areas who are generally weak in English can have sufficient ear training in the language lab. It aims at confidence-building among students for interactions and presentations in English. The basic purpose of the lab is to provide students a platform to enhance English language skills, communication skills and to practice soft skills.</p>
                        <h5 className='pt-2'><span>Lab Faculty : </span> <span style={{color: 'var(--my-secondary-color)'}}>Mr. Khalid Raza</span></h5>
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12" >
                        <div className="cssUnderlineHeading mb-0">
                         <h2 className="cssHeadingUnderlinePageText">List of Activities:</h2> 
                       </div>  
                       <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className='cssRightSignHeading'><p>Professional Communication</p></div>
                            <div className='cssRightSignHeading'><p>Phonetics (Study of sound)</p></div>
                            <div className='cssRightSignHeading'><p>Presentation Skills</p></div>
                            <div className='cssRightSignHeading'><p>Mock Interview session</p></div>
                            <div className='cssRightSignHeading'><p>Movie Review</p></div>
                            <div className='cssRightSignHeading'><p>Exercises on IPA (International Phonetic Alphabet)</p></div>
                            <div className='cssRightSignHeading'><p>Exercises based on Reading Comprehension (Extract from IELTS sample papers)</p></div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className='cssRightSignHeading'><p>Professional English</p></div>
                            <div className='cssRightSignHeading'><p>Technical Communication</p></div>
                            <div className='cssRightSignHeading'><p>Group Discussion</p></div>
                            <div className='cssRightSignHeading'><p>Role Play Activity</p></div>
                            <div className='cssRightSignHeading'><p>Public Speaking</p></div>
                            <div className='cssRightSignHeading'><p>Debate</p></div>
                            <div className='cssRightSignHeading'><p>Exercises based on writing skills(Thematic presentation/ picture based writing)</p></div>
                        </div>
                       </div>
                       <div className="row mt-3">
                        <div className="col-lg-6">
                            <Image src="/images/macetimages/languagelab/language-lab-1.webp" height={400} width={600} className='w-100 h-auto rounded'/>
                        </div>
                         <div className="col-lg-6 pt-3 pt-lg-0">
                            <Image src="/images/macetimages/languagelab/language-lab-2.webp" height={400} width={600} className='w-100 h-auto rounded'/>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LanguageLab
