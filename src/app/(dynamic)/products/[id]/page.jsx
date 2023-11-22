import { getMaxAge } from "next/dist/server/image-optimizer";
import Image from "next/image";
import styles from "./page.module.css";

export default async function post({ params }) {
  async function getdata() {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    return res.json();
  }

  const product = await getdata();
  console.log("🚀 ~ file: page.jsx:12 ~ post ~ data:", product);

  const images = product.images;
  // console.log("🚀 ~ file: page.jsx:15 ~ post ~ images:", images);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={styles.imgcontainer}>
          <Image
            className={styles.img}
            src={product.images[0]}
            alt="product img"
            fill={true}
          />
        </div>
        <div className={styles.subimg}>
        {images.map((img) => {
          return (
            <Image
              key={product.id}
              className={styles.img}
              src={img}
              alt="product img"
              width={100}
              height={100}
            />
          );
        })}
        </div>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          placeat autem modi corrupti temporibus, nesciunt explicabo esse quidem
          provident quibusdam mollitia perspiciatis omnis dolores quaerat
          dolorem magnam tenetur praesentium architecto?
        </p>
      </div>
    </>
  );
}
