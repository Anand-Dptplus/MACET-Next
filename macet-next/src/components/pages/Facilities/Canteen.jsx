import React from 'react'
import styles from '@/app/(main)/(pages)/facilities/canteen/page.module.css'
import Image from 'next/image'

const Canteen = () => {
  return (
    <div className='Css-space'>
       <div className='cssBgGreenFirstSection'>
         <div className="container">
            <div className="row">
                <div className={`col-12 col-lg-8 order-lg-1 order-2 ${styles.cssContentText}`}>
                    <p>College canteen is the most integral part of the college which not only serves good hygienic and delicious foods to the student but it is the hub of all types of activities done by students. It is the best place of gossips, political discussions and debates. A student never forgets the life spend at canteen.</p>
                    <p>At MACET, there is a good canteen facility, functioning efficiently since the start of college which provides all types of snacks, meals, tea, coffee and other soft cold drinks at affordable price.</p>
                    <p>The canteen at MACET is not just a place to eat but also a space that fosters bonding and relaxation among students and faculty.</p>
                </div>
                 <div className="col-12 col-lg-4 pb-2 pb-lg-0 order-lg-2 order-1">
                     <Image
                       src="/images/macetimages/canteen/canteen-macet-1.webp"
                       height={229}
                       width={435}
                      className="w-100 h-100 rounded"
                      alt="transport bus macet"
                    />
                 </div>
            </div>
         </div>
       </div>
       <div className='pt-5 mt-lg-3'>
           <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 pb-3 pb-lg-0">    
                     <Image
                       src="/images/macetimages/canteen/canteen-macet-2.webp"
                       height={229}
                       width={435}
                      className="w-100 h-100 rounded"
                      alt="transport bus macet"
                    />
                 </div>
                <div className={`col-12 col-lg-8 ${styles.cssContentText}`}>
                    <p>In addition to serving a variety of food items, the canteen also caters to special occasions and college events, offering customized menus and refreshments. During festivals or college functions, the canteen becomes a lively center of celebration, adding to the vibrant campus life. Its ability to adapt and meet the needs of large gatherings reflects its efficiency and importance within the institution.</p>
                    <p>Moreover, the seating arrangement and ambiance of the canteen are designed to accommodate groups of students comfortably, promoting social interaction and collaborative discussions.</p>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Canteen
