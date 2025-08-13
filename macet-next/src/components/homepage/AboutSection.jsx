import React from 'react'
import Image from 'next/image'
import styles from '@/app/(main)/(pages)/page.module.css'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className='Css-space'>
       <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4 d-none d-lg-block">
                <Image src="/images/macetimages/about-img2.webp" height={390} width={435} className={`w-100 rounded ${styles.cssAboutImageLargeScH}`} alt='macet about'/>
            </div>
            <div className="col-12 col-lg-8">
                <div className="about-macet">
                    <div className="cssUnderlineHeading">
                        <h1 className="cssHeadingUnderlineText">Welcome To MACET</h1> 
                    </div>
                    <div className={` mb-3 ${styles.line1}`}>
                        <p className="Css-description">
                            <strong>Maulana Azad College of Engineering and Technology is imparting Diploma and Under Graduate (UG) level Technical Education in Engineering & Technology Program.</strong>  
                        </p>
                    </div>
                    <p className="Css-description">
                        The <strong>“Maulana Azad College of Engineering & Technology″</strong> was started in the year 1987 under the Millat Education Society. This was the first technical self-financed minority institution in the entire northern India.
                    </p>
                    <p className="Css-description">
                        MACET was set up keeping in view the rapid technological growth and changes taking place in the industry. The college has a sprawling campus and state-of-the-art laboratories. The students at MACET have the best of facilities, a conducive environment for studies and a dedicated faculty to guide them and lead them to success.
                    </p>
                </div>
                <div className="btn-group mt-lg-3">
                    <Link href="/about/about-us" className="tmp-btn btn-green">Read More</Link>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default AboutSection
