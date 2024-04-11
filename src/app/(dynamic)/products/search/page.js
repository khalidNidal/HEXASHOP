// "use client";
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import styles from "./products.module.css";
import Link from "next/link";

import Bar from "../../../../component/SearchBar/searchbar";




export default async function blog(params) {
  const query  = params.searchParams.q;
  console.log("🚀 ~ blog ~ paramss:", query)
  
  // let pathname = usePathname(); 
  // console.log("🚀 ~ blog ~ pathname:", pathname)
  

  async function getdata() {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    return res.json();
  }
  
  
  const s = await getdata();
  console.log("🚀 ~ blog ~ s:", s)
  const products = s.products;
  console.log("🚀 ~ blog ~ products:", products)
  

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
      <Bar/>
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

// export default function Search () {
//   return (
//     <div>
//       asd
//     </div>
//   )
// }
