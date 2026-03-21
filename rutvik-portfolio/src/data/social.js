import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/rutvikmat",
    icon: FaGithub,
    username: "rutvikmat",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rutvik-mathapati-3a5577208/",
    icon: FaLinkedin,
    username: "rutvik-mathapati",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dev.ruti/",
    icon: FaInstagram,
    username: "dev.ruti",
    color: "hover:text-pink-400",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@dev.ruties",
    icon: FaYoutube,
    username: "dev.ruties",
    color: "hover:text-red-400",
  },
];

export default socialLinks;