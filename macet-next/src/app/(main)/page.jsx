import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import SharedLoader from '@/components/SharedLoader';
import BannerFdata from '@/components/homepage/BannerFdata';
import AboutSection from '@/components/homepage/AboutSection';
import FromDesk from '@/components/homepage/FromDesk';
import GlanceMission from '@/components/homepage/GlanceMission';
import Recruters from '@/components/homepage/Recruters';
import PlacedStudent from '@/components/homepage/PlacedStudent';
import Testimonials from '@/components/homepage/Testimonials';
import NoticeSection from '@/components/homepage/NoticeSection';

const page = () => {
  return (
    <div>
      <BannerFdata />
      <AboutSection />
      <NoticeSection />
      <FromDesk />
      <GlanceMission />
      <Recruters />
      <PlacedStudent />
      <Testimonials />
    </div>
  )
}

export default page
