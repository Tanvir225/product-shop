// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "./stylesEffect.css";
import { Pagination } from "swiper/modules";
const EffectOverFlow = () => {
  return (
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    >
        <SwiperSlide>OK</SwiperSlide>
        <SwiperSlide>OK</SwiperSlide>
        <SwiperSlide>OK</SwiperSlide>
        <SwiperSlide>OK</SwiperSlide>
    </Swiper>
  );
};

export default EffectOverFlow;
