"use client"
import React from 'react'
import Link from "next/link";
import "./Header.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="Css-header-shadow-bottom Css-header-bg-logo">
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
        <div className="Css-nav-container-new">
            <nav className="Css-nav-new">
                <ul className="parent-nav">
                    <li><Link className="nav-link ps-0" href="/"><MdOutlineKeyboardArrowDown /></Link></li>  
                    <li className="has-dropdown">
                        <Link className="nav-link" href="#">About</Link>
                        <ul className="submenu">
                            <li><Link href="/about-us">About College</Link></li>
                            <li><Link href="/about-millat-education-society">About Millat Education Society</Link></li>
                            <li><Link href="/mission-vision">Vision & Mission</Link></li>
                            <li><Link href="/governing-body-of-macet">The Governing Body of MACET</Link></li>
                            <li><Link href="/college-administration">College Administration</Link></li>
                        </ul>
                    </li>
                    {/* <!-------COURSES-----> */}
                    <li className="has-dropdown mega-dropdown">
                        <Link className="nav-link" href="#">Departments</Link>
                        <ul className="submenu level-1">
                            <li className="has-submenu">
                                <Link href="#">UG (B.Tech) <MdOutlineKeyboardArrowDown /></Link>
                                <ul className="submenu level-2">
                                    <li><Link href="/btech-in-computerscience-and-engineering">Computer Sc. & Engineering</Link></li>
                                    <li><Link href="/btech-in-computerscience-and-engineering-ai-and-ml">Computer Sc. & Engg (AI & ML)</Link></li>
                                    <li><Link href="/btech-in-computerscience-and-engineering-datascience">Computer Sc. & Engg (Data Science)</Link></li>
                                    <li><Link href="/btech-in-civil-engineering">Civil Engineering</Link></li>
                                    <li><Link href="/btech-in-mechanical-engineering">Mechanical Engineering</Link></li>
                                    <li><Link href="/btech-in-electrical-and-electronics-engineering">Electrical and Electronics Engineering</Link></li>
                                    <li><Link href="/humanities-and-sciences">Humanities and Sciences</Link></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <Link href="#">Diploma <MdOutlineKeyboardArrowDown /></Link>
                                <ul className="submenu level-2">
                                    <li><Link href="/diploma-in-computerscience-and-engineering">Computer Science & Engineering</Link></li>
                                    <li><Link href="/diploma-in-civil-engineering">Civil Engineering</Link></li>
                                    <li><Link href="/diploma-in-electrical-engineering">Electrical Engineering</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="has-dropdown">
                        <Link className="nav-link" href="#">Facilities</Link>
                        <ul className="submenu">
                            <li><Link href="/central-library" target="_blank">Central Library</Link></li>
                            <li><Link href="/sports">Sports</Link></li>
                            <li><Link href="/transport">Transport</Link></li>
                            <li><Link href="/laboratories">Laboratories</Link></li>
                            <li><Link href="/canteen">Canteen</Link></li>
                            <li><Link href="/scholarship">Scholarship</Link></li>
                            <li><Link href="/language-lab">Language Lab</Link></li>
                            <li><Link href="/mentoring-system">Mentoring System</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="custom-dropdown has-dropdown">
                    <Link href="#" className="custom-link nav-link Css-academicsheader">Academics</Link>
                    <ul className="custom-submenu level-1">
                        <li className="custom-submenu-item">
                        <Link href="#" className="custom-link">
                            Admission <span className="arrow"> classNameName<MdOutlineKeyboardArrowDown /></span>
                        </Link>
                        <ul className="custom-submenu level-2">
                            <li className="custom-submenu-item">
                            <Link href="#" className="custom-link"> B.Tech <span className="arrow">classNameName<MdOutlineKeyboardArrowDown /></span></Link>
                            <ul className="custom-submenu level-3">
                                <li><Link href="/admission" className="custom-link">About Admission</Link></li>
                                <li><Link href="/eligibility" className="custom-link">Eligibility</Link></li>
                                <li><Link href="/total-seats" className="custom-link">Seats Overview</Link></li>
                                <li><Link href="/fee-structure" className="custom-link">Fee Structure</Link></li>
                                <li><Link href="/required-document-admission" className="custom-link">Documents Required</Link></li>
                            </ul>
                            </li>
                            <li className="custom-submenu-item">
                            <Link href="#" className="custom-link">Diploma <span className="arrow">classNameName<MdOutlineKeyboardArrowDown /></span></Link>
                            <ul className="custom-submenu level-3">
                                <li><Link href="/diploma-admission" className="custom-link">About Admission</Link></li>
                                <li><Link href="/diploma-eligibility" className="custom-link">Eligibility</Link></li>
                                <li><Link href="/total-diploma-seats" className="custom-link">Seats Overview</Link></li>
                                <li><Link href="/diploma-fee-structure" className="custom-link">Fee Structure</Link></li>
                                <li><Link href="/required-document-diploma-admission" className="custom-link">Documents Required</Link></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="custom-submenu-item">
                        <Link href="#" className="custom-link">Training & Placement <span className="arrow">classNameName<MdOutlineKeyboardArrowDown /></span></Link>
                        <ul className="custom-submenu level-2">
                            <li><Link href="/placement-cell" className="custom-link">Placement Cell</Link></li>
                            <li><Link href="/finishing-school" className="custom-link">Finishing School</Link></li>
                            <li><Link href="/activities" className="custom-link">Activities</Link></li>
                            <li><Link href="/placements" className="custom-link">Placed Students</Link></li>
                            <li><Link href="/notable-alumni" className="custom-link">Notable Alumni</Link></li>
                            <li><Link href="/placement-gallery" className="custom-link">Gallery</Link></li>
                        </ul>
                        </li>
                       <li className="custom-submenu-item">
                        <Link href="#" className="custom-link"> Internship <span className="arrow">classNameName<MdOutlineKeyboardArrowDown /></span></Link>
                        <ul className="custom-submenu level-2">
                            <li><Link href="/internship-program" className="custom-link">Internship Program</Link></li>
                             <li><Link href="/internship-form" className="custom-link">Internship Form</Link></li>
                            <li><Link href="/diploma-internship-form" className="custom-link">Diploma Internship Form</Link></li>             
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="has-dropdown">
                        <Link className="nav-link" href="#">Approved By</Link>
                        <ul className="submenu">
                            <li><Link href="aicte">AICTE</Link></li>
                            <li><Link href="beu">BEU</Link></li>
                            <li><Link href="aku">AKU</Link></li>
                            <li><Link href="sbte">SBTE</Link></li>
                            <li><Link href="approval">APPROVAL</Link></li>
                        </ul>
                    </li>
                     <li className="has-dropdown mega-dropdown">
                        <Link className="nav-link" href="#">News & Events</Link>
                        <ul className="submenu level-1">
                           <li><Link href="/event-gallery">Events Gallery</Link></li>
                            <li><Link href="/media-and-news">Media & News</Link></li>
                            <li className="has-submenu">
                                <Link href="#">MACET E-Newsletter classNameName<MdOutlineKeyboardArrowDown /></Link>
                                <ul className="submenu level-2">
                                    <li><Link href="/e-newsletter-2025">E-Newsletter 2025</Link></li>
                                    <li><Link href="/e-newsletter-2024">E-Newsletter 2024</Link></li>
                                    <li><Link href="/e-newsletter-2023">E-Newsletter 2023</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link className="nav-link Css-nav-item-rightspace me-0" href="iqac">IQAC</Link></li>
                    <li><Link className="nav-link Css-nav-item-rightspace me-0" href="gallery">Gallery</Link></li>
                    <li><Link className="nav-link pe-0 me-0" href="contact-us">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
