import React from 'react'
import OwlSlider from '../OwlSlider'

const recrutersimages = [
  { src: '/images/recruters/hcl.png', alt: 'hcl', title: 'hcl' },
  { src: '/images/recruters/infosys.png', alt: 'infosys', title: 'infosys' },
  { src: '/images/recruters/lti.png', alt: 'lti', title: 'lti' },
  { src: '/images/recruters/oracle.png', alt: 'oracle', title: 'oracle' },
  { src: '/images/recruters/siemens.png', alt: 'siemens', title: 'siemens' }, 
  { src: '/images/recruters/tcs.png', alt: 'tcs', title: 'tcs' }, 
  { src: '/images/recruters/hcl.png', alt: 'hcl', title: 'hcl' },
  { src: '/images/recruters/infosys.png', alt: 'infosys', title: 'infosys' },
  { src: '/images/recruters/lti.png', alt: 'lti', title: 'lti' },
  { src: '/images/recruters/oracle.png', alt: 'oracle', title: 'oracle' },
  { src: '/images/recruters/siemens.png', alt: 'siemens', title: 'siemens' }, 
  { src: '/images/recruters/tcs.png', alt: 'tcs', title: 'tcs' },         
] 
const Recruters = () => {
  return (
    <div className='Css-space'>
       <div className="container">
        <div className="row">
            <div className="col-12">
                 <div className="cssUnderlineHeading justify-content-center">
                     <h2 className="cssHeadingUnderlineText">Our Esteemed Recruiters</h2> 
                 </div>
            </div>
        </div>
         <OwlSlider
            items={recrutersimages.map((faci, idx) => (
              <div className="p-2" key={idx}>
                 <img loading="lazy" src={faci.src} alt={faci.alt} title={faci.title}/>
              </div>
            ))}
            itemsPerView={{
              0: 2, 
              576: 3,
              768: 4,
              992: 6,
            }}
            autoplay={true}
            autoplayInterval={4000}
            nav={false}
          />
       </div>
    </div>
  )
}

export default Recruters
