import React from 'react'
import styles from '@/app/(main)/(pages)/page.module.css'
import OwlSlider from '../OwlSlider';

const placedStudentlist = [
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imageb7b87b661bbc43878683b6c5b9f11cder293rnvol7dl4k7zquoj.jpg",
    "name": "Md. Mobashshir Hannan",
    "session": "2024",
    "companyname": "Rinex Technologies Pvt Ltd"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagef5a8046c9d884cd59f7948b7ca5e8faca0sde4r7vu5sfh5l28dcko.jpg",
    "name": "Md. Aquib Raza",
    "session": "2024",
    "companyname": "TEACHNOOK"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagee7cd28c8e6bc4846a3ec9f1c25377e665gnc9jr9g8h201xa6jajdx.jpg",
    "name": "Firdaus Akhtar",
    "session": "2024",
    "companyname": "TEACHNOOK"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagec8c2fe1d90104e709afe5d76951b7d9ci567vklnbjjijkf2u5f6be.jpg",
    "name": "Rifat Parween",
    "session": "2024",
    "companyname": "TEACHNOOK"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagef2894f3bf07a4ee4b7f1b51ae8e0a2ddg7g5a6xsslidd7a45jl3kg.jpg",
    "name": "Md. Saif Ali",
    "session": "2024",
    "companyname": "TEACHNOOK"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image0f785793ec1f498b8f0953bcca98bf3c63tddux7euc51f9dxl3o3t.jpg",
    "name": "Nisarul Haque",
    "session": "2024",
    "companyname": "Rinex Technologies Pvt Ltd."
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image3bf3d82bc5fe441cbd231095b47efd5eo3ijm4bjba1lgozz2a0f.jpg",
    "name": "Tasneem Akhtar",
    "session": "2023",
    "companyname": "Digital Vihaan Edtech pvt. Ltd"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagea428fec04e754132ac784b0f3208b74alj2k7980o2dc2j6kp0t62g.jpg",
    "name": "Rahil Rahman",
    "session": "2023",
    "companyname": "Focus Edumatics"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image923c1b836e19452da03cee1a24a58749u9vhwhhrkodjqf30qx7q6n.jpg",
    "name": "Nusrat Saba",
    "session": "2023",
    "companyname": "Digital Vihaan Edtech pvt. Ltd"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image25ec58ac44584c77ba80528fbc15b559jtrd069r42elt2i5dyldse.jpg",
    "name": "Om Kumar",
    "session": "2023",
    "companyname": "Corizo Edutech"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imageec23187d28424020b725eff4e9f5d51f21a7w0brwjlp46w9cph2jh.jpg",
    "name": "Samam Azam",
    "session": "2023",
    "companyname": "Teachnook"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagebceec8a27a294984a58af89daf549fafjhqieiqzbpsnwkigoqsb48.jpg",
    "name": "Wasim Konain",
    "session": "2023",
    "companyname": "Focus Edumatics"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image3a185ca205f448d5aa4cc3b5c7464281hkcugkdhwj3149r72juee.jpg",
    "name": "Aiman Firdaus",
    "session": "2023",
    "companyname": "HCL(V-Dart)"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image125b631b78ce42fb9ac9ae4182abce3fuvvzj1r0krn111iklvy2eo.jpg",
    "name": "Adnan Hassan",
    "session": "2023",
    "companyname": "Teachnook"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Imagea190166bf06c48ea8abed0f0bd252d9eecuf0ay3mmhzfjuditbei.jpg",
    "name": "Anjali Kumari",
    "session": "2023",
    "companyname": "Corizo Edutech"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image1a4f85781c61467dba7d16c31ccded09l0gex9l1gbc4ftdzia4a7.jpg",
    "name": "Zoya Ashraf",
    "session": "2022",
    "companyname": "Corizo Edutech"
  },
  {
    "image": "https://cdn.academist.app/Cloud/cdnclg/58/Website/Notice/Image5855f3abb7004a5a91b691562531b94a3jcgxeamb7f5bll54x5aqn.jpg",
    "name": "Aliya Amjad",
    "session": "2025",
    "companyname": "Academor Edutech."
  }
]


const PlacedStudent = () => {
  return (
    <div className="Css-space" style={{backgroundColor: "#ededed"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cssUnderlineHeading justify-content-center">
              <h2 className="cssHeadingUnderlineText">
                From Campus To Corporate
              </h2>
            </div>
          </div>
        </div>
           <div className="row gap-4">
             <OwlSlider
                items= {placedStudentlist.map((student, idx) => (
                <div style={{paddingTop:"50px" }} className='pe-lg-2' key={idx}>
                    <div className={styles.fcItem}>
                    <div className={styles.fcFrontContent}>
                        <div className={styles.fcHeader}>
                        <div className={styles.accImg}>
                            <img
                            src={student.image}
                            alt={student.name}
                            title={student.name}
                            className={styles.fcProfileImg}
                            />
                        </div>
                        </div>
                        <div className={styles.fcContent}>
                        <h4>{student.name}</h4>
                        <p>Session {student.session}</p>
                        <p style={{ fontWeight: "600" }}>{student.companyname}</p>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            itemsPerView={{
              0: 1, 
              576: 2,
              768: 3,   
              992: 4,
            }}
            autoplay={true}
            autoplayInterval={4000}
            nav={false}
          />

          </div>
      </div>
    </div>
  );
}

export default PlacedStudent
