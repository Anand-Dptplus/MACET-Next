import { fetchFromApi } from '@/lib/api';
import React from 'react'
import Banner from './Banner';

export default async function BannerFdata () {
    const data = await fetchFromApi('WebBanner/WebBannerList', 'banner');
     return <Banner bannerimg={data} />;
}
