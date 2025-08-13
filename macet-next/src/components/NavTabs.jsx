'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '@/app/(main)/(pages)/about/about-us/page.module.css'

const NavTabs = ({ tabs }) => {
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab');
  const defaultTab = tabQuery || tabs[0]?.id || '';
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (tabQuery) {
      setActiveTab(tabQuery);
    } else if (tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabQuery, tabs]);

  return (
    <div className="">
      <div className="container">
        <div className="row">
            <div className={styles.marginTopAboutButtons}>
                <div className={styles.btnFlexWrap}>
                    {tabs.map((btn) => (
                        <div  key={btn.id} className={styles.aboutButtonsContainer}>
                          <button
                            className={`${styles.customBtn} ${activeTab === btn.id ? styles.active : ""}`}
                            onClick={() => setActiveTab(btn.id)}
                            >
                            <span className={styles.btnText}>{btn.label}</span>
                            <span className={styles.cssDepartmentIcon}>
                                {btn.icon}
                            </span>
                            </button>
                        </div>
                    ))}   
                </div>
            </div>

          <div className="col-md-12 mt-3">
            <div>{tabs.find((t) => t.id === activeTab)?.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
