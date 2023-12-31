"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./page.module.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image from "public/images/facebook.png";
import { Alert, CCarousel, CCarouselItem, CImage } from "@coreui/react";
import Link from "next/link";

export default async function catigores() {
  async function getdata() {
    const res = await fetch("https://dummyjson.com/products/categories");
    return res.json();
  }

  const Catigores = await getdata();
  // console.log("🚀 ~ file: page.jsx:12 ~ blog ~ Catigores: ", Catigores.length);
  // console.log("🚀 ~ file: page.jsx:12 ~ blog ~ Catigores: ", Catigores);
  function displaySlides() {
    return Catigores.map((cat) => {
      return (
        <div key={0} className={styles.c}>
          <Link href={`/categories/${cat}`}>
          <p >{cat}</p>
          </Link>
        </div>
      );
    });
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.swiper}>
          <Carousel autoPlay infiniteLoop showArrows={false} interval={6000} >
            {displaySlides()}
          </Carousel>
        </div>
      </div>
    </>
  );
}

// return (
//   <>
//     <div className={styles.container}>
//       <div className={styles.swiper}>
//       <Swiper
//         style={{
//           "--swiper-pagination-color": "green",
//           "--swiper-pagination-bullet-inactive-color": "#999999",
//           "--swiper-pagination-bullet-inactive-opacity": "1",
//         }}
//         slidesPerView={3}
//         spaceBetween={50}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Autoplay, Pagination, Navigation]}
//       >
//           <div>
//             {Catigores.map((catigore) => {
//               return (
//                 <Link href={`/categories/${catigore}`} >
//                 <SwiperSlide className={styles.a}><p>{catigore}</p></SwiperSlide>
//                 </Link>
//               );
//             })}
//           </div>
//       </Swiper>
//       </div>
//     </div>
//   </>
// );
