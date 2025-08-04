import React, {Suspense} from 'react';
import dynamic from 'next/dynamic';
import SharedLoader from '@/components/SharedLoader';
import BannerFdata from '@/components/homepage/BannerFdata';

const page = () => {
  return (
    <div>
      <BannerFdata />
    </div>
  )
}

export default page
