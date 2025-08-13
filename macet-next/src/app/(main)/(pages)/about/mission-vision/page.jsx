import SharedLoader from '@/components/SharedLoader';
import dynamic from 'next/dynamic';
const Breadcumbs = dynamic(() => import('@/components/Breadcumbs'), { loading: () => <SharedLoader /> });
const CommonPagesBtn = dynamic(() => import('@/components/CommonPagesBtn'));
const MissionVisionContent = dynamic(() => import('@/components/pages/MissionVisionContent'));

// About section buttons array
const aboutButtons = [
  {
    href: '/about/about-us',
    text: 'About College',
    img: '/images/icons/aboutbtn/about.png',
    alt: 'about us button'
  },
  {
    href: '/about/about-millat-education-society',
    text: 'MES',
    img: '/images/icons/aboutbtn/mes.png',
    alt: 'mes'
  },        
  {
    href: '/about/mission-vision',
    text: 'Vision & Mission',
    img: '/images/icons/aboutbtn/mission-vision.png',
    alt: 'mission vision'
  },
  {
    href: '/about/governing-body',
    text: 'Governing Body',
    img: '/images/icons/aboutbtn/governingbody.png',
    alt: 'governingbody'
  },
  {
    href: '/college-administration',
    text: 'College Administrative',
    img: '/images/icons/aboutbtn/collegeadministrative.png',
    alt: 'collegeadministrative'
  }
]

const page = () => {
  return (
    <>
      <Breadcumbs title="Mission And Vision" />
      <CommonPagesBtn buttons={aboutButtons} />
      <MissionVisionContent />
    </>
  )
}

export default page
