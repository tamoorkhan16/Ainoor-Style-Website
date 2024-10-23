import React, { useState } from "react";

// import Swiper core and required modules
import {
  Navigation,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
  Autoplay,
  Pagination,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  const [active, setactive] = useState(null);

  const Slide_Images = [
    { image: "Images/Slider/Slider 1.png" },
    { image: "Images/Slider/Slider 2.png" },
    { image: "Images/Slider/Slider 3.png" },
    { image: "Images/Slider/Slider 4.png" },
    { image: "Images/Slider/Slider 5.png" },
  ];

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <>
      <Swiper
        onSlideChange={(cur) => setactive(cur.realIndex)}
        effect={"coverflow"}
        grabCursor={"true"}
        centeredSlides={"true"}
        loop={"true"}
        slidesPerView={"auto"}
        speed={800}
        autoplay={{
          delay: 3000,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
                  {Slide_Images.map((Slide_Image, i) => {
            return (
              <SwiperSlide
                key={i}
                className={`image_for_swipe ${active === i && "card_active"}`}
              >
                <img
                  src={Slide_Image.image}
                  alt="Slide_Image"
                  onLoad={handleImageLoad}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default Slider;

// --------------------------------------------
