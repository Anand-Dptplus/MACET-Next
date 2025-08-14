"use client"
import React, {useState} from "react";
import styles from "@/app/(main)/(pages)/facilities/transport/page.module.css";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaEye } from "react-icons/fa";

    const images = [
  { path: "/images/macetimages/facilities/mca_lab.webp", caption: "Mca Lab", category: "Mca Lab" },
  { path: "/images/macetimages/facilities/central_lab.webp", caption: "Central Lab", category: "Central Lab" },
  { path: "/images/macetimages/facilities/computer_lab1.webp", caption: "Computer Lab", category: "Computer Lab" },
  { path: "/images/macetimages/facilities/computer_lab2.webp", caption: "Computer Lab", category: "Computer Lab" },
  { path: "/images/macetimages/facilities/computer_lab3.webp", caption: "Computer Lab", category: "Computer Lab" },
  { path: "/images/macetimages/facilities/computer_lab4.webp", caption: "Computer Lab", category: "Computer Lab" },
  { path: "/images/macetimages/facilities/civil_lab.webp", caption: "Civil Lab", category: "Civil Lab" },
  { path: "/images/macetimages/facilities/ece_lab1.webp", caption: "ECE Lab", category: "ECE Lab" },
  { path: "/images/macetimages/facilities/ece_lab2.webp", caption: "ECE Lab", category: "ECE Lab" },
  { path: "/images/macetimages/facilities/ece_lab3.webp", caption: "ECE Lab", category: "ECE Lab" },
  { path: "/images/macetimages/facilities/eee_lab2.webp", caption: "EEE Lab", category: "EEE Lab" },
  { path: "/images/macetimages/facilities/eee_lab3.webp", caption: "EEE Lab", category: "EEE Lab" },
  { path: "/images/macetimages/facilities/eee_lab4.webp", caption: "EEE Lab", category: "EEE Lab" },
  { path: "/images/macetimages/facilities/mechanical_lab1.webp", caption: "Mechanical Lab", category: "Mechanical Lab" },
  { path: "/images/macetimages/facilities/mechanical_lab2.webp", caption: "Mechanical Lab", category: "Mechanical Lab" },
  { path: "/images/macetimages/facilities/mechanical_lab3.webp", caption: "Mechanical Lab", category: "Mechanical Lab" },
  { path: "/images/macetimages/facilities/workshop_lab1.webp", caption: "Workshop Lab", category: "Workshop Lab" },
  { path: "/images/macetimages/facilities/workshop_lab2.webp", caption: "Workshop Lab", category: "Workshop Lab" }
];

// Tabs list
const categories = [
  "All",
  "Computer Lab",
  "Central Lab",
  "AIML & DS Lab", 
  "Civil Lab",
  "ECE Lab",
  "EEE Lab",
  "Mechanical Lab",
  "Workshop Lab"
];

const Sports = () => {
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-5">
      <div className="cssBgGreenFirstSection">
        <div className="container">
          <div className="row">
            <div className={`col-12 col-lg-8 ${styles.cssContentText}`}>
              <p>Engineering education is incomplete without laboratory practice. The overall goal of engineering education is to prepare students to practice engineering and in particular to deal with the nature of problems faced by society. The laboratory practice has been an important part of Professional and Engineering Undergraduate Education as a laboratory is an ideal place for active learning.</p>
              <p> Students learn in a real-world environment, function as team members, discuss the planning of experiments, and share ideas about the analysis and interpretation of data. Most engineering instruction took place in the laboratory and it demands the active use of knowledge and skill.</p>
              <p> Laboratories also help bridge the gap between theory and practice by allowing students to apply classroom knowledge to hands-on experiments. This practical exposure enhances critical thinking, boosts creativity, and strengthens problem-solving abilities essential for real-world engineering challenges.</p>
            </div>
            <div className="col-12 col-lg-4">
              <Image
                src="/images/macetimages/facilities/central_lab.webp"
                height={229}
                width={435}
                className="w-100 h-100 rounded"
                alt="transport bus macet"
              />
            </div>
          </div>
        </div>
      </div>
    
    <div className="pt-5 pb-5">
       <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="cssUnderlineHeading">
                  <h2 className="cssHeadingUnderlinePageText">A Glance of Labs</h2>
               </div>
            </div>
             <div className="col-12">
             {/* Nav Pills */}
                <ul className={`nav nav-pills justify-content-center justify-content-lg-start mb-4 ${styles.cssNavPills}`}>
                    {categories.map((cat) => (
                    <li className="nav-item" key={cat}>
                        <button
                        className={`nav-link ${styles.cssNavLink} ${activeCategory === cat ? "active" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                        >
                        {cat}
                        </button>
                    </li>
                    ))}
                </ul>
                    {/* Images Grid */}
                            <div className="row g-4">
                            {filteredImages.map((img, index) => (
                                <div className="col-md-3 col-12" key={index}>
                                <div
                                    className={`card shadow-sm h-100 ${styles.cssLabsImageCont}`}
                                    style={{ cursor: "pointer"}}
                                    onClick={() => setLightboxIndex(index)}
                                >
                                    <Image
                                    src={img.path}
                                    alt={img.caption}
                                    className="card-img-top"
                                    width={400}
                                    height={300}
                                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                                    />
                                     <div className={styles.cssOverlayLabIcon}>
                                        <FaEye size={24}/>
                                    </div>
                                </div>
                                </div>
                            ))}
                            {filteredImages.length === 0 && (
                                <div className="text-center text-muted">No images available</div>
                            )}
                            </div>

                            <Lightbox
                                open={lightboxIndex >= 0}
                                close={() => setLightboxIndex(-1)}
                                slides={filteredImages.map((img) => ({
                                    src: img.path,
                                    title: img.caption,
                                }))}
                                index={lightboxIndex}
                            />
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sports;
