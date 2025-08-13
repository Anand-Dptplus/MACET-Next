import SharedLoader from '@/components/SharedLoader';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Suspense } from 'react'
const Breadcumbs = dynamic(() => import('@/components/Breadcumbs'), { loading: () => <SharedLoader /> });
import NavTabs from '@/components/NavTabs';
import { FaSearch } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { MdLocalActivity } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa"; 
import { FaUserTie } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
const AboutCSE = dynamic(() => import("@/components/pages/Department/ComputerScEng/AboutCSE"), {loading: () => <SharedLoader />});
import aboutCSEData from '@/data/department/CivilEngineering/aboutCSEData.json';
const MissionVision = dynamic(() => import("@/components/pages/Department/ComputerScEng/MissionVision"), {loading: () => <SharedLoader />});
import missionVisionData from '@/data/department/CivilEngineering/missionVisionData.json';
const Lab = dynamic(() => import("@/components/pages/Department/ComputerScEng/Lab"), {loading: () => <SharedLoader />});
import labData from '@/data/department/CivilEngineering/LabData.json';
const GoverningBodyContent = dynamic(() => import("@/components/pages/GoverningBodyContent"), {loading: () => <SharedLoader />})
import faculty from '@/data/department/CivilEngineering/faculty.json'
const MentorCard = dynamic(() => import("@/components/pages/Department/CivilEng/MentorCard"), {loading: () => <SharedLoader />})
import MentorsData from '@/data/department/CivilEngineering/MentorsData.json'
const GetInTouch = dynamic(() => import("@/components/pages/Department/ComputerScEng/GetInTouch"), {loading: () => <SharedLoader />})
import GetInTouchData from '@/data/department/CivilEngineering/GetInTouchData.json'


const page = () => {
    const tabs = [
    {
      id: "AboutCE",
      label: "About CE",
      icon: <IoEye size={21} />,
      content: (
           <Suspense fallback={<div>About CSE</div>}>
              <AboutCSE data={aboutCSEData}/>
           </Suspense>
      ),
    },
    {
      id: "MissionVision",
      label: "Mission & Vision",
      icon: <FaBullseye  size={18} />,
      content: (
        <>
          <Suspense fallback={<div>Mission & Vision</div>}>
           <MissionVision mission={missionVisionData.mission} vision={missionVisionData.vision} />
           </Suspense>
        </>
      ),
    },
    {
      id: "Labs",
      label: "Labs",
      icon: <ImLab  size={18} />, 
      content: (
        <>
          <Suspense fallback={<div>Labs</div>}>
           <Lab data={labData}/>
          </Suspense>
        </>
      ),
    },
    {
      id: "Activities",
      label: "Activities",
      icon: <MdLocalActivity  size={18} />,
      content: (
        <>
            <div style={{height: '40vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '18px', fontWeight: '600'}}>Coming Soon</p>
            </div>
        </>
      ),
    },
    {
      id: "Faculty Profile",  
      label: "Faculty Profile",
      icon: <FaUser size={17} />, 
      content: (
        <> 
           <Suspense fallback={<div>Loading Faculty Profile...</div>}>
            <GoverningBodyContent members={faculty} cardHeight={350}/>
          </Suspense>
        </>
      ),
    },
    {
      id: " Mentor",
      label: " Mentor",
      icon: <Image src="/images/icons/department/mentor.png" alt="Mentor" width={20} height={20}/>,
      content: (
        <>
          <Suspense fallback={<div>Loading Mentor...</div>}>
             <MentorCard mentorsdata={MentorsData}/>
          </Suspense>
        </>
      ),
    },
    {
      id: "Time Table",
      label: "Time Table",
      icon: <FaCalendarAlt size={17} />,
      content: (
        <>
            <div style={{height: '40vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '18px', fontWeight: '600'}}>Coming Soon Time Table</p>
            </div>
        </>
      ),
    },
    {
      id: "Staff",
      label: "Staff",  
      icon: <FaUserTie size={18} />,
      content: (
        <>
           <div style={{height: '40vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '18px', fontWeight: '600'}}>Coming Soon Staff</p>
            </div>
        </>
      ),
    },
     {
      id: "Syllabus",
      label: "Syllabus",  
      icon: <FaBookBookmark size={16} />,
      content: (
        <>
          <div style={{height: '40vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '18px', fontWeight: '600'}}>Coming Soon Syllabus</p>
            </div>
        </>
      ),
    },
     {
      id: "Get In Touch",
      label: "Get In Touch",  
      icon: <MdContactMail size={18} />,
      content: (
        <>
           <Suspense fallback={<div>Loading GetIn...</div>}>
             <GetInTouch contactdata={GetInTouchData}/>
          </Suspense>
        </>
      ),
    },
  ];
  return (
    <>
      <Breadcumbs title="Diploma in Civil Engineering" />
        <NavTabs tabs={tabs} />
    </>
  )
}

export default page
