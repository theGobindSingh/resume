import { RiMailSendFill, RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub, BsTelephoneFill } from "react-icons/bs";

export const contact = [
  [
    "Email",
    "android.gobind@gmail.com",
    <RiMailSendFill />,
    "mailto:android.gobind@gmail.com",
  ],
  ["Phone", "+91 94155 07316", <BsTelephoneFill />, "tel:+919415507316"],
  [
    "WhatsApp",
    "+91 94155 07316",
    <IoLogoWhatsapp />,
    "https://wa.me/+919415507316",
  ],
  [
    "GitHub",
    "@theGobindSingh",
    <BsGithub />,
    "https://github.com/theGobindSingh",
  ],
  [
    "Instagram",
    "@theGobindSingh",
    <RiInstagramFill />,
    "https://instagram.com/theGobindSingh",
  ],
];
