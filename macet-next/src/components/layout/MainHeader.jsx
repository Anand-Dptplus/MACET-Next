import React from 'react'
import Header from './Header'
import { fetchFromApi } from '@/lib/api';

export default async function MainHeader() {
    const newsItems = await fetchFromApi('ALLNews/WebNewsType?newstype=SN', 'getlatestnews');
  return <Header newsItems={newsItems}/>;
}
