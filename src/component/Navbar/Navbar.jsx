import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { links } from "./data";
import LogoutButton from "../Buttons/LogoutButton/LogoutButton";
import Logo from "../Logo/Logo";
import Darkmood from "../Darkmoodtoggle/Darkmood";
export default function Navbar() {
  return (
    <div className={styles.container}>
<div>

      <Logo />
</div>

      <div className={styles.links}>
        <Darkmood/>
        {links.map((link) => {
            return(
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
            )
        })}

        <LogoutButton   />
      </div>

      
    </div>
  );
}
