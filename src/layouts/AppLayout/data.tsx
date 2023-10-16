import { GrTextWrap } from "react-icons/gr";
import { LuKeyRound, LuPhoneCall } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBuildings, BiCodeAlt } from "react-icons/bi";
import { FiPlayCircle } from "react-icons/fi";
import { BsBagHeart, BsShield } from "react-icons/bs";
import { LiaListAltSolid } from "react-icons/lia";
import * as Icon from "@/components/SVGs/menu";

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
            icon: <Icon.MarketingIcon />,
          },
          {
            label: "Registrars",
            desc: "From admissions to finance",
            to: "/solution/team/register",
            icon: <Icon.RegistrarsIcon />,
          },
          {
            label: "Administrators",
            desc: "Effective student performance tracking",
            to: "/solution/team/administrator",
            icon: <Icon.AdministratorsIcon />,
          },
          {
            label: "Teachers",
            desc: "Make learning fun and interactive",
            to: "/solution/team/teacher",
            icon: <Icon.TeachersIcon />,
          },
          {
            label: "CFOs",
            desc: "Online financial management",
            to: "/solution/team/cfo",
            icon: <Icon.CFOIcon />,
          },
          {
            label: "CTOs",
            desc: "CTO-focused platform",
            to: "/solution/team/it",
            icon: <Icon.CTOIcon />,
          },
          {
            label: "Business Leaders",
            desc: "Performance-optimizing tech",
            to: "/solution/team/business",
            icon: <Icon.BusinessIcon />,
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
            icon: <Icon.AcademiesIcon />,
          },
          {
            label: "Schools",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/school",
            icon: <Icon.SchoolsIcon />,
          },
          {
            label: "Universities & Higher Education",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/universities",
            icon: <Icon.UniversitiesIcon />,
          },
          {
            label: "Corporate Learining",
            desc: "Lorem ipsum dolor sit amet consectetur.",
            to: "/solution/institutes/corporate",
            icon: <Icon.CorporateIcon />,
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
            image: "/assets/images/shapes/Preadmission.png",
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
