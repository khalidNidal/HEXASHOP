// "use client";
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import styles from "./products.module.css";
import Link from "next/link";
import axios from "axios";
import Bar from "../../../component/SearchBar/searchbar";
import { useRouter } from "next/navigation";

async function getdata() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}
// async function getsdata() {
//   const res = await fetch('https://dummyjson.com/products/search?q=phone');
//   return res.json();
// }

export default async function blog() {
  // 

  const data = await getdata();
  // console.log("🚀 ~ file: page.jsx:12 ~ blog ~ data:", data)
  const products = data.products;
  // console.log("🚀 ~ file: page.jsx:14 ~ blog ~ products:", products);
  
  // const s = await getsdata();
  // console.log("🚀 ~ blog ~ s:", s)
  // const ss = s.products.id=1;
  // console.log("🚀 ~ blog ~ ss:", ss)

  return (
    products.length === 0 ? <>
    <div className={styles.main}>
    <Bar/>
    </div>
    <div className={styles.nonfound}>No products found</div>
    </>

    :
    <>
      <div className={styles.main}>
        <div>

        <Bar/>
        </div>


        
        {/* <form>
          <input
            // onChange={(e) => {
            //   setVal(e.target.value);
            //   e.preventDefault();
            // }}
            type="text"
            placeholder="search for products"
            className={styles.input}
          ></input>
        </form> */}
      </div>

      <div className={styles.main}>
        {products.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <div className={styles.Maincontainer}>
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className={styles.post}>
                <div className={styles.imgcontainer}>
                  <Image
                    className={styles.img}
                    src={product.images[0]}
                    width={300}
                    height={300}
                    alt="psot pic"
                  ></Image>

                  <div className={styles.content}>
                    <h1>{product.title} </h1>
                    <p> {product.description} </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
