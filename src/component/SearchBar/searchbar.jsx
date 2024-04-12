"use client";
import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { IoSearchOutline } from "react-icons/io5";

// import { useEffect, useState } from "react";


function s(query, router) {
  router.push(`/products/search?q=${query}`);
}
export default function searchbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, setText] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [query] = useDebounce(text, 1000);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!query) {
      // router.push("/products");
    } else {
      s(query, router);
    }
  }, [query, router]);

  return (
    <>
      <form
        className={styles.form}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        
        <input
          type="text"
          placeholder="search for products"
          className={styles.input}
        >
        </input>

        <button
        className={styles.button}
        >
          
          <IoSearchOutline />
          </button>
      </form>
    </>        
    
    
    )}