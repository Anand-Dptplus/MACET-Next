'use client';

import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaPlus, FaMinus, FaHome } from 'react-icons/fa';
import './Sidebar.css'

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSidebar = () => setSidebarOpen(o => !o);
  const closeSidebar = () => setSidebarOpen(false);

  const toggleMenu = (key) => {
    setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const renderToggleIcon = (key) => openMenus[key] ? <FaMinus size={14} color="#545353"/> : <FaPlus size={14} color="#545353"/>;

  return (
    <>
      {/* Hamburger button */}
      <button
        aria-label="Open menu"
        className="hamburger-btn"
        onClick={toggleSidebar}
      >
       <div>
          <RiMenu3Line size={28} />
       </div>
      </button>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={closeSidebar} />}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
            <div>
                 <Link href="/" className="d-flex">
                      <img src="/images/logo/maulana-azad-main-logo.png" alt="logo" title="logo"/>
                      <div>
                         <div className="Css-maulana-azad-text-eng-sidebar">Maulana Azad College of Engineering & Technology</div>
                         <div className="Css-affiliated-text-sidebar">Affiliated to Bihar Engineering University, Govt. of Bihar <br /> Approved by AICTE, New Delhi, Govt. of India</div>
                     </div>
                </Link>     
            </div>
          {/* <button onClick={closeSidebar} aria-label="Close menu" className="close-btn">
            <AiOutlineCloseCircle  size={28} />
          </button> */}
        </div>

        <nav className="css-padding-leftnavitem">
          <ul className="sidebar-menu ps-0">
            <li>
              <Link href="/" onClick={closeSidebar} className="sidebar-link"> Home</Link>
            </li>

            {/* About Menu */}
            <li>
              <div className="menu-toggle" onClick={() => toggleMenu('about')}>
                <span>About</span>
                <span>{renderToggleIcon('about')}</span>
              </div>
              <ul className={`submenu ${openMenus['about'] ? 'open' : ''}`}>
                <li><Link href="/about-us" onClick={closeSidebar} className="sidebar-link">About College</Link></li>
                <li><Link href="/about-millat-education-society" onClick={closeSidebar} className="sidebar-link">About Millat Education Society</Link></li>
                <li><Link href="/mission-vision" onClick={closeSidebar} className="sidebar-link">Vision & Mission</Link></li>
                <li><Link href="/governing-body" onClick={closeSidebar} className="sidebar-link">The Governing Body of MACET</Link></li>
                <li><Link href="/college-administration" onClick={closeSidebar} className="sidebar-link">College Administration</Link></li>
              </ul>
            </li>

            {/* Departments */}
            <li>
              <div className="menu-toggle" onClick={() => toggleMenu('departments')}>
                <span>Departments</span>
                <span>{renderToggleIcon('departments')}</span>
              </div>
              <ul className={`submenu ${openMenus['departments'] ? 'open' : ''}`}>
                <li>
                  <div className="menu-toggle" onClick={() => toggleMenu('departments-ug')}>
                    <span>UG (B.Tech)</span>
                    <span>{renderToggleIcon('departments-ug')}</span>
                  </div>
                  <ul className={`submenu nested ${openMenus['departments-ug'] ? 'open' : ''}`}>
                    <li><Link href="/btech-in-computerscience-and-engineering" onClick={closeSidebar} className="sidebar-link">Computer Sc. & Engineering</Link></li>
                    <li><Link href="/btech-in-computerscience-and-engineering-ai-and-ml" onClick={closeSidebar} className="sidebar-link">Computer Sc. & Engg (AI & ML)</Link></li>
                    <li><Link href="/btech-in-computerscience-and-engineering-datascience" onClick={closeSidebar} className="sidebar-link">Computer Sc. & Engg (Data Science)</Link></li>
                    <li><Link href="/btech-in-computerscience-and-engineering" onClick={closeSidebar} className="sidebar-link">Computer Sc. & Engg</Link></li>
                    <li><Link href="/btech-in-civil-engineering" onClick={closeSidebar} className="sidebar-link">Civil Engineering</Link></li>
                    <li><Link href="/btech-in-mechanical-engineering" onClick={closeSidebar} className="sidebar-link">Mechanical Engineering</Link></li>
                    <li><Link href="/btech-in-electrical-and-electronics-engineering" onClick={closeSidebar} className="sidebar-link">Electrical and Electronics Engineering</Link></li>
                    <li><Link href="/humanities-and-sciences" onClick={closeSidebar} className="sidebar-link">Humanities and Sciences</Link></li>
                  </ul>
                </li>

                <li>
                  <div className="menu-toggle" onClick={() => toggleMenu('departments-diploma')}>
                    <span>Diploma</span>
                    <span>{renderToggleIcon('departments-diploma')}</span>
                  </div>
                  <ul className={`submenu nested ${openMenus['departments-diploma'] ? 'open' : ''}`}>
                    <li><Link href="/diploma-in-computerscience-and-engineering" onClick={closeSidebar} className="sidebar-link">Computer Science & Engineering</Link></li>
                    <li><Link href="/diploma-in-civil-engineering" onClick={closeSidebar} className="sidebar-link">Civil Engineering</Link></li>
                    <li><Link href="/diploma-in-electrical-engineering" onClick={closeSidebar} className="sidebar-link">Electrical Engineering</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Facilities */}
            <li>
              <div className="menu-toggle" onClick={() => toggleMenu('facilities')}>
                <span>Facilities</span>
                <span>{renderToggleIcon('facilities')}</span>
              </div>
              <ul className={`submenu ${openMenus['facilities'] ? 'open' : ''}`}>
                <li><Link href="/central-library" onClick={closeSidebar} className="sidebar-link">Central Library</Link></li>
                <li><Link href="/sports" onClick={closeSidebar} className="sidebar-link">Sports</Link></li>
                <li><Link href="/transport" onClick={closeSidebar} className="sidebar-link">Transport</Link></li>
                <li><Link href="/laboratories" onClick={closeSidebar} className="sidebar-link">Laboratories</Link></li>
                <li><Link href="/canteen" onClick={closeSidebar} className="sidebar-link">Canteen</Link></li>
                <li><Link href="/scholarship" onClick={closeSidebar} className="sidebar-link">Scholarship</Link></li>
                <li><Link href="/language-lab" onClick={closeSidebar} className="sidebar-link">Language Lab</Link></li>
                <li><Link href="/mentoring-system" onClick={closeSidebar} className="sidebar-link">Mentoring System</Link></li>
              </ul>
            </li>

            {/* Academics */}
            <li>
              <div className="menu-toggle" onClick={() => toggleMenu('academics')}>
                <span>Academics</span>
                <span>{renderToggleIcon('academics')}</span>
              </div>
              <ul className={`submenu ${openMenus['academics'] ? 'open' : ''}`}>
                {/* Admission */}
                <li>
                  <div className="menu-toggle" onClick={() => toggleMenu('academics-admission')}>
                    <span>Admission</span>
                    <span>{renderToggleIcon('academics-admission')}</span>
                  </div>
                  <ul className={`submenu nested ${openMenus['academics-admission'] ? 'open' : ''}`}>
                    <li>
                      <div className="menu-toggle" onClick={() => toggleMenu('admission-btech')}>
                        <span>B.Tech</span>
                        <span>{renderToggleIcon('admission-btech')}</span>
                      </div>
                      <ul className={`submenu nested ${openMenus['admission-btech'] ? 'open' : ''}`}>
                        <li><Link href="/admission" onClick={closeSidebar} className="sidebar-link">About Admission</Link></li>
                        <li><Link href="/eligibility" onClick={closeSidebar} className="sidebar-link">Eligibility</Link></li>
                        <li><Link href="/total-seats" onClick={closeSidebar} className="sidebar-link">Seats Overview</Link></li>
                        <li><Link href="/fee-structure" onClick={closeSidebar}>Fee Structure</Link></li>
                        <li><Link href="/required-document-admission" onClick={closeSidebar} className="sidebar-link">Documents Required</Link></li>
                      </ul>
                    </li>
                    <li>
                      <div className="menu-toggle" onClick={() => toggleMenu('admission-diploma')}>
                        <span>Diploma</span>
                        <span>{renderToggleIcon('admission-diploma')}</span>
                      </div>
                      <ul className={`submenu nested ${openMenus['admission-diploma'] ? 'open' : ''}`}>
                        <li><Link href="/placement-cell" onClick={closeSidebar} className="sidebar-link">About Admission</Link></li>
                        <li><Link href="/finishing-school" onClick={closeSidebar} className="sidebar-link">Eligibility</Link></li>
                        <li><Link href="/activities" onClick={closeSidebar} className="sidebar-link">Seats Overview</Link></li>
                        <li><Link href="/placements" onClick={closeSidebar} className="sidebar-link">Fee Structure</Link></li>
                        <li><Link href="/notable-alumni" onClick={closeSidebar} className="sidebar-link">Documents Required</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Training & Placement */}
                <li>
                  <div className="menu-toggle" onClick={() => toggleMenu('academics-training')}>
                    <span>Training & Placement</span>
                    <span>{renderToggleIcon('academics-training')}</span>
                  </div>
                  <ul className={`submenu nested ${openMenus['academics-training'] ? 'open' : ''}`}>
                    <li><Link href="/placement-cell" onClick={closeSidebar} className="sidebar-link">Placement Cell</Link></li>
                    <li><Link href="/finishing-school" onClick={closeSidebar} className="sidebar-link">Finishing School</Link></li>
                    <li><Link href="/activities" onClick={closeSidebar} className="sidebar-link">Activities</Link></li>
                    <li><Link href="/placements" onClick={closeSidebar} className="sidebar-link">Placed Students</Link></li>
                    <li><Link href="/notable-alumni" onClick={closeSidebar} className="sidebar-link">Notable Alumni</Link></li>
                    <li><Link href="/placement-gallery" onClick={closeSidebar} className="sidebar-link">Gallery</Link></li>
                  </ul>
                </li>

                {/* Internship */}
                <li>
                  <div className="menu-toggle" onClick={() => toggleMenu('academics-internship')}>
                    <span>Internship</span>
                    <span>{renderToggleIcon('academics-internship')}</span>
                  </div>
                  <ul className={`submenu nested ${openMenus['academics-internship'] ? 'open' : ''}`}>
                    <li><Link href="/internship-program" onClick={closeSidebar} className="sidebar-link">Internship Program</Link></li>
                    <li><Link href="/internship-form" onClick={closeSidebar} className="sidebar-link">Internship Form</Link></li>
                    <li><Link href="/diploma-internship-form" onClick={closeSidebar} className="sidebar-link">Diploma Internship Form</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Approved By */}
            <li>
              <div className="menu-toggle" onClick={() => toggleMenu('approved')}>
                <span>Approved By</span>
                <span>{renderToggleIcon('approved')}</span>
              </div>
              <ul className={`submenu ${openMenus['approved'] ? 'open' : ''}`}>
                <li><Link href="/aicte" onClick={closeSidebar} className="sidebar-link">AICTE</Link></li>
                <li><Link href="/beu" onClick={closeSidebar} className="sidebar-link">BEU</Link></li>
                <li><Link href="/aku" onClick={closeSidebar} className="sidebar-link">AKU</Link></li>
                <li><Link href="/sbte" onClick={closeSidebar} className="sidebar-link">SBTE</Link></li>
                <li><Link href="/approval" onClick={closeSidebar} className="sidebar-link">Approval</Link></li>
              </ul>
            </li>

            {/* News & Events */}
            <li>
              <div className="menu-toggle" onClick={() => toggleMenu('news')}>
                <span>News & Events</span>
                <span>{renderToggleIcon('news')}</span>
              </div>
              <ul className={`submenu ${openMenus['news'] ? 'open' : ''}`}>
                <li><Link href="/event-gallery" onClick={closeSidebar} className="sidebar-link">Events Gallery</Link></li>
                <li><Link href="/media-and-news" onClick={closeSidebar} className="sidebar-link">Media & News</Link></li>

                {/* Newsletter */}
                <li>
                  <div className="menu-toggle" onClick={() => toggleMenu('news-newsletter')}>
                    <span>MACET E-Newsletter</span>
                    <span>{renderToggleIcon('news-newsletter')}</span>
                  </div>
                  <ul className={`submenu nested ${openMenus['news-newsletter'] ? 'open' : ''}`}>
                    <li><Link href="/e-newsletter-2025" onClick={closeSidebar} className="sidebar-link">E-Newsletter 2025</Link></li>
                    <li><Link href="/e-newsletter-2024" onClick={closeSidebar} className="sidebar-link">E-Newsletter 2024</Link></li>
                    <li><Link href="/e-newsletter-2023" onClick={closeSidebar} className="sidebar-link">E-Newsletter 2023</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Bottom simple items */}
            <li>
              <Link href="/iqac" onClick={closeSidebar} className="sidebar-link">IQAC</Link>
            </li>
            <li>
              <Link href="/gallery" onClick={closeSidebar} className="sidebar-link">Gallery</Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={closeSidebar} className="sidebar-link">Contact Us</Link>
            </li>
              <li className="Css-enquiry-button">
                <Link href="/enquiry" onClick={closeSidebar} className=" Css-enquiry-btn-mob-sidebar ms-0">Enquiry Now</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
