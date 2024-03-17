import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CardComidas from "../Card/CardComidas";

export default function CarruselComidas({ name, FOODS_CONST = []}) {
  return (
    <div className="my-[50px]">
      <h1 className="text-center text-[40px] font-light">{name}</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        className="h-[320px] flex items-center w-full px-12 justify-center"
      >
        {FOODS_CONST.map((info) => {
          return (
            <SwiperSlide className="size-[300px] " key={info.name}>
              <CardComidas
                name={info.name}
                time={info.time}
                imagen={info.img}
              ></CardComidas>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
