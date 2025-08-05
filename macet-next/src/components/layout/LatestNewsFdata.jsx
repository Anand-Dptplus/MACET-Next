
import { fetchFromApi } from '@/lib/api';
import LatestNews from './LatestNews';

export default async function HeaderWrapper() {
  const newsItems = await fetchFromApi('ALLNews/WebNewsType?newstype=SN', 'getlatestnews');
  return <LatestNews newsItems={newsItems} />;
}
