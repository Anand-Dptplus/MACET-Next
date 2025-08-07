'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from '@/app/(main)/(pages)/page.module.css'; 

const testimonials = [
  {
    avatar: '/images/testimonials/shabina.webp',
    name: "Shabina Malik",
    review: "I am very grateful to the management and staff of MACET for the tierless effort to ensure a bright and prosperous career for us. They has always been with us all the times, when needed. Motivation and skill development along with academics makes a course complete and that is what I got at MACET.",
    stars: 5,
    designation: "CSE-2007 | Flipkart"
  },
  {
      avatar: '/images/testimonials/ritesh.webp',
      name: "Ritesh Kumar Singh",
      review: " As a final-year engineering student, I aspired to get placed into a reputed company like most of my fellow students. My dedicated faculty guided me on  core subjects, and the placement department nurtured my soft skills  essential to crack the interview, thereby ultimately helping me get successfully placed in Reliance.",
      stars: 5,
      designation: "CSE-2012 | Reliance Jio"
  },    
  {
     avatar: '/images/testimonials/ahmad.webp',
      name: "Mohammad Ahmad",
      review: "Studying at Maulana Azad College of Engineering and Technology, has been  wonderful experience. We have knowledgeable faculty members who are very supportive and they guided us in the right direction. A Special thanks to placement department for their continuous support and assistance. Thank you  MACET for making me a better person.",
      stars: 5,
      designation: "ECE-1994 | Microsoft"
  },
  {
     avatar: '/images/testimonials/anil.webp',
     name: "Anil Kumar",
      review: " MACET is the best institution in Bihar. I completed my B.E. in Computer Science Engineering from here. The institution is known for its excellence. It has all the best facilities under one roof – infrastructure, erudite  faculty, professional teachers, well stocked libraries, good computer labs,  sports area, and canteen with all requirements.",
      stars: 5,
      designation: "2003 | Ericsson"
  },
{
    avatar: '/images/testimonials/shabina.webp',
    name: "Shabina Malik",
    review: "I am very grateful to the management and staff of MACET for the tierless effort to ensure a bright and prosperous career for us. They has always been with us all the times, when needed. Motivation and skill development along with academics makes a course complete and that is what I got at MACET.",
    stars: 5,
    designation: "CSE-2007 | Flipkart"
  },
  {
      avatar: '/images/testimonials/ritesh.webp',
      name: "Ritesh Kumar Singh",
      review: " As a final-year engineering student, I aspired to get placed into a reputed company like most of my fellow students. My dedicated faculty guided me on  core subjects, and the placement department nurtured my soft skills  essential to crack the interview, thereby ultimately helping me get successfully placed in Reliance.",
      stars: 5,
      designation: "CSE-2012 | Reliance Jio"
  },    
  {
     avatar: '/images/testimonials/ahmad.webp',
      name: "Mohammad Ahmad",
      review: "Studying at Maulana Azad College of Engineering and Technology, has been  wonderful experience. We have knowledgeable faculty members who are very supportive and they guided us in the right direction. A Special thanks to placement department for their continuous support and assistance. Thank you  MACET for making me a better person.",
      stars: 5,
      designation: "ECE-1994 | Microsoft"
  },
  {
     avatar: '/images/testimonials/anil.webp',
     name: "Anil Kumar",
      review: " MACET is the best institution in Bihar. I completed my B.E. in Computer Science Engineering from here. The institution is known for its excellence. It has all the best facilities under one roof – infrastructure, erudite  faculty, professional teachers, well stocked libraries, good computer labs,  sports area, and canteen with all requirements.",
      stars: 5,
      designation: "2003 | Ericsson"
  },
];

export default function TestimonialCarousel() {
  return (
    <div className='Css-space'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <div className="cssUnderlineHeading justify-content-center">
                    <h2 className="cssHeadingUnderlineText">
                       Words That Matter
                    </h2>
                   </div>
                </div>
                <div className="col-12">
                        <div className={`${styles.mainTestimonialContainer}`}>
                            <Swiper
                                loop
                                grabCursor
                                centeredSlides
                                slidesPerView={2.3}
                                spaceBetween={30}
                                effect="coverflow"
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 250,
                                modifier: 2.5,
                                slideShadows: false,
                                }}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 1.5 },
                                1024: { slidesPerView: 2.3 },
                                }}
                                className={styles.swiperContainer}
                            >
                                {testimonials.map((t, idx) => (
                                <SwiperSlide key={idx} className={styles.swiperSlide}>
                                    <div className={styles.ImgHolder}>
                                    <img src={t.avatar} alt={t.name} />
                                    </div>  
                                    <div className={styles.ContentHolder}>
                                    <h3>{t.name}</h3>   
                                    <p className={styles.designation}>{t.designation}</p>
                                    <div className={styles.stars}>
                                        {'★'.repeat(t.stars)}
                                    </div>
                                    <p className={styles.reviewtext}>{t.review}</p>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                       </div>
                </div>
            </div>
        </div>
    </div>
  );
}
