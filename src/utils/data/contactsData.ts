import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const contactsData = {
  email: "mh1729574@gmail.com",
  phone: "+92 317 955 6106",
  address: "Pushtoon Ghari, Pabbi, Nowshera, KPK, Pakistan",
  github: "https://github.com/Hamzadevolperweb",
  linkedIn: "https://www.linkedin.com/in/m-hamza-dev",
};

export const whyWorkWithMe =
  "I build polished, performant web experiences with clean architecture, responsive design, and a strong focus on usability. Whether it's product UI, API integration, or scalable frontend systems, I care about shipping dependable work that feels great to use.";

export const socialLinks = [
  {
    icon: Mail,
    text: contactsData.email,
    href: `mailto:${contactsData.email}`,
  },
  {
    icon: Phone,
    text: contactsData.phone,
    href: `tel:${contactsData.phone}`,
  },
  { icon: MapPin, text: contactsData.address },
  { icon: Github, text: "GitHub", href: contactsData.github },
  {
    icon: Linkedin,
    text: "LinkedIn",
    href: contactsData.linkedIn,
  },
];
