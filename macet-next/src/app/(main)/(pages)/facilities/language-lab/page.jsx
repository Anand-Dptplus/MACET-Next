import SharedLoader from '@/components/SharedLoader';
import dynamic from 'next/dynamic';
const Breadcumbs = dynamic(() => import('@/components/Breadcumbs'), { loading: () => <SharedLoader /> });
const CommonPagesBtn = dynamic(() => import('@/components/CommonPagesBtn'));
const LanguageLab = dynamic(() => import('@/components/pages/Facilities/LanguageLab'), {loading: () => <SharedLoader />});

// About section buttons array
const aboutButtons = [
  {
    href: '/facilities/sports',
    text: 'Sports',
    img: '/images/icons/facilitiesbtn/sports.png',
    alt: 'about us button'
  },
  {
    href: '/facilities/transport',
    text: 'Transport',
    img: '/images/icons/facilitiesbtn/transport.png',
    alt: 'Transport'
  },
  {
    href: '/facilities/laboratories',
    text: 'Laboratories',
    img: '/images/icons/facilitiesbtn/laboratory.png',
    alt: 'Laboratories'
  },
  {
    href: '/facilities/canteen',
    text: 'Canteen',
    img: '/images/icons/facilitiesbtn/canteen.png',
    alt: 'canteen'
  },
  {
    href: '/facilities/scholarship',
    text: 'Scholarship',
    img: '/images/icons/facilitiesbtn/scholarship.png',
    alt: 'scholarship'
  },
  {
    href: '/facilities/language-lab',
    text: 'Language Lab',
    img: '/images/icons/facilitiesbtn/languagelab.png',
    alt: 'Language Lab'
  },
  {
    href: '/facilities/mentoring-system',
    text: 'Mentoring System',
    img: '/images/icons/facilitiesbtn/mentoringsystem.png',
    alt: 'Mentoring System'
  }
]

const page = () => {
  return (
    <>
      <Breadcumbs title="Language Lab" />
      <CommonPagesBtn buttons={aboutButtons} />
      <LanguageLab />
    </>
  )
}

export default page
