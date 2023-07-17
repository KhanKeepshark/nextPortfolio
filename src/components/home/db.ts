import { IconType } from "react-icons";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi2";

export const skillLists: { front: string[]; back: string[]; other: string[] } =
  {
    front: [
      "HTML5",
      "CSS/SASS",
      "TypeScript",
      "React",
      "Vue3",
      "NextJs",
      "TailwindCSS",
      "Bootstrap",
    ],
    back: [
      "NodeJs",
      "ExpressJS",
      "Sequelize",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Restful APIs",
      "Django",
    ],
    other: [
      "Git",
      "GitLab",
      "GitHub",
      "Figma",
      "Photoshop",
      "Nginx",
      "Linux",
      "Postman",
    ],
  };

export const expData: [
  { company: string; monthEng: string; monthRus: string; year: string },
  IconType,
][] = [
  [
    {
      company: "ENU",
      monthEng: "September-December",
      monthRus: "Сентябрь-Декабрь",
      year: "2022",
    },
    HiAcademicCap,
  ],
  [
    {
      company: "Freelance",
      monthEng: "January-February",
      monthRus: "Январь-Февраль",
      year: "2023",
    },
    AiFillDollarCircle,
  ],
];

export const contactLinks: [IconType, string, string?][] = [
  [LiaTelegram, "https://t.me/Khan20451", "text-xl"],
  [BsLinkedin, "https://www.linkedin.com/in/alikhan-utegen-4aa758259/"],
  [BsGithub, "https://github.com/KhanKeepshark", "text-xl"],
  [BsWhatsapp, "https://wa.me/+77079284248", "text-xl"],
];
