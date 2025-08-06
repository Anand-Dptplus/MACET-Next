"use client"
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { FaBell } from 'react-icons/fa';
import Sidebar from "./Sidebar";

const Header = ({newsItems}) => {
    const latestNewsRef = useRef(null);
    const navRef = useRef(null);
    const mobHeaderRef = useRef(null);  


useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      latestNewsRef.current?.classList.add('is-sticky');
      navRef.current?.classList.add('is-sticky');
      mobHeaderRef.current?.classList.add('is-sticky'); 
    } else {
      latestNewsRef.current?.classList.remove('is-sticky');
      navRef.current?.classList.remove('is-sticky');
      mobHeaderRef.current?.classList.remove('is-sticky');
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <>
        <div ref={latestNewsRef} className="cssBackgroundLatestNews">
            <div className="marginTop">
              <div className="row">
                <div className="col-2 col-md-2 latestNews custom-btn btn-11">
                  <p className="heading">
                    <span className="text-uppercase d-none d-md-block">
                      Latest News
                    </span>
                    <FaBell />
                  </p>
                </div>
                <div className="col-10 col-md-10 newsWrapper">
                  <div className="newsTicker">
                    <div className="newsContent">
                     <marquee behavior="smooth" direction="left">
                      {newsItems?.map((item, index) => (
                        <span key={index} className='text-white'>
                          <a href={item.targetLink} target="_blank" rel="noopener noreferrer">
                            {item.title}
                            &nbsp;
                            <img
                              src="https://res.cloudinary.com/gumlapolytechnic/image/upload/v1544438294/General/new_icon_blink.gif"
                              alt="new"
                              loading="lazy"
                            />
                          </a>
                          {index !== newsItems.length - 1 && <>| &nbsp;&nbsp;</>}
                        </span>
                      ))}
                     </marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <header className="Css-header-shadow-bottom Css-header-bg-logo d-none d-lg-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-around align-items-center Css-space-top-bottom-middle-header">
                  <div>
                    <a href="/">
                      <div className="Css-maulana-azad-text-eng">Maulana Azad College of Engineering & Technology</div>
                      <div className="Css-affiliated-text"> Affiliated to Bihar Engineering University, Govt. of Bihar</div>
                    </a>
                  </div>
                  <div>
                    <a className="logo" href="/">
                      <img src="/images/logo/maulana-azad-main-logo.png" alt="logo" title="logo" className="Css-main-logo-height"/>
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <div className="Css-urdu-maulana-azad-text"> مولانا آزاد کالج آف انجینئرنگ اینڈ ٹیکنالوجی</div>
                      <div className="Css-affiliated-text"> Approved by AICTE, New Delhi, Govt. of India</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={navRef} className='cssHeaderPRelativeBS  d-none d-lg-block'>
            <nav className="Css-headernavbs">
              <ul className="d-flex align-items-center m-0 p-0 cssLIstStyleNavItem">
                <li>
                  <Link href="/">
                    <FaHome color='white' size={18}/>
                  </Link>
                </li>

                {/* About Menu */}
                <li className="nav-item dropdown">
                  <div className="nav-link d-flex align-items-center gap-1 dropdown-toggle-wrapper">
                    <Link href="#" className="nav-link-text">About</Link>
                    <IoIosArrowDown  className="dropdown-icon" size={15}/>
                  </div>
                  <ul className="dropdown-menu">
                    <li><Link href="/about-us" className="dropdown-item">About College</Link></li>
                    <li><Link href="/about-millat-education-society" className="dropdown-item">About Millat Education Society</Link></li>
                    <li><Link href="/mission-vision" className="dropdown-item">Vision & Mission</Link></li>
                    <li><Link href="/governing-body-of-macet" className="dropdown-item">The Governing Body of MACET</Link></li>
                    <li><Link href="/college-administration" className="dropdown-item">College Administration</Link></li>                
                  </ul>
                </li>

                {/* Departments Menu */}
                <li className="nav-item dropdown">
                  <div className="nav-link d-flex align-items-center gap-1 dropdown-toggle-wrapper">
                    <Link href="#" className="nav-link-text">Departments</Link>
                    <IoIosArrowDown  className="dropdown-icon" size={15}/>
                  </div>
                  <ul className="dropdown-menu">

                    {/* UG Submenu */}
                    <li className="dropdown-submenu">
                      <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                        <Link href="#" className="sub-link">UG (B.Tech)</Link>
                        <FaChevronRight size={15}/>
                      </div>  
                      <ul className="dropdown-menu">
                        <li><Link href="/btech-in-computerscience-and-engineering" className="dropdown-item">Computer Sc. & Engineering</Link></li>
                        <li><Link href="/btech-in-computerscience-and-engineering-ai-and-ml" className="dropdown-item">Computer Sc. & Engg (AI & ML)</Link></li>
                        <li><Link href="/btech-in-computerscience-and-engineering-datascience" className="dropdown-item">Computer Sc. & Engg (Data Science)</Link></li>
                        <li><Link href="/btech-in-computerscience-and-engineering" className="dropdown-item">Computer Sc. & Engg</Link></li>
                        <li><Link href="/btech-in-civil-engineering" className="dropdown-item">Civil Engineering</Link></li>
                        <li><Link href="/btech-in-mechanical-engineering" className="dropdown-item">Mechanical Engineering</Link></li>
                        <li><Link href="/btech-in-electrical-and-electronics-engineering" className="dropdown-item">Electrical and Electronics Engineering</Link></li>
                        <li><Link href="/humanities-and-sciences" className="dropdown-item">Humanities and Sciences</Link></li>
                      </ul>
                    </li>

                    {/* Diploma Submenu */}
                    <li className="dropdown-submenu">
                      <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                        <Link href="#" className="sub-link">Diploma</Link>
                        <FaChevronRight size={15}/>
                      </div>
                      <ul className="dropdown-menu">
                          <li><Link href="/diploma-in-computerscience-and-engineering" className="dropdown-item">Computer Science & Engineering</Link></li>
                          <li><Link href="/diploma-in-civil-engineering" className="dropdown-item">Civil Engineering</Link></li>
                          <li><Link href="/diploma-in-electrical-engineering" className="dropdown-item">Electrical Engineering</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

              {/* FACILITIES */}
                <li className="nav-item dropdown">
                  <div className="nav-link d-flex align-items-center gap-1 dropdown-toggle-wrapper">
                    <Link href="#" className="nav-link-text">Facilities</Link>
                    <IoIosArrowDown  className="dropdown-icon" size={15}/>
                  </div>
                  <ul className="dropdown-menu">
                    <li><Link href="/central-library" className="dropdown-item">Central Library</Link></li>
                    <li><Link href="/sports" className="dropdown-item">Sports</Link></li>
                    <li><Link href="/transport" className="dropdown-item">Transport</Link></li>
                    <li><Link href="/laboratories" className="dropdown-item">Laboratories</Link></li>
                    <li><Link href="/canteen" className="dropdown-item">Canteen</Link></li>  
                    <li><Link href="/scholarship" className="dropdown-item">Scholarship</Link></li>   
                    <li><Link href="/language-lab" className="dropdown-item">Language Lab</Link></li>   
                    <li><Link href="/mentoring-system" className="dropdown-item">Mentoring System</Link></li>               
                  </ul>
                </li>

              {/* Academics */}
                <li className="nav-item dropdown">
                  <div className="nav-link d-flex align-items-center gap-1 dropdown-toggle-wrapper">
                    <Link href="#" className="nav-link-text">Academics</Link>
                    <IoIosArrowDown  className="dropdown-icon" size={15}/>
                  </div>
                  <ul className="dropdown-menu">

                    {/* Admission */}
                    <li className="dropdown-submenu">
                      <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                        <Link href="#" className="sub-link">Admission</Link>
                        <FaChevronRight size={15}/>
                      </div>  
                      <ul className="dropdown-menu">
                        <li className='dropdown-submenu'>
                          <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                            <Link href="#" className="sub-link">B.Tech</Link>
                            <FaChevronRight size={15}/>
                          </div>  
                          <ul className="dropdown-menu">
                          <li><Link href="/admission" className="dropdown-item">About Admission</Link></li>
                          <li><Link href="/eligibility" className="dropdown-item">Eligibility</Link></li>
                          <li><Link href="/total-seats" className="dropdown-item">Seats Overview</Link></li>
                          <li><Link href="/fee-structure" className="dropdown-item">Fee Structure</Link></li>
                          <li><Link href="/required-document-admission" className="dropdown-item">Documents Required</Link></li>
                      </ul>
                        </li>
                        <li className='dropdown-submenu'>
                          <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                            <Link href="#" className="sub-link">Diploma</Link>
                            <FaChevronRight size={15}/>
                          </div>  
                          <ul className="dropdown-menu">
                          <li><Link href="/placement-cell" className="dropdown-item">About Admission</Link></li>
                          <li><Link href="/finishing-school" className="dropdown-item">Eligibility</Link></li>
                          <li><Link href="/activities" className="dropdown-item">Seats Overview</Link></li>
                          <li><Link href="/placements" className="dropdown-item">Fee Structur</Link></li>
                          <li><Link href="/notable-alumni" className="dropdown-item">Documents Required</Link></li>
                      </ul>
                        </li>
                      </ul>
                    </li>

                    {/* Training & Placement */}
                    <li className="dropdown-submenu">
                      <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                        <Link href="#" className="sub-link">Training & Placement</Link>
                        <FaChevronRight size={15}/>
                      </div>
                      <ul className="dropdown-menu">
                          <li><Link href="/placement-cell" className="dropdown-item">Placement Cell</Link></li>
                          <li><Link href="/finishing-school" className="dropdown-item">Finishing School</Link></li>
                          <li><Link href="/activities" className="dropdown-item">Activities</Link></li>
                          <li><Link href="/placements" className="dropdown-item">Placed Students</Link></li>
                          <li><Link href="/notable-alumni" className="dropdown-item">Notable Alumni</Link></li>
                          <li><Link href="/placement-gallery" className="dropdown-item">Gallery</Link></li>
                      </ul>
                    </li>

                    {/* Internship */}
                    <li className="dropdown-submenu">
                      <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                        <Link href="#" className="sub-link">Internship</Link>
                        <FaChevronRight size={15}/>
                      </div>
                      <ul className="dropdown-menu">
                          <li><Link href="/internship-program" className="dropdown-item">Internship Program</Link></li>
                          <li><Link href="/internship-form" className="dropdown-item">Internship Form</Link></li>
                          <li><Link href="/diploma-internship-form" className="dropdown-item">Diploma Internship Form</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              {/* Approved By*/}
                <li className="nav-item dropdown">
                  <div className="nav-link d-flex align-items-center gap-1 dropdown-toggle-wrapper">
                    <Link href="#" className="nav-link-text">Approved By</Link>
                    <IoIosArrowDown  className="dropdown-icon" size={15}/>
                  </div>
                  <ul className="dropdown-menu">
                    <li><Link href="/aicte" className="dropdown-item">AICTE</Link></li>
                    <li><Link href="/beu" className="dropdown-item">BEU</Link></li>
                    <li><Link href="/aku" className="dropdown-item">AKU</Link></li>
                    <li><Link href="/sbte" className="dropdown-item">SBTE</Link></li>
                    <li><Link href="/approval" className="dropdown-item">Approval</Link></li>         
                  </ul>
                </li>

                {/* News & Events */}
                <li className="nav-item dropdown">
                  <div className="nav-link d-flex align-items-center gap-1 dropdown-toggle-wrapper">
                    <Link href="#" className="nav-link-text">News & Events</Link>
                    <IoIosArrowDown  className="dropdown-icon" size={15}/>
                  </div>
                  <ul className="dropdown-menu">
                    <li><Link href="/event-gallery" className="dropdown-item">Events Gallery</Link></li>
                    <li><Link href="/media-and-news" className="dropdown-item">Media & News</Link></li>
                    {/* Newsletter */}
                    <li className="dropdown-submenu">
                      <div className="dropdown-item cssHoverMultipleMenu d-flex align-items-center justify-content-between submenu-toggle-wrapper">
                        <Link href="#" className="sub-link">MACET E-Newsletter</Link>
                        <FaChevronRight size={15}/>
                      </div>
                      <ul className="dropdown-menu">
                          <li><Link href="/e-newsletter-2025" className="dropdown-item">E-Newsletter 2025</Link></li>
                          <li><Link href="/e-newsletter-2024" className="dropdown-item">E-Newsletter 2024</Link></li>
                          <li><Link href="/e-newsletter-2023" className="dropdown-item">E-Newsletter 2023</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li><Link href="/iqac" className='text-white'>IQAC</Link></li>
                <li><Link href="/gallery" className='text-white'>Gallery</Link></li>
                <li><Link href="/contact-us" className='text-white'>Contact Us</Link></li>
              </ul>
            </nav>
          </div>       
        </header>
        {/* Mobile Header */}
        <div ref={mobHeaderRef} className="container-fluid Css-mob-header-shadow d-block d-lg-none">
           <div className="row">
            <div className="col-12">
              <div className="Css-mobile-header">
                 <div className="Css-space-mob-header-menu">
                    <Link href="/" className="d-flex">
                      <img src="/images/logo/maulana-azad-main-logo.png" alt="logo" title="logo"/>
                      <div>
                         <div className="Css-maulana-azad-text-eng">Maulana Azad College of Engineering & Technology</div>
                         <div className="Css-affiliated-text">Affiliated to Bihar Engineering University, Govt. of Bihar <br /> Approved by AICTE, New Delhi, Govt. of India</div>
                     </div>
                    </Link>                
                 </div>
                  <div>
                     <Sidebar />
                  </div>
              </div>
            </div>
           </div>
        </div>
    </>
  );
};

export default Header;
