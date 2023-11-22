import Image from "next/image";
import Link from "next/link";
import image from "public/images/undraw_empty_cart_co35.svg";
import styles from "./page.module.css";
export default function page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <p className={styles.description}> Lorem, ipsum  elit. Similique praesentium doloremque, odio nostrum aspernatur, voluptates accusamus architecto rerum non sed eaque impedit animi possimus laboriosam ducimus delectus eveniet itaque fugit! </p>
           <Link href={"products"} ><button  className={styles.button}>shop now</button></Link>
        </div>
        <div className={styles.col}>
          <Image
          className={styles.img}
          src={image}
          alt="empty cart"
          ></Image>
        </div>
      </div>
    </>
  );
}
