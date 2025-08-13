import SharedLoader from '@/components/SharedLoader';
import dynamic from 'next/dynamic';
const Breadcumbs = dynamic(() => import('@/components/Breadcumbs'), { loading: () => <SharedLoader /> });
const CommonPagesBtn = dynamic(() => import('@/components/CommonPagesBtn'));
const GoverningBodyContent = dynamic(() => import('@/components/pages/GoverningBodyContent'));
import collegeAdministrative from "@/data/collegeAdministrative.json";

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
    href: '/about/college-administration',
    text: 'College Administrative',
    img: '/images/icons/aboutbtn/collegeadministrative.png',
    alt: 'collegeadministrative'
  }
]

const page = () => {
  return (
    <>
      <Breadcumbs title="The Governing Body of MACET" />
      <CommonPagesBtn buttons={aboutButtons} />
      <GoverningBodyContent members={collegeAdministrative} 
      cardHeight={350}/>
    </>
  )     
}

export default page
