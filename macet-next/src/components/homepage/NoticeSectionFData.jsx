import React from 'react'
import NoticeSection from './NoticeSection';
import { fetchFromApi } from '@/lib/api';

export default async function NoticeSectionFData() {
     const data = await fetchFromApi('ALLNews/WebNewsType?newstype=NB', 'notice');
  return <NoticeSection noticeData={data} />;
}
