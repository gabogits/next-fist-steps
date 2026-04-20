import {
  ContainerIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  type Icon,
} from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const navItems: { text: string; path: string }[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Contact",
    path: "/contact",
  },
  {
    text: "Pricing",
    path: "/pricing",
  },
];

export const Navbar = () => {
  console.log("Navbar component rendered");
  return (
    <nav className="flex justify-between items-center p-4">
      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};
