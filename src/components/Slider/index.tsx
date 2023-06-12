import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from '../../assets/img/1687.jpg';
import img2 from '../../assets/img/6715526.jpg';
import img3 from '../../assets/img/tp195-393-audi-presentation-01.jpg';

export default function Slider () {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={img1} alt="" className="img-fluid" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="" className="img-fluid" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" className="img-fluid" /></SwiperSlide>
    </Swiper>
  )
}