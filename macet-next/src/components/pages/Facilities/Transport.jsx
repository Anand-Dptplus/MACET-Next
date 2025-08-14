import React from "react";
import styles from "@/app/(main)/(pages)/facilities/transport/page.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import SharedLoader from "@/components/SharedLoader";
const Lab = dynamic(() => import("@/components/pages/Facilities/Lab"), {
  loading: () => <SharedLoader />,
});
import GlanceofSports from "@/data/facilities/Sports/GlanceofSports.json";
const GoverningBodyContent = dynamic(() => import("./GoverningBodyContent"), {
  loading: () => <SharedLoader />,
});
import CollegeSportsCommittee from "@/data/facilities/Sports/CollegeSportsCommittee.json";

const Sports = () => {
  return (
    <div className="pt-5">
      <div className="cssBgGreenFirstSection">
        <div className="container">
          <div className="row">
            <div className={`col-12 col-lg-8 ${styles.cssContentText}`}>
              <p>
                The college provides transport facilities to all its students &
                staff through large number of outsourced buses from City to
                Neora Campus.
              </p>
              <p>
                This facility is free of cost to all students and also there is
                a separate buses for the girls students. There are two routs of
                buses, one starting from Gandhi Maidan following Bailey Road,
                Saguna more etc. and other from Anisabad city office following
                Phulwari Sharif Road.
              </p>
              <p>
                To ensure safe and timely travel, the college operates a
                well-structured bus schedule with GPS-enabled tracking for
                real-time monitoring. Each bus is staffed with trained personnel
                to assist students and maintain order. Extra care is taken
                during peak hours to ensure all students are accommodated and
                buses run on time.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <Image
                src="/images/macetimages/facilities/transport-bus-img.webp"
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
            <div className="col-12 col-lg-6">
              <div className="cssUnderlineHeading">
                <h2 className="cssHeadingUnderlinePageText">Bus Route</h2>
              </div>
              <h5 className="mb-2">First Route (From Gandhi Maidan)</h5>
              <div className={styles.horizontalRoute}>
                <span>Gandhi Maidan</span>
                <span>→</span>
                <span>Dank Banglaw</span>
                <span>→</span>
                <span>Kotwali</span>
                <span>→</span>
                <span>Income Tax Chowk</span>
                <span>→</span>
                <span>Raja Bazar</span>
                <span>→</span>
                <span>Ashiyana More</span>
                <span>→</span>
                <span>Secretariat</span>
                <span>→</span>
                <span>BPSC Office</span>
                <span>→</span>
                <span>Gola Road</span>
                <span>→</span>
                <span>Saguna More</span>
                <span>→</span>
                <span>Danapur Station</span>
                <span>→</span>
                <span>Shiwala More</span>
                <span>→</span>
                <span>Neoraganj</span>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d115126.81451945257!2d84.99496287610444!3d25.614452951621054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ed58c3720a28c7%3A0x27bbae3503db6fc!2sGandhi%20Chowk%2C%20Muhammadpur%2C%20Patna%2C%20Bihar!3m2!1d25.616657399999998!2d85.17282399999999!4m5!1s0x39ed55829f823765%3A0x73cf8c6e24c57104!2sMaulana%20Azad%20College%20of%20Engineering%20%26%20Technology%20%7BMACET%7D%2C%20Gorhna%2C%20Neora%2C%20Bihar!3m2!1d25.5873103!2d84.98212339999999!5e0!3m2!1sen!2sin!4v1750479743748!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
           <div className="row">
            <div className="col-12 col-lg-6">
              <h5 className="mt-3 mb-2">Second Route (From Anisabad)</h5>
              <div className={styles.horizontalRoute}>
                <span>Anisabad</span>
                    <span>→</span>
                    <span>Haroon Nagar</span>
                    <span>→</span>
                    <span>Phulwari Padao</span>
                    <span>→</span>
                    <span>Phulwari Thana</span>
                    <span>→</span>
                    <span>Khagaul Lakh</span>
                    <span>→</span>
                    <span>Danapur Station</span>
                    <span>→</span>
                    <span>Shiwala More</span>
                    <span>→</span>
                    <span>Neoraganj</span>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d57568.943597280864!2d85.0031142428211!3d25.60295648284873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39f2a9001f8033ef%3A0x791ad5deebd45e94!2sAnisabad%20Golambar%2C%20Anisabad%2C%20Patna%2C%20Bihar!3m2!1d25.5852638!2d85.09591739999999!4m5!1s0x39ed55829f823765%3A0x73cf8c6e24c57104!2sMaulana%20Azad%20College%20of%20Engineering%20%26%20Technology%20%7BMACET%7D%2C%20Gorhna%2C%20Neora%2C%20Bihar!3m2!1d25.5873103!2d84.98212339999999!5e0!3m2!1sen!2sin!4v1750479924361!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
