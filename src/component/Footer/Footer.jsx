import Image from "next/image";
import styles from "./Footer.module.css";
import {media} from"../Navbar/data"

export default function Footer() {

  return (
    <>
      <div className={styles.footer}>
        <div>© HEXASHOP all right reserved</div>

        <div className={styles.social}>

          {media.map((item) => {
            
          <Image
          key={item.id}
            src={`/images/${item.media}.png`}
            width={20}
            height={20}
            alt={item.alt}
            className={styles.icon}
          />
          })}

          <Image
            src="/images/facebook.png"
            width={20}
            height={20}
            alt="facebook"
            className={styles.icon}
          />

          <Image
            src="/images/facebook.png"
            width={20}
            height={20}
            alt="facebook"
            className={styles.icon}
          />
        </div>
      </div>
    </>
  );
}
