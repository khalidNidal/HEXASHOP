"use client";
import { useEffect, useState } from "react";
import styles from "./search.module.css";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { IoSearchOutline } from "react-icons/io5";

function s(query, router) {
  router.push(`/products/search?q=${query}`);
}
export default function searchbar() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 1000);
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
  );
}
