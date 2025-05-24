import { FaReact, FaNodeJs, FaGit, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
const Icons = () => {
  const listIcons = [
    {
      icon: <IoLogoJavascript size={40}  />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs size={40}  />,
      name: "NodeJs",
    },
    {
      icon: <FaReact size={40}  />,
      name: "React",
    },
    {
      icon: <FaGit size={40}  />,
      name: "Git",
    },
    {
      icon: <FaGithub size={40}  />,
      name: "GitHub",
    },
    {
      icon: <RiTailwindCssFill size={40}  />,
      name: "Tailwind",
    },
    {
      icon: <IoLogoFigma size={40}  />,
      name: "Figma",
    },
    {
      icon: <SiMui size={40}  />,
      name: "MUI",
    },
    {
      icon: <TbBrandFramerMotion size={40}  />,
      name: "Framer Motion",
    },
    {
      icon: <SiMongodb size={40}  />,
      name: "MongoDB",
    },
    {
      icon: <FaHtml5 size={40}  />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt size={40}  />,
      name: "CSS",
    },
  ];
  return (
    <div className="cursor-pointer grid grid-cols-6 gap-2 max-md:grid-cols-3  ">
    {listIcons.map((icon) => (
      <div key={icon.name} className=" p-4 bg-stone-700 rounded-md hover:bg-stone-800 transition-colors duration-300 ">
        <span className="flex flex-col gap-2 items-center">
        {icon.icon}
        <p className="text-sm text-center">{icon.name}</p>
        </span>
        
      </div>
    ))}
    </div>
  );
};

const IconsNetwork = () => {
  return (
    <div className="flex gap-10  cursor-pointer">
      <FaLinkedin size={60} className="hover:text-blue-500" />
      <FaGithub size={60} className="hover:text-black" />
    </div>
  );
};

export { Icons, IconsNetwork };
