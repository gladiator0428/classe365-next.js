import { GrAnnounce, GrTextWrap } from "react-icons/gr";
import { TbEdit } from "react-icons/tb";
import { IoSettingsOutline, IoSchoolOutline } from "react-icons/io5";
import { PiPresentation, PiToolbox } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { HiOutlineChip } from "react-icons/hi";
import { LuFileEdit, LuKeyRound, LuPhoneCall } from "react-icons/lu";
import { GiWhiteBook } from "react-icons/gi";
import { FaChalkboardUser } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBuildings, BiCodeAlt } from "react-icons/bi";
import { FiPlayCircle } from "react-icons/fi";
import { BsBagHeart, BsShield } from "react-icons/bs";
import { LiaListAltSolid } from "react-icons/lia";

export const headerLeftNavs = [
  {
    label: "Free Resources",
    to: "/free",
  },
  {
    label: "Solutions",
    to: "",
    subMenu: [
      {
        label: "Teams",
        to: "/",
        subMenu: [
          {
            label: "Marketing Teams",
            desc: "CRM software to boost your marketing",
            to: "/solution/team/marketing",
            icon: <GrAnnounce />,
          },
          {
            label: "Registrars",
            desc: "From admissions to finance",
            to: "/solution/team/register",
            icon: <TbEdit />,
          },
          {
            label: "Administrators",
            desc: "Effective student performance tracking",
            to: "/solution/team/administrator",
            icon: <IoSettingsOutline />,
          },
          {
            label: "Teachers",
            desc: "Make learning fun and interactive",
            to: "/solution/team/teacher",
            icon: <PiPresentation />,
          },
          {
            label: "CFOs",
            desc: "Online financial management",
            to: "/solution/team/cfo",
            icon: <CiDollar />,
          },
          {
            label: "CTOs",
            desc: "CTO-focused platform",
            to: "/solution/team/it",
            icon: <HiOutlineChip />,
          },
          {
            label: "Business Leaders",
            desc: "Performance-optimizing tech",
            to: "/solution/team/business",
            icon: <PiToolbox />,
          },
        ],
      },
      {
        label: "Organizations",
        to: "/",
        subMenu: [
          {
            label: "Academies",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/academies",
            icon: <LuFileEdit />,
          },
          {
            label: "Schools",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/school",
            icon: <GiWhiteBook />,
          },
          {
            label: "Universities & Higher Education",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/universities",
            icon: <IoSchoolOutline />,
          },
          {
            label: "Corporate Learining",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/corporate",
            icon: <FaChalkboardUser />,
          },
        ],
      },
      {
        label: "Features",
        to: "",
        subMenu: [
          {
            label: "Pre-Adminssion & Enrolment",
            to: "/solution/features/pre",
            image: "/assets/images/shapes/pre-admission.png",
          },
          {
            label: "Customer Relationship Management",
            to: "/solution/features/customer",
            image: "/assets/images/shapes/CRM.png",
          },
          {
            label: "Learning Management System",
            to: "/solution/features/learning",
            image: "/assets/images/shapes/LMS.png",
          },
          {
            label: "Finance & Accounting",
            to: "/solution/features/finance",
            image: "/assets/images/shapes/Finance.png",
          },
          {
            label: "Alumni Module",
            to: "/solution/features/alumni",
            image: "/assets/images/shapes/Alumni.png",
          },
          {
            label: "Apps & Integrations",
            to: "/solution/features/apps",
            image: "/assets/images/shapes/Integrations.png",
          },
          {
            label: "Student Information System",
            to: "/solution/features/student",
            image: "/assets/images/shapes/SIS.png",
          },
          {
            label: "Analytics",
            to: "/solution/features/analytics",
            image: "/assets/images/shapes/Analytics.png",
          },
          {
            label: "White Label Module",
            to: "/solution/features/white",
            image: "/assets/images/shapes/White label.png",
          },
          {
            label: "E-commerce Module",
            to: "/solution/features/ecommerce",
            image: "/assets/images/shapes/E-commerce.png",
          },
          {
            label: "Fee & Donation Module",
            to: "/solution/features/fee",
            image: "/assets/images/shapes/Fees_invoicing.png",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "More",
    to: "/",
    subMenu: [
      {
        label: "Resources",
        to: "/",
        subMenu: [
          {
            label: "Help Docs",
            to: "/help",
            icon: <AiOutlineInfoCircle />,
          },
          {
            label: "Demo & Webinars",
            to: "/demo",
            icon: <BiCodeAlt />,
          },
          {
            label: "APIs",
            to: "/apis",
            icon: <FiPlayCircle />,
          },
          {
            label: "Blog",
            to: "/blog",
            icon: <GrTextWrap />,
          },
        ],
      },
      {
        label: "Company",
        to: "/",
        subMenu: [
          {
            label: "About Us",
            to: "/about",
            icon: <BiBuildings />,
          },
          {
            label: "Careers",
            to: "/careers",
            icon: <BsBagHeart />,
          },
          {
            label: "Contact",
            to: "/contact",
            icon: <LuPhoneCall />,
          },
          {
            label: "Privacy Policy",
            to: "/privacy",
            icon: <BsShield />,
          },
          {
            label: "Terms & Conditions",
            to: "/terms",
            icon: <LiaListAltSolid />,
          },
          {
            label: "Data Security",
            to: "/security",
            icon: <LuKeyRound />,
          },
        ],
      },
    ],
  },
];

export const headerRightNavs = [
  {
    label: "Contact Sales",
    to: "/contact",
  },
  {
    label: "Log in",
    to: "/login",
  },
];
