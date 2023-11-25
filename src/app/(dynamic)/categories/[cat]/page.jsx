import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./products.module.css"

export default async function cat({params}) {
  async function getdata() {
    const res = await fetch(`https://dummyjson.com/products/category/${params.cat}`);
    return res.json();
  }

  const eachcat = await getdata();
  const products = eachcat.products
  console.log("🚀 ~ file: page.jsx:14 ~ cat ~ products:", products)
  // console.log("🚀 ~ file: page.jsx:12 ~ blog ~ Catigores: ", Catigores.length);
  // console.log("🚀 ~ file: page.jsx:12 ~ blog ~ eachcat: ", eachcat);
  return (
    <div>
      <div className={styles.main}>
        {

          products.map(product=>
            // eslint-disable-next-line react/jsx-key
            <div className={styles.Maincontainer}>
              
            <Link href={`/products/${product.id}`} key={product.id} >
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
            )
        }
      </div>
    </div>
  )
}


