import { fetchFromApi } from '@/lib/api';
import LatestNews from './LatestNews';
import React from 'react'

export default async function LatestNewsFdata () {
    const data = await fetchFromApi('ALLNews/WebNewsType?newstype=SN', 'getlatestnews');
    return <LatestNews newsItems={data} />;
}
