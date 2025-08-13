    import React from 'react'
    import { IoLocationSharp,IoCallOutline  } from "react-icons/io5";
    import { IoIosMail } from "react-icons/io";
    import Link from 'next/link';
    import Image from 'next/image';
    import Script from 'next/script';
    
    const Footer = () => {
          const year = new Date().getFullYear();  
      return (
        <footer className=''>
         <div className='Css-fotter-wrapper Css-space'>
               <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-12">
                      <div>
                        <h5 className="Css-footer-heading">Contact</h5>
                        <ul>
                            <h6 className="cssSecondHeadingFooter">Campus :</h6>
                            <li>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=""><IoLocationSharp color='#83acf9'/></div>
                                    <div className=""><Link href="https://maps.app.goo.gl/fd6VhRQpoRjwsy8A6" target='_blank'>Maulana Azad College of Engg. & Technology Gorhna, Neoraganj, Neora, Patna – 801113, Bihar</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=""><IoIosMail color='#83acf9'/></div>
                                    <div className=""><Link href="mailto:contact@macet.ac.in">contact&#64;macet.ac.in</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=""><IoCallOutline color='#83acf9'/></div>
                                    <div className="">
                                        <Link href="tel:+919835405784">+91-9835405784</Link>, &nbsp;
                                        <Link href="tel:+917004874889">+91-7004874889</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <h6 className="cssSecondHeadingFooter">City Office :</h6>
                            <li>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=""><IoLocationSharp color='#83acf9'/></div>
                                    <div className=""><Link href="https://maps.app.goo.gl/QFVaQQSJUotuC8fD6" target='_blank'>Maulana Azad College of Engineering & Technology Marium Manzil, Anisabad, Patna, Bihar - 800002</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=""><IoIosMail color='#83acf9'/></div>
                                    <div className=""><Link href="mailto:contact@macet.ac.in">contact&#64;macet.ac.in</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex gap-2 align-items-start">
                                    <div className=""><IoLocationSharp color='#83acf9'/></div>
                                    <div className="">
                                        <Link href="tel:+916122254569">+91-612-2254569</Link>,&nbsp;
                                        <Link href="tel:+919431049755">+91-9431049755</Link>,<br />
                                        <Link href="tel:+916122250348">+91-612-2250348</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="float-xl-end ps-xl-5">
                            <h5 className="Css-footer-heading">Know Us</h5>
                            <ul>
                                <li><Link href="director-desk">Director desk</Link></li>
                                <li><Link href="president-desk">President desk</Link></li>
                                <li><Link href="contact-us">Contact Us</Link></li>
                                <li><Link href="/assets/images/Approval/Calendar25.pdf" target="_blank">Holidays of MACET</Link></li>
                                <li><Link href="https://macet.ac.in/login/login.aspx" target="_blank">Admin</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="float-xl-end ps-xl-5">
                            <h5 className="Css-footer-heading">Committees & Cell</h5>
                            <ul>
                                <li><Link href="women-cell">Women Cell</Link></li>
                                <li><Link href="anti-ragging-cell">Anti-Ragging Cell</Link></li>
                                <li><Link href="proctor-cell">Proctor Cell</Link></li>
                                <li><Link href="sc-st-cell">SC/ST Cell</Link></li>
                                <li><Link href="internal-complaint-committee">Internal Complaint Cell</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="float-xl-end ps-xl-5">
                            <h5 className="Css-footer-heading">Other links</h5>
                            <ul>
                                <li><Link href="https://www.aicte-india.org/" target="_blank">AICTE</Link></li>
                                <li><Link href="https://akubihar.ac.in/" target="_blank">AKU</Link></li>
                                <li><Link href="http://www.beu-bih.ac.in/" target="_blank">BEU</Link></li>
                                <li><Link href="https://sbte.bihar.gov.in" target="_blank">SBTE</Link></li>
                                <li><Link href="https://nptel.ac.in/" target="_blank">NPTEL</Link></li>
                                <li><Link href="http://www.naac.gov.in/index.php/en/" target="_blank">NAAC</Link></li>
                                <li><Link href="https://macetaan.org/" target="_blank">Alumni</Link></li>
                                <li><Link href="https://www.7nishchay-yuvaupmission.bihar.gov.in/" target="_blank">Student Credit Card</Link></li>
                                <li><Link href="https://scholarships.gov.in/" target="_blank">MOMA Scholarship</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        <div className="copyrightArea">
        <div className="container">
            <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                <p className="copyRightText mb-0"> © {year} &nbsp;  
                <Link href="/" className="macet-link"> MACET</Link>&nbsp; All Rights Reserved. Powered By &nbsp;
                {/* <a href="https://dotplus.in/" target="_blank" rel="noopener noreferrer">
                    <Image src="https://cdn.dotplus.in/cloud/dotplus/logo.png" alt="DotPlus Technologies Pvt. Ltd." title="DotPlus Technologies Pvt. Ltd." width={90} height={22}/>
                </a> */}
                    <span id="poweredBy" data-color="white"></span>
                </p>
                  <Script src="/js/powered.js" strategy="afterInteractive" />

            </div>

            {/* Right Side Links */}
            <div className="col-lg-6 text-center text-lg-end">
                <div className="policy-links">  
                <Link href="/privacypolicy">Privacy Policy</Link>
                <span className="divider">|</span>
                <Link href="/termscondition">Terms & Conditions</Link>
                <span className="divider">|</span>
                <Link href="/refundcancle">Refund Policy</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
        </footer>
      )
    }
    
    export default Footer
    