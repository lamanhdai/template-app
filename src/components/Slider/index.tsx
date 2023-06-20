import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import img1 from '../../assets/img/blue-2564660_1280-1280x500.jpg';
import img2 from '../../assets/img/fashion-weeks-29-september-t-m-11-oktober_1280x500_39962.jpg';
import img3 from '../../assets/img/slider_woman.jpg';
import {
  StyledButton,
  StyledSlider
} from './index.style'

export default function Slider () {
  return (
    <StyledSlider className='container'>
    <Swiper
      modules={[Autoplay, Pagination ]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay
    >
      <SwiperSlide>
        <div className="position-relative">
        <img src={img1} alt="" className="img-fluid" />
        <div className="slider__text">
          <div className="columns col-12 text-center">
            <h2>New Collection</h2>
            <h3>For your beauty and fashion</h3>
            <StyledButton to="#" className="btn cta">See the collection</StyledButton>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="position-relative">
        <img src={img2} alt="" className="img-fluid" />
        <div className="slider__text">
          <div className="columns col-12 text-center">
            <h2>Feel the luxury</h2>
            <h3>special collection</h3>
            <StyledButton to="#" className="btn cta">See the collection</StyledButton>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="position-relative">
        <img src={img3} alt="" className="img-fluid" />
        <div className="slider__text">
          <div className="columns col-12 text-center">
            <h2>Vogue Style</h2>
            <h3>For modern women</h3>
            <StyledButton to="#" className="btn cta">See the collection</StyledButton>
          </div>
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </StyledSlider>
  )
}