import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import SharedLoader from '@/components/SharedLoader';
import BannerFdata from '@/components/homepage/BannerFdata';
import AboutSection from '@/components/homepage/AboutSection';
import NoticeSectionFData from '@/components/homepage/NoticeSectionFData';

const page = () => {
  return (
    <div>
      <BannerFdata />
      <AboutSection />
      <NoticeSectionFData />
    </div>
  )
}

export default page
