"use client";

// import { useEffect, useState } from "react";
import styles from "./search.module.css"


export default  function searchbar() {

  
  // const [ val , set ] = useState("")
  // console.log("🚀 ~ file: searchbar.jsx:9 ~ searchbar ~ val:", val)
  return (
    <>
    <form
   
    onSubmit={(e) => {
      e.preventDefault()
    }}
    >
        <input type="text" placeholder="search for products" className={styles.input} ></input>
    </form>
    </>
  );
}
