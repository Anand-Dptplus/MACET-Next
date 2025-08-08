import SharedLoader from '@/components/SharedLoader';
import dynamic from 'next/dynamic';
import { Suspense } from 'react'
const Breadcumbs = dynamic(() => import('@/components/Breadcumbs'), { loading: () => <SharedLoader /> });
import NavTabs from '@/components/NavTabs';
import { FaBook, FaSearch } from "react-icons/fa";
import { PiTreeStructureFill } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

const page = () => {
    const tabs = [
    {
      id: "Overview",
      label: "Overview",
      icon: <IoEye color="white" size={22} />,
      content: (
           <Suspense fallback={<div>Loading Overview...</div>}>
           <p>Overview</p>
           </Suspense>
      ),
    },
    {
      id: "Courses Offered",
      label: "Courses Offered",
      icon: <FaBook color="white" size={18} />,
      content: (
        <>
          <Suspense fallback={<div>Loading Courses...</div>}>
           <p>Courses Offered</p>
           </Suspense>
        </>
      ),
    },
    {
      id: "Insfrastructure & Equipments",
      label: "Insfrastructure & Equipments",
      icon: <PiTreeStructureFill color="white" size={21} />,
      content: (
        <>
          <Suspense fallback={<div>Loading Insfrastructure...</div>}>
            <p>Insfrastructure & Equipments</p>
          </Suspense>
        </>
      ),
    },
    {
      id: "Faculty",
      label: "Faculty",
      icon: <IoMdContact color="white" size={23} />,
      content: (
        <>
           <Suspense fallback={<div>Loading Faculty...</div>}>
           <p>Faculty</p>
          </Suspense>
        </>
      ),
    },
    {
      id: "academic-research",
      label: "Academic & Research",
      icon: <FaSearch color="white" size={21} />,
      content: (
        <> 
           <Suspense fallback={<div>Loading Academic...</div>}>
            <p>academic-research</p>
          </Suspense>
        </>
      ),
    },
    {
      id: " Events & Activities",
      label: " Events & Activities",
      icon: <MdEventAvailable color="white" size={23} />,
      content: (
        <>
          <p className="text-center">
            <b>Coming Soon</b>
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      <Breadcumbs title="B.Tech in Computer Science and Engineering" />
      <NavTabs tabs={tabs} />

    </>
  )
}

export default page
