"use client"

import { ThemeContext } from "@/app/context/ThemeContext"
import { useContext, useState } from "react"
import styles from "./Darkmood.module.css"
export default function Darkmood() {
  const {toggle,mode} = useContext(ThemeContext)
    
    return (

    <>
    <div className={styles.container} onClick={toggle }>
    <div className={styles.icon}>☀️</div>
    <div className={styles.icon}>🌑</div>
    <div 
    className={styles.switcher} 
    style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
    </div>


      
    </>
  )
}
