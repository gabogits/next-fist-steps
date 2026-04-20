"use client";
import Link from "next/link";
import React from "react";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface ActiveLinkProps {
  path: string;
  text: string;
}

const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;
  return (
    <Link
      key={path}
      className={`${styles.link} ${isActive ? styles.activeLink : styles.linkInactive}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
