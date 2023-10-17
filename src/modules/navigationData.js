import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    id: "about",
    label: "About me",
    icon: faUser,
  },
  {
    id: "education",
    label: "Education",
    icon: faGraduationCap,
  },
  {
    id: "expertise",
    label: "Experience",
    icon: faPen,
  },
  {
    id: "skills",
    label: "Skills",
    icon: faGem,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: faSuitcase,
  },
  {
    id: "contact",
    label: "Contact",
    icon: faLocationArrow,
  },
  {
    id: "feedback",
    label: "Feedback",
    icon: faComment,
  },
];

export default sections;
